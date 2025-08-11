let psychedelicTime = 0;
let psychedelicDuration = 0;
let strengthTime = 0;
let strengthApplied = false;
let savedpsychedelicDuration = 0;

// Получаем данные от сервера
NetworkEvents.dataReceived("kubejs:psychedelic_shader", event => {
    // Отладочное сообщение
    
    // Проверяем наличие эффекта силы
    if (event.player.hasEffect('biomancy:frenzy')) {
        // Если есть эффект силы, применяем его вместо эффекта хлеба
        strengthApplied = true;
        VisualJS.clearEffect();
        VisualJS.applyEffect("freasy", true);
    } else {
        // Если нет эффекта силы, применяем эффект хлеба
        VisualJS.clearEffect();
        psychedelicTime = 0;
        psychedelicDuration = 300; // 15 секунд (20 тиков в секунду)
        VisualJS.applyEffect("hallucination", true);
    }
});

// Обработка таймера и анимации
ClientEvents.tick(event => {
    const player = event.player;
    
    // Проверяем эффект силы (имеет приоритет)
    if (player.hasEffect('biomancy:frenzy')) {
        if (!strengthApplied) {
            // Сохраняем время эффекта хлеба перед применением эффекта силы
            savedpsychedelicDuration = psychedelicDuration;
            VisualJS.clearEffect();
            strengthApplied = true;
            // Применяем шейдер
            VisualJS.applyEffect("freasy", true);
        }
        
        if (strengthApplied) {
            // Обновляем время для анимации
            strengthTime += 0.01;
            // Устанавливаем параметры шейдера
            VisualJS.setUniform(0, "time", [strengthTime]);
        }
    } else {
        if (strengthApplied) {
            // Если эффекта нет, отключаем шейдер
            VisualJS.clearEffect();
            strengthApplied = false;
            strengthTime = 0;
            
            // Восстанавливаем эффект хлеба если было сохранено время
            if (savedpsychedelicDuration > 0) {
                psychedelicDuration = savedpsychedelicDuration;
                savedpsychedelicDuration = 0;
                VisualJS.applyEffect("hallucination", true);
            }
        }
    }
    
    // Обработка времени эффекта хлеба (работает всегда)
    if (psychedelicDuration > 0) {
        // Обработка таймера
        psychedelicDuration--;
        // Обновляем время для анимации психоделии
        psychedelicTime += 0.05;
        // Устанавливаем параметры шейдера
        VisualJS.setUniform(0, "time", [psychedelicTime]);
        
        if (psychedelicDuration <= 0) {
            // Если нет эффекта силы, очищаем эффект
            if (!strengthApplied) {
                VisualJS.clearEffect();
            }
            psychedelicTime = 0;
            psychedelicDuration = 0;
        }
    }
});

// Очищаем эффект при выходе из игры
ClientEvents.loggedOut(event => {
    VisualJS.clearEffect();
    psychedelicTime = 0;
    psychedelicDuration = 0;
    strengthTime = 0;
    strengthApplied = false;
    savedpsychedelicDuration = 0;
});

// Очищаем эффект при входе в игру
ClientEvents.loggedIn(event => {
    VisualJS.clearEffect();
    psychedelicTime = 0;
    psychedelicDuration = 0;
    strengthTime = 0;
    strengthApplied = false;
    savedpsychedelicDuration = 0;
});

