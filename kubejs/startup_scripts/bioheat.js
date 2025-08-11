StartupEvents.registry("block", event => {
    const rotating = RawAnimation.begin().thenLoop("animation.bioheat.new",);
    event.create("geckojs:bioheat", "animatable")
        .box(1, 1, 1, 15, 15, 15, true)
        .waterlogged()
        .lightLevel(0.5)
        .animatableBlockEntity(blockEntity => {
            blockEntity.addAnimation(state => state.setAndContinue(rotating))
        })
        .defaultGeoModel()
})