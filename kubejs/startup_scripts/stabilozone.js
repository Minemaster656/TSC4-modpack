StartupEvents.registry('item', event => {
    event.create('stabilozone')
        .displayName('Stabilozone')
        .food(food => {
            food.hunger(1)
            food.alwaysEdible()
            food.effect('cold_sweat:grace', 600, 0, 1.0)
            food.effect('minecraft:nausea', 80, 255, 2.0)
            food.fastToEat()
        })
})