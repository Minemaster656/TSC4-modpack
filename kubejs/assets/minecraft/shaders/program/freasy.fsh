#version 150

uniform sampler2D DiffuseSampler;
uniform float time;
uniform float intensity;
uniform vec2 InSize;
uniform vec2 OutSize;
uniform mat4 ProjMat;

in vec2 texCoord;
in vec2 oneTexel;

out vec4 fragColor;

// Новая функция для нормализованной пульсации (0 до 1)
float normalizedPulse(float x, float freq) {
    return (sin(x * freq * 6.28318) + 1.0) * 0.5;
}

// Функция для создания шума
float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

// Функция для безопасного сэмплирования текстуры
vec4 safeTexture(sampler2D tex, vec2 uv) {
    vec2 clampedUV = clamp(uv, 0.0, 1.0);
    return texture(tex, clampedUV);
}

// Функция для создания эффекта "рыбьего глаза" с улучшенным дыханием
vec2 fisheye(vec2 uv, float strength, float time) {
    vec2 center = vec2(0.5, 0.5);
    vec2 dir = uv - center;
    float dist = length(dir);
    
    // Создаем более сложную пульсацию для эффекта дыхания
    float breathingPulse = normalizedPulse(time, 1.0); // Основной ритм дыхания
    float heartPulse = normalizedPulse(time, 2.0); // Дополнительная пульсация от сердцебиения
    
    // Комбинируем пульсации для более естественного эффекта
    float combinedPulse = breathingPulse * 0.7 + heartPulse * 0.3;
    
    // Создаем нелинейное искажение для более реалистичного эффекта
    float distortion = strength * (0.8 + combinedPulse * 0.4);
    float factor = 1.0 + distortion * dist * dist;
    
    // Добавляем легкое асимметричное искажение
    float asymmetry = sin(time * 0.5) * 0.1;
    factor *= (1.0 + asymmetry * dir.x * dir.y);
    
    return center + dir * factor;
}

// Функция для создания эффекта "вен"
float veins(vec2 uv, float time) {
    // Создаем несколько слоев вен с разными параметрами
    float veins = 0.0;
    
    // Основной слой вен (более заметный)
    float noise1 = noise(uv * 30.0 + time * 0.2);
    float noise2 = noise(uv * 40.0 - time * 0.1);
    float mainVeins = smoothstep(0.4, 0.6, noise1 * noise2);
    
    // Вторичный слой (более тонкие вены)
    float noise3 = noise(uv * 50.0 + time * 0.15);
    float noise4 = noise(uv * 60.0 - time * 0.05);
    float secondaryVeins = smoothstep(0.45, 0.55, noise3 * noise4);
    
    // Создаем пульсацию вен
    float veinPulse = normalizedPulse(time, 2.0);
    float veinThickness = 0.5 + veinPulse * 0.3; // Пульсация толщины
    
    // Комбинируем слои с пульсацией
    veins = mainVeins * veinThickness + secondaryVeins * (1.0 - veinThickness) * 0.5;
    
    // Добавляем "рваные" края
    float edgeNoise = noise(uv * 100.0 + time * 0.5);
    veins *= (1.0 + edgeNoise * 0.2);
    
    // Усиливаем эффект по краям экрана
    float distFromCenter = length(uv - vec2(0.5));
    float edgeFactor = smoothstep(0.3, 0.7, distFromCenter);
    veins *= (1.0 + edgeFactor * 0.5);
    
    return veins;
}

// Функция для создания эффекта "крови на линзе"
float bloodDrops(vec2 uv, float time) {
    float drop = 0.0;
    // Создаем капли по бокам экрана
    for(int i = 0; i < 8; i++) {
        float angle = float(i) * 3.14159 / 4.0; // Равномерно распределяем по кругу
        float radius = 0.4; // Радиус от центра
        vec2 basePos = vec2(0.5 + cos(angle) * radius, 0.5 + sin(angle) * radius);
        
        // Добавляем движение капель
        float dropTime = time * 0.2 + float(i) * 0.3;
        vec2 dropPos = basePos + vec2(
            sin(dropTime) * 0.05,
            cos(dropTime) * 0.05
        );
        
        // Создаем каплю
        float dist = length(uv - dropPos);
        float dropSize = 0.1 + sin(dropTime * 2.0) * 0.02; // Размер капли пульсирует
        drop += smoothstep(dropSize, 0.0, dist) * 0.4;
    }
    return drop;
}

