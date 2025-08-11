#version 150

uniform sampler2D DiffuseSampler;
uniform float time;
uniform float intensity; // Добавлена uniform для интенсивности
uniform vec2 InSize;
uniform vec2 OutSize;
uniform mat4 ProjMat;

in vec2 texCoord;
in vec2 oneTexel;

out vec4 fragColor;

// Функция для создания волнового эффекта
float wave(float x, float freq, float amp) {
    return sin(x * freq) * amp;
}

// Функция для создания шума
float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

// Функция для безопасного сэмплирования текстуры с clamping-ом UV
vec4 safeTexture(sampler2D tex, vec2 uv) {
    // Ограничиваем UV координаты диапазоном [0.0, 1.0]
    vec2 clampedUV = clamp(uv, 0.0, 1.0);
    return texture(tex, clampedUV);
}

// Функция для преобразования HSV в RGB
vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

// Функция для преобразования RGB в HSV
vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

void main() {
    vec2 uv = texCoord;
    
    // Получаем исходный цвет
    vec4 originalColor = texture(DiffuseSampler, uv);
    
    vec4 processedColor = originalColor; // Начинаем с исходного цвета
    
    // --- Эффект Неровностей в углах --- 
    
    // Определяем параметры неровных углов
    float cornerBaseSize = 0.2; // Базовый размер угла по диагонали
    float cornerUnevenness = 0.07; // Степень неровности границы (уменьшено)

    // Проверяем, находится ли текущий фрагмент в области неровного угла
    float cornerFactor = 0.0; // 0.0 вне углов, 1.0 в центре углов
    
    // Левый верхний угол
    float distTL = uv.x + uv.y; // Расстояние от верхнего левого угла по диагонали
    float thresholdTL = cornerBaseSize + (noise(uv * 30.0 + time * 1.5) - 0.5) * cornerUnevenness; // Неровный порог
    if (distTL < thresholdTL) {
        cornerFactor = 1.0; // Полное влияние в области неровного треугольника
        // Добавим плавный переход к границе
        cornerFactor = smoothstep(thresholdTL - 0.05, thresholdTL, distTL);
        cornerFactor = 1.0 - cornerFactor; // Инвертируем для smoothstep
    }
    
    // Правый нижний угол
    float distBR = (1.0 - uv.x) + (1.0 - uv.y); // Расстояние от нижнего правого угла по диагонали
    float thresholdBR = cornerBaseSize + (noise(uv * 30.0 + time * 1.5 + vec2(10.0, 5.0)) - 0.5) * cornerUnevenness; // Неровный порог
     if (distBR < thresholdBR) {
        cornerFactor = 1.0; // Полное влияние в области неровного треугольника
        // Добавим плавный переход к границе
        cornerFactor = smoothstep(thresholdBR - 0.05, thresholdBR, distBR);
        cornerFactor = 1.0 - cornerFactor; // Инвертируем для smoothstep
    }

    // Если фрагмент находится в области неровного угла
    if (cornerFactor > 0.01) { // Используем порог для плавного перехода
        vec4 cornerEffectColor;
        // Более сильное случайное искажение UV на основе шума и времени
        vec2 distortionOffset = vec2(
            noise(uv * 40.0 + time * 2.0) - 0.5,
            noise(uv * 40.0 + time * 2.0 + vec2(10.0, 5.0)) - 0.5
        ) * 0.05; // Уменьшена сила искажения
        
        vec2 distortedUnevenUV = uv + distortionOffset;
        
        // Получаем цвет из искаженной текстуры
        cornerEffectColor = safeTexture(DiffuseSampler, distortedUnevenUV);
        
        // Добавляем сильный шум (зернистость) и цветовые сдвиги, как на референсе
        float unevennessNoise = noise(uv * 60.0 - time * 3.0);
        cornerEffectColor.rgb *= (1.0 - unevennessNoise * 0.2); // Уменьшено влияние шума на яркость
        cornerEffectColor.rgb += vec3(unevennessNoise * 0.1, unevennessNoise * 0.05, unevennessNoise * 0.15); // Уменьшены случайные оттенки
        
        // Смешиваем эффект неровностей с исходным цветом по cornerFactor
        // Теперь смешиваем с processedColor, который начнет получать основной эффект
        processedColor = mix(processedColor, cornerEffectColor, cornerFactor);
    }
    
    // --- Эффект Винъетки --- 
    
    // Определяем параметры винъетки
    vec2 center = vec2(0.5, 0.5);
    float distFromCenter = length(uv - center);
    float vignetteStart = 0.6; // Базовое расстояние от центра, где начинается винъетка
    float vignetteEnd = 0.9; // Расстояние, где винъетка достигает полной силы
    float vignetteUnevenness = 0.1; // Степень неровности границы винъетки (шипы) (уменьшено)

    // Неровный порог для винъетки на основе шума
    float vignetteThreshold = vignetteStart + (noise(uv * 40.0 - time * 2.5) - 0.5) * vignetteUnevenness;
    
    // Определяем фактор винъетки
    // smoothstep будет 0.0 внутри порога и 1.0 за его пределами (с плавным переходом)
    float vignetteFactor = smoothstep(vignetteThreshold, vignetteThreshold + (vignetteEnd - vignetteStart), distFromCenter);

    // Если фрагмент находится в области винъетки
    if (vignetteFactor > 0.01) { // Используем порог для плавного перехода
        vec4 vignetteEffectColor;
        
        // Применяем искажение, шум и цветовые сдвиги, похожие на углы
        vec2 distortionOffset = vec2(
            noise(uv * 50.0 + time * 2.2) - 0.5,
            noise(uv * 50.0 + time * 2.2 + vec2(20.0, 15.0)) - 0.5
        ) * 0.04; // Уменьшена сила искажения
        
        vec2 distortedVignetteUV = uv + distortionOffset;
        
        // Получаем цвет из искаженной текстуры
        vignetteEffectColor = safeTexture(DiffuseSampler, distortedVignetteUV);
        
        // Добавляем шум (зернистость) и цветовые сдвиги
        float vignetteNoise = noise(uv * 70.0 + time * 3.5);
        vignetteEffectColor.rgb *= (1.0 - vignetteNoise * 0.2); // Уменьшено влияние шума на яркость
        vignetteEffectColor.rgb += vec3(vignetteNoise * 0.1, vignetteNoise * 0.15, vignetteNoise * 0.08); // Уменьшены случайные оттенки
        
        // Смешиваем эффект винъетки с processedColor по vignetteFactor
        processedColor = mix(processedColor, vignetteEffectColor, vignetteFactor);
    }
    
    // --- Психоделический эффект (основная часть экрана) --- 
    // Этот эффект применяется ко всей области, включая углы и виньетку, но с учетом effectFactor
    
    // Определяем фактор влияния эффекта на основе яркости исходного цвета
    float luminance = dot(originalColor.rgb, vec3(0.299, 0.587, 0.114)); // Вычисляем яркость
    float effectFactor = smoothstep(0.05, 0.2, luminance); // Эффект будет применяться только при яркости > 0.05 и достигнет полной силы при 0.2
    
    // Применяем эффекты цвета и яркости с учетом effectFactor
    if (effectFactor > 0.01) { // Применяем эффекты только если яркость не слишком низкая
        vec3 hsvColor = rgb2hsv(processedColor.rgb); // Работаем с processedColor
        
        // Увеличиваем диапазон изменения оттенков
        float hueShift = time * 0.4;
        // Добавляем более широкий диапазон изменения оттенка
        hsvColor.x = fract(hsvColor.x + hueShift + sin(hueShift * 0.5) * 0.3);
        // Увеличиваем насыщенность и делаем её более динамичной
        hsvColor.y = clamp(hsvColor.y * 1.8 + sin(hueShift * 0.7) * 0.2, 0.0, 1.0);
        // Увеличиваем яркость для более ярких цветов
        hsvColor.z = clamp(hsvColor.z * 1.2, 0.0, 1.0);
        
        processedColor.rgb = mix(processedColor.rgb, hsv2rgb(hsvColor), effectFactor * 2.5); // Усилено смешивание
        
        // Увеличиваем плавное цветовое смещение с более широким диапазоном
        vec3 colorShift = vec3(
            sin(time * 2.0) * 0.3, // Увеличено с 0.2 до 0.3
            cos(time * 2.5) * 0.3, // Увеличено с 0.2 до 0.3
            sin(time * 3.0) * 0.3  // Увеличено с 0.2 до 0.3
        ) * effectFactor;
        processedColor.rgb += colorShift;
        
        // Увеличиваем пульсацию яркости
        float brightness = 1.0 + sin(time * 3.0) * 0.4 * effectFactor; // Увеличено с 0.3 до 0.4
        processedColor.rgb *= brightness;
    }
    
    // --- Эффекты деформации, хроматической аберрации, размытия и шума (применяются ко всему экрану) --- 
    // Эти эффекты можно применять независимо от яркости

    // Создаем волновую деформацию
    // Увеличена амплитуда для эффекта "желе"
    float waveX = wave(uv.x * 1.5 + time * 0.6, 5.0, 0.1); // Изменена частота и амплитуда
    float waveY = wave(uv.y * 1.2 + time * 0.2, 3.2, 0.1); // Изменена частота и амплитуда

    // Применяем деформацию к UV координатам
    vec2 distortedUV = uv;
    distortedUV.x += waveX;
    distortedUV.y += waveY;

    // Получаем цвет из искаженной текстуры и смешиваем с processedColor
    // Увеличено смешивание для эффекта "желе"
    vec4 distortedSample = safeTexture(DiffuseSampler, distortedUV);
    processedColor.rgb = mix(processedColor.rgb, distortedSample.rgb, 0.8);
    
    // Добавляем хроматическую аберрацию (значительно усилена)
    float chroma = 0.015; // Уменьшено
    vec4 chromaColor = vec4(0.0);
    chromaColor.r = safeTexture(DiffuseSampler, uv + vec2(chroma, 0.0)).r;
    chromaColor.g = safeTexture(DiffuseSampler, uv).g; // Убираем смещение зеленого канала
    chromaColor.b = safeTexture(DiffuseSampler, uv - vec2(chroma, 0.0)).b;
    processedColor.rgb = mix(processedColor.rgb, chromaColor.rgb, 0.3); // Уменьшено смешивание
    
    // Добавляем эффект размытия (без изменений, если не указано)
    vec2 blur = vec2(0.004);
    vec4 blurColor = safeTexture(DiffuseSampler, uv + blur);
    blurColor += safeTexture(DiffuseSampler, uv - blur);
    blurColor += safeTexture(DiffuseSampler, uv + vec2(blur.x, -blur.y));
    blurColor += safeTexture(DiffuseSampler, uv + vec2(-blur.x, blur.y));
    blurColor /= 4.0;
    processedColor.rgb = mix(processedColor.rgb, blurColor.rgb, 0.4);
    
    // Добавляем шум (общее зерно) (уменьшена сила)
    float generalNoise = noise(uv * 7.0 + time);
    processedColor.rgb += vec3(generalNoise) * 0.15;
    
    // --- Финальная обработка --- 
    
    // Нормализуем цвет
    processedColor.rgb = clamp(processedColor.rgb, 0.0, 1.0);
    
    // Устанавливаем финальный цвет (принудительная непрозрачность)
    fragColor = vec4(processedColor.rgb, 1.0);
}