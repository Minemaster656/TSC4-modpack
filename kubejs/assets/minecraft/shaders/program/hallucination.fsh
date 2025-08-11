#version 150

uniform sampler2D DiffuseSampler;
uniform float time;
uniform float intensity;
uniform vec3 colorShift;
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

void main() {
    vec2 uv = texCoord;
    
    // Получаем исходный цвет
    vec4 originalColor = texture(DiffuseSampler, uv);
    
    // Создаем волновую деформацию
    float waveX = wave(uv.x + time, 10.0, 0.02 * intensity);
    float waveY = wave(uv.y + time, 8.0, 0.02 * intensity);
    
    // Применяем деформацию к UV координатам
    vec2 distortedUV = uv;
    distortedUV.x += waveX;
    distortedUV.y += waveY;
    
    // Получаем цвет из искаженной текстуры с проверкой границ
    vec4 distortedColor = safeTexture(DiffuseSampler, distortedUV);
    
    // Смешиваем исходный и искаженный цвета
    vec4 processedColor = mix(originalColor, distortedColor, 0.5);
    
    // Добавляем цветовое смещение только к RGB каналам
    processedColor.rgb += colorShift * intensity;
    
    // Добавляем пульсацию яркости
    float brightness = 1.0 + wave(time, 2.0, 0.2 * intensity);
    processedColor.rgb *= brightness;
    
    // Добавляем хроматическую аберрацию
    float chroma = 0.01 * intensity;
    vec4 chromaColor = vec4(0.0);
    chromaColor.r = safeTexture(DiffuseSampler, uv + vec2(chroma, 0.0)).r;
    chromaColor.b = safeTexture(DiffuseSampler, uv - vec2(chroma, 0.0)).b;
    processedColor.rgb = mix(processedColor.rgb, chromaColor.rgb, 0.3);
    
    // Добавляем эффект размытия
    vec2 blur = vec2(0.002 * intensity);
    vec4 blurColor = safeTexture(DiffuseSampler, uv + blur);
    blurColor += safeTexture(DiffuseSampler, uv - blur);
    blurColor += safeTexture(DiffuseSampler, uv + vec2(blur.x, -blur.y));
    blurColor += safeTexture(DiffuseSampler, uv + vec2(-blur.x, blur.y));
    blurColor /= 4.0;
    processedColor = mix(processedColor, blurColor, 0.3);
    
    // Добавляем шум для эффекта галлюцинаций
    float noiseValue = noise(uv + time);
    processedColor.rgb += vec3(noiseValue) * 0.1 * intensity;
    
    // Нормализуем цвет
    processedColor.rgb = clamp(processedColor.rgb, 0.0, 1.0);
    
    // Временно делаем пиксель полностью непрозрачным для диагностики
    fragColor = vec4(processedColor.rgb, 1.0);
} 