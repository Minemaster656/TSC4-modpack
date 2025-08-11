StartupEvents.registry('item', event => {
    event.create('kubejs:rubber_sword', 'sword')  // Указываем тип 'sword'
        .displayName('§6Rubber Sword')  // Имя предмета
        .tier('wood')  // Уровень предмета
        .maxDamage(250)  // Долговечность
        .texture('kubejs:item/rubber_sword');
});