// Функция для создания извивающихся капилляров
float capillaries(vec2 uv, float time) {
    float capillaries = 0.0;
    
    // Создаем несколько слоев капилляров с разными углами
    for(int i = 0; i < 8; i++) {
        // Базовые параметры для каждого слоя
        float angle = float(i) * 3.14159 / 4.0; // Равномерно распределяем углы
        float speed = 0.2 + float(i) * 0.05;
        float scale = 30.0 + float(i) * 5.0;
        
        // Создаем направление капилляра
        vec2 direction = vec2(cos(angle), sin(angle));
        
        // Проецируем точку на направление капилляра
        float projection = dot(uv - vec2(0.5), direction);
        
        // Создаем извивающуюся линию
        float wave = sin(projection * scale + time * speed) * 0.02;
        wave += sin(projection * scale * 2.0 + time * speed * 1.5) * 0.01;
        
        // Добавляем случайные изгибы
        float noise = noise(vec2(projection * 50.0 + time * 0.1, float(i)));
        wave += noise * 0.01;
        
        // Создаем капилляр с учетом расстояния от центра
        float distFromCenter = length(uv - vec2(0.5));
        float capillary = smoothstep(0.001, 0.0, abs(dot(uv - vec2(0.5), vec2(-direction.y, direction.x)) - wave));
        
        // Усиливаем эффект по краям экрана (уменьшили расстояние)
        float edgeFactor = smoothstep(0.1, 0.3, distFromCenter);
        capillary *= edgeFactor;
        
        // Добавляем пульсацию
        float pulse = normalizedPulse(time, 2.0 + float(i) * 0.5);
        capillary *= (0.5 + pulse * 0.5);
        
        // Добавляем к общему эффекту
        capillaries += capillary * (1.0 - float(i) * 0.1);
    }
    
    // Добавляем случайные ответвления
    float branches = 0.0;
    for(int i = 0; i < 12; i++) {
        float angle = float(i) * 3.14159 / 6.0;
        float speed = 0.3 + float(i) * 0.03;
        float scale = 40.0 + float(i) * 3.0;
        
        vec2 direction = vec2(cos(angle), sin(angle));
        float projection = dot(uv - vec2(0.5), direction);
        
        float wave = sin(projection * scale + time * speed) * 0.015;
        float branch = smoothstep(0.001, 0.0, abs(dot(uv - vec2(0.5), vec2(-direction.y, direction.x)) - wave));
        
        // Усиливаем ответвления по краям (уменьшили расстояние)
        float distFromCenter = length(uv - vec2(0.5));
        float edgeFactor = smoothstep(0.15, 0.35, distFromCenter);
        branch *= edgeFactor;
        
        branches += branch * 0.2;
    }
    
    // Комбинируем основные капилляры и ответвления
    capillaries = max(capillaries, branches);
    
    // Добавляем пульсацию прозрачности
    float alphaPulse = normalizedPulse(time, 1.5);
    capillaries *= (0.7 + alphaPulse * 0.3);
    
    return capillaries;
}

