(() => {
  const psychedelicActiveEffects = new Map();
  const psychedelicEffectTime = 300; // Длительность эффекта в тиках (15 секунд)

  // Обработка поедания хлеба
  ItemEvents.foodEaten(event => {
    const item = event.item;
    if (item.id === 'minecraft:bread') {
      const player = event.player;

      // Сохраняем время эффекта для игрока
      psychedelicActiveEffects.set(player.id, psychedelicEffectTime);

      // Отправляем начальный пакет
      player.sendData('kubejs:psychedelic_shader', {
        duration: psychedelicEffectTime
      });
    }
  });
})();
