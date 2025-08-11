StartupEvents.registry('item', event => {
    event.create('ibuplacebo')
        .displayName('Ibuplacebo')
        .food(food => {
            food.hunger(1)
            food.alwaysEdible()
            food.effect('minecraft:regeneration', 100, 0, 1.0)
            food.effect('minecraft:nausea', 80, 255, 2.0)
            food.fastToEat()
        })
})