void main() {
    vec2 uv = texCoord;
    
    // Добавляем эффект треска экрана
    float crackIntensity = 0.002 * intensity;
    vec2 crackOffset = vec2(
        noise(vec2(time * 20.0, 0.0)) * crackIntensity,
        noise(vec2(0.0, time * 20.0)) * crackIntensity
    );
    uv += crackOffset;
    
    // Применяем улучшенный эффект "рыбьего глаза" с дыханием
    float baseStrength = 0.1 * intensity;
    uv = fisheye(uv, baseStrength, time);
    
    // Получаем исходный цвет
    vec4 originalColor = texture(DiffuseSampler, uv);
    
    // Десатурация мира с учетом глубины
    float luminance = dot(originalColor.rgb, vec3(0.299, 0.587, 0.114));
    vec3 desaturated = vec3(luminance);
    
    // Создаем пульсацию с разными частотами для разных эффектов
    float mainPulse = normalizedPulse(time, 2.0);
    float shadowPulse = normalizedPulse(time, 3.0);
    float chromaPulse = normalizedPulse(time, 2.0);
    
    // Создаем физическое движение виньетки к центру
    float pixelSize = 1.0 / OutSize.x;
    float moveAmount = 50.0 * pixelSize;
    vec2 center = vec2(0.5, 0.5);
    vec2 moveDirection = normalize(uv - center);
    vec2 movedUV = uv - moveDirection * moveAmount * mainPulse * intensity;
    
    // Пересчитываем расстояние от центра для новой позиции
    float distFromCenter = length(movedUV - center);
    float noiseValue = noise(movedUV * 10.0 + time);
    
    // Создаем единую пульсирующую виньетку
    float baseRadius = 0.25;
    float pulseAmount = 0.03;
    float pulseRadius = baseRadius - (mainPulse * pulseAmount * intensity);
    pulseRadius = max(pulseRadius, baseRadius - pulseAmount);
    
    // Создаем основную виньетку
    float vignetteStrength = smoothstep(pulseRadius, 0.75, distFromCenter);
    
    // Добавляем "рваные" края виньетки
    float edgeNoise = noise(movedUV * 20.0 + time * 0.5);
    vignetteStrength = mix(vignetteStrength, vignetteStrength * (1.0 + edgeNoise * 0.2), 0.5);
    
    // Создаем цвет виньетки с пульсацией
    vec3 vignetteColor = vec3(0.5 + mainPulse * 0.5 * intensity, 0.0, 0.0);
    
    // Применяем виньетку
    vec4 processedColor = vec4(mix(desaturated, vignetteColor, vignetteStrength), originalColor.a);
    
    // Добавляем эффект капилляров с улучшенным цветом
    float capillariesEffect = capillaries(uv, time) * intensity;
    
    // Создаем цвет капилляров с градиентом
    vec3 capillaryColor = mix(
        vec3(0.4, 0.0, 0.0), // Темно-красный
        vec3(0.6, 0.0, 0.0), // Ярко-красный
        normalizedPulse(time, 1.0)
    );
    
    // Добавляем легкий фиолетовый оттенок
    capillaryColor += vec3(0.1, 0.0, 0.1) * normalizedPulse(time, 2.0);
    
    // Применяем капилляры
    processedColor.rgb = mix(processedColor.rgb, capillaryColor, capillariesEffect);
    
    // Добавляем красные тени к объектам с пульсацией
    float shadowThreshold = 0.1;
    if (luminance < shadowThreshold) {
        vec3 shadowColor = vec3(0.6, 0.0, 0.0);
        float shadowStrength = smoothstep(shadowThreshold, 0.0, luminance);
        shadowStrength *= (0.8 + shadowPulse * 0.4 * intensity);
        processedColor.rgb = mix(processedColor.rgb, shadowColor, shadowStrength * 0.6);
    }
    
    // Добавляем 3D эффект (гоустинг)
    float depth = luminance;
    vec2 offset = vec2(0.0001 * intensity, 0.0);
    vec4 leftColor = safeTexture(DiffuseSampler, uv - offset);
    vec4 rightColor = safeTexture(DiffuseSampler, uv + offset);
    float leftDepth = dot(leftColor.rgb, vec3(0.299, 0.587, 0.114));
    float rightDepth = dot(rightColor.rgb, vec3(0.299, 0.587, 0.114));
    float depthDiff = abs(leftDepth - rightDepth);
    processedColor.rgb = mix(processedColor.rgb, vec3(0.0), depthDiff * 0.3);
    
    // Добавляем усиленную хроматическую аберрацию
    float chroma = 0.005 * intensity * (0.2 + chromaPulse * 0.6);
    vec4 chromaColor = vec4(0.0);
    chromaColor.r = safeTexture(DiffuseSampler, uv + vec2(chroma, 0.0)).r;
    chromaColor.b = safeTexture(DiffuseSampler, uv - vec2(chroma, 0.0)).b;
    processedColor.rgb = mix(processedColor.rgb, chromaColor.rgb, 0.4);
    
    // Добавляем цифровой шум и глюки
    float noiseValue2 = noise(uv * 100.0 + time);
    processedColor.rgb += vec3(noiseValue2) * 0.07 * intensity;
    
    // Добавляем эффект "ярости" - пульсирующее красное свечение
    float ragePulse = normalizedPulse(time, 4.0);
    vec3 rageColor = vec3(0.8, 0.0, 0.0);
    processedColor.rgb = mix(processedColor.rgb, rageColor, ragePulse * 0.3 * intensity);
    
    // Увеличиваем контраст и резкость
    processedColor.rgb = (processedColor.rgb - 0.5) * 1.3 + 0.5;
    
    // Добавляем усиленное дрожание картинки
    float shake = noise(vec2(time * 15.0)) * 0.003 * intensity;
    processedColor.rgb += vec3(shake);
    
    // Нормализуем цвет
    processedColor.rgb = clamp(processedColor.rgb, 0.0, 1.0);
    
    // Устанавливаем финальный цвет с полной непрозрачностью
    fragColor = vec4(processedColor.rgb, 1.0);
}
