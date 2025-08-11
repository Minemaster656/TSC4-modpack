ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        [Fluid.of('sliceanddice:fertilizer')], 
        [Fluid.of('biofactory:nutrients_fluid', 100), Fluid.of('minecraft:water', 900)]
    );
    event.recipes.create.mixing(
        [Fluid.of('lteg:goo', 200)], 
        [Fluid.of('biofactory:nutrients_fluid', 120), Item.of('minecraft:sugar')]
    );
    event.recipes.create.mixing(
        [Item.of('kubejs:incomplete_primodial_core').withChance(0.25)], 
        [Fluid.of('create_enchantment_industry:experience', 125), 'minecraft:spider_eye', '#forge:meats/foods/raw', '#forge:meats/foods/raw', '#forge:meats/foods/raw', '#forge:meats/foods/raw', 'biomancy:exotic_dust']
    ).heated();
    event.recipes.create.mixing(
        [Item.of('kubejs:rubber_sword')], 
        [Fluid.of('thermal:latex', 1000), 'minecraft:purple_dye']
    ).heated();
    event.recipes.create.mixing(
        [Item.of('kubejs:police_bat')], 
        [Fluid.of('thermal:latex', 1000), 'minecraft:black_dye']
    ).heated();
    event.recipes.create.mixing(
        [Item.of('firstaid:morphine')], 
        [Fluid.of('minecraft:water', 250), Item.of('minecraft:poppy').withCount(9)]
    ).heated();
    event.recipes.create.mixing(
        [Item.of('kubejs:speedcube')], 
        [Item.of('kubejs:barbiepill'), Item.of('kubejs:fentanil'), Item.of('kubejs:metanetherine')]
    ).heated();
    event.recipes.create.mixing(
        [Item.of('minecraft:netherite_ingot')], 
        [Item.of('minecraft:gold_ingot').withCount(4), Item.of('minecraft:netherite_scrap').withCount(4)],
    ).superheated();
    event.recipes.create.mixing(
        [Fluid.of('thermal:redstone', 1000)],
        [Item.of('minecraft:redstone_block'), Fluid.of('create_enchantment_industry:experience', 100)]
    ).superheated();
});