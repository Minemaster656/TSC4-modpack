(() => {
  const hallucinationActiveEffects = new Map();
  const hallucinationEffectTime = 1200; // Длительность эффекта в тиках (60 секунд)

  // Обработка поедания сомы
  ItemEvents.foodEaten(event => {
    const item = event.item;
    if (item.id === 'kubejs:soma') {
      const player = event.player;

      // Сохраняем время эффекта для игрока
      hallucinationActiveEffects.set(player.id, hallucinationEffectTime);

      // Отправляем начальный пакет
      player.sendData('kubejs:hallucination_shader', {
        duration: hallucinationEffectTime
      });
    }
  });
})();
