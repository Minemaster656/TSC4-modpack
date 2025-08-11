ItemEvents.rightClicked(event => {
    const item = event.item
    if (!item || item.id != 'kubejs:petroleum_jelly') return

    const player = event.player

    player.potionEffects.add('alexsmobs:oiled', 400, 0)

    item.damageValue++

    if (item.damageValue >= item.maxDamage) {
        item.count--
    }

    event.cancel()
})

