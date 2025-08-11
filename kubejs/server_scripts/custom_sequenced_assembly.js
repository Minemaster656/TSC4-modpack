ServerEvents.recipes(event => {
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'create:brass_sheet' },
    loops: 3,
    results: [
      { item: 'kubejs:radio_mechanism', chance: 0.8 },
      { item: 'create:brass_sheet', chance: 0.1 },
      { item: 'create:polished_rose_quartz', chance: 0.06 },
      { item: '2x create:cogwheel', chance: 0.04 }
    ],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'kubejs:incomplete_radio_mechanism' },
          { item: 'create:cogwheel' }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'kubejs:incomplete_radio_mechanism' },
          { item: 'minecraft:redstone' }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'kubejs:incomplete_radio_mechanism' },
          { item: 'create:electron_tube' }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'kubejs:incomplete_radio_mechanism' },
          { item: 'vintageimprovements:copper_spring' }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
    ],
    transitionalItem: { item: 'kubejs:incomplete_radio_mechanism' }
  })
  .id('kubejs:sequenced_radio_mechanism')
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'kubejs:kinetic_mechanism' },
    loops: 1,
    results: [
      { item: 'kubejs:sealed_mechanism', chance: 0.8 },
      { item: 'thermal:cured_rubber', chance: 0.1 },
      { item: 'kubejs:kinetic_mechanism', chance: 0.06 },
      { item: 'create:cogwheel', chance: 0.04 }
    ],
    sequence: [
      {
        type: 'create:filling',
        ingredients: [
          { item: 'kubejs:incomplete_sealed_mechanism' },
          { fluid: 'thermal:latex', amount: 125 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'kubejs:incomplete_sealed_mechanism' },
          { item: 'create:cogwheel' }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'kubejs:incomplete_sealed_mechanism' },
          { item: 'create:large_cogwheel' }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
    ],
    transitionalItem: { item: 'kubejs:incomplete_sealed_mechanism' }
  })
  .id('kubejs:sequenced_sealed_mechanism')
   event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'kubejs:tiny_nether_quartz_crystal' },
    loops: 5,
    results: [
      { item: 'kubejs:small_nether_quartz_crystal', chance: 0.95 },
      { item: 'kubejs:tiny_nether_quartz_crystal', chance: 0.01 },
      { item: 'kubejs:moderate_nether_quartz_crystal', chance: 0.03 },
      { item: 'minecraft:quartz', chance: 0.01 },
    ],
    sequence: [
      {
        type: 'create:filling',
        ingredients: [
          { item: 'kubejs:small_nether_quartz_crystal' },
          { fluid: 'minecraft:water', amount: 25 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
      {
        type: 'create:filling',
        ingredients: [
          { item: 'kubejs:small_nether_quartz_crystal' },
          { fluid: 'minecraft:water', amount: 25 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
      {
        type: 'create:filling',
        ingredients: [
          { item: 'kubejs:small_nether_quartz_crystal' },
          { fluid: 'minecraft:water', amount: 25 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
      {
        type: 'create:filling',
        ingredients: [
          { item: 'kubejs:small_nether_quartz_crystal' },
          { fluid: 'minecraft:water', amount: 25 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
    ],
    transitionalItem: { item: 'kubejs:tiny_nether_quartz_crystal' }
  })
  .id('kubejs:sequenced_quartz2')
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'kubejs:small_nether_quartz_crystal' },
    loops: 5,
    results: [
      { item: 'kubejs:moderate_nether_quartz_crystal', chance: 0.98 },
      { item: 'kubejs:small_nether_quartz_crystal', chance: 0.01 },
      { item: 'minecraft:quartz', chance: 0.01 },
    ],
    sequence: [
      {
        type: 'create:filling',
        ingredients: [
          { item: 'kubejs:small_nether_quartz_crystal' },
          { fluid: 'minecraft:water', amount: 25 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
      {
        type: 'create:filling',
        ingredients: [
          { item: 'kubejs:small_nether_quartz_crystal' },
          { fluid: 'minecraft:water', amount: 25 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
      {
        type: 'create:filling',
        ingredients: [
          { item: 'kubejs:small_nether_quartz_crystal' },
          { fluid: 'minecraft:water', amount: 25 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
      {
        type: 'create:filling',
        ingredients: [
          { item: 'kubejs:small_nether_quartz_crystal' },
          { fluid: 'minecraft:water', amount: 25 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
    ],
    transitionalItem: { item: 'kubejs:small_nether_quartz_crystal' }
  })
  .id('kubejs:sequenced_quartz3')
    event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'kubejs:moderate_nether_quartz_crystal' },
    loops: 5,
    results: [
      { item: 'minecraft:quartz', chance: 0.98 },
      { item: 'kubejs:moderate_nether_quartz_crystal', chance: 0.02 },
    ],
    sequence: [
      {
        type: 'create:filling',
        ingredients: [
          { item: 'kubejs:moderate_nether_quartz_crystal' },
          { fluid: 'minecraft:water', amount: 25 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
      {
        type: 'create:filling',
        ingredients: [
          { item: 'kubejs:moderate_nether_quartz_crystal' },
          { fluid: 'minecraft:water', amount: 25 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
      {
        type: 'create:filling',
        ingredients: [
          { item: 'kubejs:moderate_nether_quartz_crystal' },
          { fluid: 'minecraft:water', amount: 25 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
      {
        type: 'create:filling',
        ingredients: [
          { item: 'kubejs:moderate_nether_quartz_crystal' },
          { fluid: 'minecraft:water', amount: 25 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
    ],
    transitionalItem: { item: 'kubejs:moderate_nether_quartz_crystal' }
  })
  .id('kubejs:sequenced_nether_quartz')

  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: '#minecraft:wooden_slabs' },
    loops: 1,
    results: [
      { item: 'kubejs:kinetic_mechanism', chance: 0.9 },
      { item: 'create:large_cogwheel', chance: 0.05 },
      { item: 'create:shaft', chance: 0.03 },
      { item: 'create:cogwheel', chance: 0.02 }
    ],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'kubejs:incomplete_kinetic_mechanism' },
          { item: 'create:cogwheel' }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
      {
        type: 'create:cutting',
        ingredients: [
          { item: 'kubejs:incomplete_kinetic_mechanism' }
        ],
        results: [{ item: 'kubejs:incomplete_kinetic_mechanism' }]
      },
    ],
    transitionalItem: { item: 'kubejs:incomplete_kinetic_mechanism' }
  })
  .id('kubejs:sequenced_kinetic_mechanism')
  if (!Item.of('createdeco:zinc_sheet').isEmpty() && Platform.isLoaded('vintageimprovements') && Platform.isLoaded('create')) {
    event.custom({
      type: 'create:sequenced_assembly',
      ingredient: { item: 'createdeco:zinc_sheet' },
      loops: 5,
      results: [
        { item: 'kubejs:informatic_mechanism', chance: 0.8 },
        { item: 'create:andesite_alloy', chance: 0.1 },
        { item: 'create:large_cogwheel', chance: 0.05 },
        { item: 'minecraft:redstone', chance: 0.03 },
        { item: 'create:cogwheel', chance: 0.02 }
      ],
      sequence: [
        {
          type: 'create:filling',
          ingredients: [
            { item: 'kubejs:incomplete_informatic_mechanism' },
            { fluid: 'thermal:redstone', amount: 200 }
          ],
          results: [{ item: 'minecraft:iron_ingot' }]
        },
        {
          type: 'create:deploying',
          ingredients: [
            { item: 'kubejs:incomplete_informatic_mechanism' },
            { item: 'create:cogwheel' }
          ],
          results: [{ item: 'minecraft:iron_ingot' }]
        },
        {
          type: 'create:deploying',
          ingredients: [
            { item: 'kubejs:incomplete_informatic_mechanism' },
            { item: 'create:andesite_alloy' }
          ],
          results: [{ item: 'minecraft:iron_ingot' }]
        },
        {
          type: 'create:deploying',
          ingredients: [
            { item: 'kubejs:incomplete_informatic_mechanism' },
            { item: 'vintageimprovements:copper_spring' }
          ],
          results: [{ item: 'minecraft:iron_ingot' }]
        },
      ],
      transitionalItem: { item: 'kubejs:incomplete_informatic_mechanism' }
    })
    .id('kubejs:sequenced_informatic_mechanism')
  }
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'create:polished_rose_quartz' },
    loops: 5,
    results: [
      { item: 'kubejs:disk_base', chance: 0.95 },
      { item: 'create:rose_quartz', chance: 0.03 },
      { item: 'computercraft:disk', chance: 0.02 }
    ],
    sequence: [
      {
        type: 'create:pressing',
        ingredients: [
          { item: 'kubejs:disk_base' }
        ],
        results: [{ item: 'kubejs:disk_base' }]
      },
      {
        type: 'vintageimprovements:polishing',
        ingredients: [
          { item: 'kubejs:disk_base' },
          { item: 'create:cogwheel' }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
    ],
    transitionalItem: { item: 'kubejs:disk_base' }
  })
  .id('kubejs:sequenced_disk_base')
event.custom({
  type: 'create:sequenced_assembly',/// Capitalism crafts
  ingredient: { item: 'create:copper_nugget' },
  loops: 5,
  results: [
    { item: 'numismatics:spur', chance: 1 }
  ],
  sequence: [
    {
        type: 'create:filling',
        ingredients: [
          { item: 'create:copper_nugget' },
          { fluid: 'create_enchantment_industry:experience', amount: 3 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
    {
      type: 'create:pressing',
      ingredients: [
        { item: 'create:copper_nugget' }
      ],
      results: [{ item: 'numismatics:spur' }]
    },
    {
      type: 'vintageimprovements:polishing',
      ingredients: [
        { item: 'create:copper_nugget' },
        { item: 'create:copper_nugget' }
      ],
      results: [{ item: 'minecraft:iron_ingot' }]
    },
  ],
  transitionalItem: { item: 'numismatics:spur' }
})
.id('kubejs:sequenced_spur')
event.custom({
  type: 'create:sequenced_assembly',
  ingredient: { item: 'create:zinc_nugget' },
  loops: 1,
  results: [
    { item: 'numismatics:bevel', chance: 1 }
  ],
  sequence: [
     {
        type: 'create:filling',
        ingredients: [
          { item: 'create:zinc_nugget' },
          { fluid: 'create_enchantment_industry:experience', amount: 6 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
    {
      type: 'create:pressing',
      ingredients: [
        { item: 'create:zinc_nugget' }
      ],
      results: [{ item: 'numismatics:bevel' }]
    },
    {
      type: 'vintageimprovements:polishing',
      ingredients: [
        { item: 'create:zinc_nugget' },
        { item: 'create:zinc_nugget' }  
      ],
      results: [{ item: 'minecraft:iron_ingot' }]
    }
  ],
  transitionalItem: { item: 'numismatics:bevel' }
})

.id('kubejs:sequenced_bevel')
event.custom({
  type: 'create:sequenced_assembly',
  ingredient: { item: 'minecraft:iron_nugget' },
  loops: 1,
  results: [
    { item: 'numismatics:sprocket', chance: 1 }
  ],
  sequence: [
      {
        type: 'create:filling',
        ingredients: [
          { item: 'minecraft:iron_nugget' },
          { fluid: 'create_enchantment_industry:experience', amount: 9 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
    {
      type: 'create:pressing',
      ingredients: [
        { item: 'minecraft:iron_nugget' }
      ],
      results: [{ item: 'numismatics:sprocket' }]
    },
    {
      type: 'vintageimprovements:polishing',
      ingredients: [
        { item: 'minecraft:iron_nugget' },
        { item: 'minecraft:iron_nugget' }
      ],
      results: [{ item: 'minecraft:iron_ingot' }]
    },
  ],
  transitionalItem: { item: 'numismatics:sprocket' }
})
.id('kubejs:sequenced_sprocket')
event.custom({
  type: 'create:sequenced_assembly',
  ingredient: { item: 'create:brass_nugget' },
  loops: 1,
  results: [
    { item: 'numismatics:cog', chance: 1 }
  ],
  sequence: [
   {
        type: 'create:filling',
        ingredients: [
          { item: 'create:brass_nugget' },
          { fluid: 'create_enchantment_industry:experience', amount: 12 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
    {
      type: 'create:pressing',
      ingredients: [
        { item: 'create:brass_nugget' }
      ],
      results: [{ item: 'numismatics:cog' }]
    },
    {
      type: 'vintageimprovements:polishing',
      ingredients: [
        { item: 'create:brass_nugget' },
        { item: 'create:brass_nugget' }
      ],
      results: [{ item: 'minecraft:iron_ingot' }]
    },
  ],
  transitionalItem: { item: 'numismatics:cog' }
})
.id('kubejs:sequenced_cog')
event.custom({
  type: 'create:sequenced_assembly',
  ingredient: { item: 'minecraft:gold_nugget' },
  loops: 1,
  results: [
    { item: 'numismatics:crown', chance: 1 }
  ],
  sequence: [
     {
        type: 'create:filling',
        ingredients: [
          { item: 'minecraft:gold_nugget' },
          { fluid: 'create_enchantment_industry:experience', amount: 15 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
    {
      type: 'create:pressing',
      ingredients: [
        { item: 'minecraft:gold_nugget' }
      ],
      results: [{ item: 'numismatics:cog' }]
    },
    {
      type: 'vintageimprovements:polishing',
      ingredients: [
        { item: 'minecraft:gold_nugget' },
        { item: 'minecraft:gold_nugget' }
      ],
      results: [{ item: 'minecraft:iron_ingot' }]
    },
  ],
  transitionalItem: { item: 'numismatics:crown' }
})
.id('kubejs:sequenced_crown')
event.custom({
  type: 'create:sequenced_assembly',
  ingredient: { item: 'thermal:netherite_nugget' },
  loops: 1,
  results: [
    { item: 'numismatics:sun', chance: 1 }
  ],
  sequence: [
     {
        type: 'create:filling',
        ingredients: [
          { item: 'thermal:netherite_nugget' },
          { fluid: 'create_enchantment_industry:experience', amount: 18 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
    {
      type: 'create:pressing',
      ingredients: [
        { item: 'thermal:netherite_nugget' }
      ],
      results: [{ item: 'numismatics:sun' }]
    },
    {
      type: 'vintageimprovements:polishing',
      ingredients: [
        { item: 'thermal:netherite_nugget' },
        { item: 'thermal:netherite_nugget' }
      ],
      results: [{ item: 'minecraft:iron_ingot' }]
    },
  ],
  transitionalItem: { item: 'numismatics:sun' }
})
.id('kubejs:sequenced_sun')
event.custom({
  type: 'create:sequenced_assembly',
  ingredient: { item: 'minecraft:paper' },
  loops: 1,
  results: [
    { item: 'firstaid:plaster', chance: 0.98 },
    { item: 'minecraft:paper', chance: 0.01 },
    { item: 'create_bic_bit:dirty_paper', chance: 0.01 }
  ],
  sequence: [
    {
      type: 'create:deploying',
      ingredients: [
        { item: 'firstaid:plaster' },
        { item: '#forge:strings' }
      ],
      results: [{ item: 'minecraft:iron_ingot' }]
    },
  ],
  transitionalItem: { item: 'kubejs:incomplete_plaster' }
})
.id('kubejs:sequenced_plaster')
event.custom({
  type: 'create:sequenced_assembly',
  ingredient: { item: '#forge:plates/zinc' },
  loops: 1,
  results: [
    { item: 'createaddition:capacitor', chance: 1 }
  ],
  sequence: [
     {
        type: 'create:filling',
        ingredients: [
          { item: 'thermal:netherite_nugget' },
          { fluid: 'thermal:redstone', amount: 25 }
        ],
        results: [{ item: 'minecraft:iron_ingot' }]
      },
      {
      type: 'create:deploying',
      ingredients: [
        { item: 'firstaid:plaster' },
        { item: 'create:copper_sheet' }
      ],
      results: [{ item: 'minecraft:iron_ingot' }]
    },
  ],
  transitionalItem: { item: 'numismatics:sun' }
})
.id('kubejs:sequenced_capacitor')
});