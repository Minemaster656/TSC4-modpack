StartupEvents.registry('item', event => {
    event.create('dp42')
        .displayName('DP-42')
        .food(food => {
            food.hunger(1)
            food.alwaysEdible()
            food.effect('minecraft:instant_damage', 100, 0, 1.0)
            food.fastToEat()
        })
})
