ServerEvents.recipes(event => {
  event.recipes.create.crushing([
    Item.of('kubejs:tiny_nether_quartz_crystal', 3),
    Item.of('kubejs:tiny_nether_quartz_crystal').withChance(0.5)
  ], 'minecraft:quartz')
    event.recipes.create.milling([
    Item.of('minecraft:red_sand'),
    Item.of('alexscaves:uranium_shard').withChance(0.01)
  ], 'minecraft:granite')
})