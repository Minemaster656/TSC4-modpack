StartupEvents.registry('item', event => {
    event.create('kubejs:bat', 'sword')  // Указываем тип 'sword'
        .displayName('Rubber Bat')
        .tier('wood')
        .maxDamage(250) // Долговечность
        .texture('kubejs:item/baton');
});