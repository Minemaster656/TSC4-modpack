ServerEvents.recipes(event => {
    event.recipes.create.filling('supplementaries:antique_ink', [
        Fluid.of('create_enchantment_industry:ink', 250),
        'minecraft:glass_bottle'
    ]);

    event.recipes.create.filling('kubejs:ibuplacebo', [
        Fluid.of('tfmg:naphtha', 25),
        'minecraft:sugar'
    ]);

    event.recipes.create.filling('kubejs:barbiepill', [
        Fluid.of('tfmg:naphtha', 25),
        'vegandelight:salt'
    ]);

    event.recipes.create.filling('kubejs:metanetherine', [
        Fluid.of('tfmg:naphtha', 25),
        'create:cinder_flour'
    ]);
    event.recipes.create.filling('kubejs:fentanil', [
        Fluid.of('tfmg:naphtha', 25),
        'firstaid:morphine'
    ]);
});