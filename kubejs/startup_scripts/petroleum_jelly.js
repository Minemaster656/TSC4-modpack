StartupEvents.registry('item', event => {
    event.create('petroleum_jelly')
        .displayName('Petroleum Jelly')
        .maxStackSize(1)
        .tooltip('Намаж попу, себе и другу')
        .food(food => {
            food.hunger(0)
            food.saturation(0)
            food.alwaysEdible()
            food.effect('minecraft:poison', 60, 0, 1.0)
        })
        .unstackable()
})
