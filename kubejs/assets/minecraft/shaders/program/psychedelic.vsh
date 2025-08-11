#version 150

// Uniform variables provided by Minecraft/OptiFine
uniform mat4 ProjMat;
uniform mat4 ModelViewMat;
uniform mat4 ModelViewProjMat;
uniform mat4 InverseModelViewMat; // Нужна для получения мировых координат
uniform vec3 cameraPosition; // Позиция камеры в мировых координатах
uniform float time; // Время для анимации (используем вместо frameTimeCounter)

// Input vertex attributes
in vec4 mc_Position;
in vec4 mc_Color;
in vec2 mc_TexCoord0;

// Output variables passed to the fragment shader
out vec4 color;
out vec2 texCoord;

void main() {
    // Получаем позицию вершины в мировых координатах
    vec4 viewPosition = ModelViewMat * mc_Position; // Позиция в пространстве вида
    vec3 worldPosition = (InverseModelViewMat * viewPosition).xyz + cameraPosition; // Позиция в мировых координатах
    
    vec4 position = mc_Position; // Начинаем деформацию с позиции в пространстве модели
    
    // --- Код деформации "желе", адаптированный из примера --- 
    
    // Используем 'time' вместо 'frameTimeCounter'
    float jellyTime = time;
    // Возможно, добавим обход переполнения 'time' если понадобится, но пока используем напрямую

    // Параметры колебаний (можно настроить)
    float baseBounceSpeed = 9.0;
    float baseBounce1 = 7.0;
    float baseBounce2 = 7.0;
    
    float baseRollSpeed = 9.0;
    float baseRoll1 = 4.0;
    float baseRoll2 = 4.0;
    
    // Вычисляем множители колебаний
    float jellyBounce = ((baseBounce1 - baseBounce2) * sin(jellyTime / baseBounceSpeed)) + (baseBounce1 + baseBounce2);
    float jellyRoll = ((baseRoll1 - baseRoll2) * sin(jellyTime / baseRollSpeed)) + (baseRoll1 + baseRoll2);
    
    // Рассчитываем расстояние от вершины до камеры в мировом пространстве
    float distanceSquared = dot(worldPosition - cameraPosition, worldPosition - cameraPosition); // Квадрат расстояния
    
    // Применяем деформацию
    // Эти формулы адаптированы из ваших примеров и основаны на синусоидальных колебаниях
    // в зависимости от времени, положения и множителей jellyBounce/jellyRoll.
    
    // Деформация по оси Y (подскоки/колебания)
    position.y += sin(sin(jellyTime / 0.5) * atan(distanceSquared / 800.0)) / 3.0 * (jellyBounce / 20.0) * 1.5; // Усилено
    
    // Деформация вращения/сдвига
    float amplifyIntensity = 1.0; // Можно регулировать
    float amplifyFrequency = 1.0; // Можно регулировать
    float amplifyWavelength = 1.0; // Можно регулировать

    // Деформация на основе мировых координат и времени (адаптировано)
    // Эти части могут потребовать тонкой настройки или адаптации в зависимости от конкретного шейдера
    float om = sin(sin(jellyTime / (0.053 * amplifyFrequency) - sqrt((worldPosition.z * worldPosition.z + worldPosition.x * worldPosition.x) / (896.0 / amplifyWavelength)))) / 1280.0 * jellyBounce * amplifyIntensity;
    float on = sin(sin(jellyTime / (0.058 * amplifyFrequency) - sqrt((worldPosition.z * worldPosition.z + worldPosition.x * worldPosition.x) / (896.0 / amplifyWavelength)))) / 1280.0 * jellyBounce * amplifyIntensity;
    
    vec3 deformedPos = position.xyz; // Работаем с копией для применения вращения
    
    // Применяем вращение/сдвиг (адаптировано)
    // Эти операции должны применяться к позиции в пространстве модели или вида перед финальным преобразованием
    // В данном случае применяем к позиции в пространстве модели, так как worldPosition используется только для расчета искажения
    float y = deformedPos.y;
    float x = deformedPos.x;
    float z = deformedPos.z;

    // Адаптированные формулы вращения/сдвига
    deformedPos.y = x * sin(om) + z * sin(on) + y * cos(om);
    deformedPos.x = x * cos(om) - y * sin(om);
    deformedPos.z = z * cos(om) - y * sin(on);
    
    position.xyz = deformedPos; // Обновляем позицию
    
    // Дополнительные колебания (адаптировано)
    position.y += sin(jellyTime / 0.0425) * jellyBounce / 80.0 * 1.5; // Усилено
    position.z += 1.2 * sin(jellyTime / 0.07) * jellyRoll / 192.0 * 1.5; // Усилено
    position.x += 1.2 * sin(jellyTime / 0.08) * jellyRoll / 192.0 * 1.5; // Усилено

    // Применяем более сильную деформацию к позиции
    // Этот mix с искаженным UV в фрагментном шейдере, вероятно, больше не нужен для эффекта "желе"
    // Основная деформация происходит здесь, в вершинном шейдере.
    
    // Преобразуем **деформированную** позицию вершины в пространство отсечения
    gl_Position = ModelViewProjMat * position;

    // Передаем цвет и текстурные координаты фрагментному шейдеру (без изменений)
    color = mc_Color;
    texCoord = mc_TexCoord0;

    // Важно: возможно, потребуется скорректировать фрагментный шейдер psychedelic.fsh,
    // убрав или уменьшив эффекты деформации, размытия и шума, которые теперь
    // дублируются или конфликтуют с деформацией в вершинном шейдере.
} 