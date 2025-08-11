StartupEvents.registry('item', event => {
    event.create('metanetherine')
        .displayName('Methanetherine')
        .food(food => {
            food.hunger(1)
            food.alwaysEdible()
            food.effect('biomancy:frenzy', 300, 0, 1.0)
            food.effect('minecraft:nausea', 100, 255, 1.0)
            food.fastToEat()
        })
})
