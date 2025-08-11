StartupEvents.registry('item', event => {
    event.create('antidote')
        .displayName('Antidote')
        .food(food => {
            food.hunger(1)
            food.alwaysEdible()
            food.effect('alexsmobs:poison_resistance', 3600, 0, 1.0)
            food.effect('nethers_exoticism:wither_cure', 3600, 0, 1.0)
            food.effect('minecraft:slowness', 3600, 0, 1.0)
            food.effect('minecraft:weakness', 3600, 0, 1.0)
            food.effect('minecraft:mining_fatigue', 3600, 0, 1.0)
            food.fastToEat()
        })
})