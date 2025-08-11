StartupEvents.registry('item', event => {
    event.create('soma')
        .displayName('Soma')
        .food(food => {
            food.hunger(1)
            food.alwaysEdible()
            food.effect('kubejs:soma', 3600, 0, 1.0)
            food.fastToEat()
        })
})
