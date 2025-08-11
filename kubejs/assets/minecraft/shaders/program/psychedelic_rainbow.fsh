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
    
    // Создаем волновую деформацию
    float waveX = wave(uv.x + time * 0.5, 10.0, 0.02 * intensity);
    float waveY = wave(uv.y + time * 0.5, 8.0, 0.02 * intensity);
    
    // Применяем деформацию к UV координатам
    vec2 distortedUV = uv;
    distortedUV.x += waveX;
    distortedUV.y += waveY;
    
    // Получаем цвет из искаженной текстуры с проверкой границ
    vec4 distortedColor = safeTexture(DiffuseSampler, distortedUV);
    
    // Смешиваем исходный и искаженный цвета
    vec4 processedColor = mix(originalColor, distortedColor, 0.6 * intensity);
    
    // Радужный эффект: сдвиг оттенка (Hue) на основе времени и UV
    vec3 hsvColor = rgb2hsv(processedColor.rgb);
    hsvColor.x = fract(hsvColor.x + time * 0.1 + (uv.x + uv.y) * 0.1 * intensity);
    processedColor.rgb = hsv2rgb(hsvColor);
    
    // Добавляем цветовое смещение (менее выраженное)
    vec3 colorShift = vec3(sin(time * 2.0), cos(time * 2.5), sin(time * 3.0)) * 0.1 * intensity;
    processedColor.rgb += colorShift;
    
    // Добавляем пульсацию яркости
    float brightness = 1.0 + sin(time * 3.0) * 0.2 * intensity;
    processedColor.rgb *= brightness;
    
    // Добавляем хроматическую аберрацию
    float chroma = 0.015 * intensity;
    vec4 chromaColor = vec4(0.0);
    chromaColor.r = safeTexture(DiffuseSampler, uv + vec2(chroma, 0.0)).r;
    chromaColor.b = safeTexture(DiffuseSampler, uv - vec2(chroma, 0.0)).b;
    processedColor.rgb = mix(processedColor.rgb, chromaColor.rgb, 0.4 * intensity);
    
    // Добавляем эффект размытия
    vec2 blur = vec2(0.003 * intensity);
    vec4 blurColor = safeTexture(DiffuseSampler, uv + blur);
    blurColor += safeTexture(DiffuseSampler, uv - blur);
    blurColor += safeTexture(DiffuseSampler, uv + vec2(blur.x, -blur.y));
    blurColor += safeTexture(DiffuseSampler, uv + vec2(-blur.x, blur.y));
    blurColor /= 4.0;
    processedColor = mix(processedColor, blurColor, 0.4 * intensity);
    
    // Добавляем шум для эффекта галлюцинаций
    float noiseValue = noise(uv * 5.0 + time);
    processedColor.rgb += vec3(noiseValue) * 0.15 * intensity;
    
    // Нормализуем цвет
    processedColor.rgb = clamp(processedColor.rgb, 0.0, 1.0);
    
    // Смешиваем обработанный цвет с исходным на основе прозрачности
    // Это должно помочь сохранить исходные цвета прозрачных/полупрозрачных областей
    fragColor = mix(originalColor, vec4(processedColor.rgb, originalColor.a), originalColor.a);
} 