ServerEvents.recipes(event => {
    if (Platform.isLoaded('create')) {
    event.recipes.create.mechanical_crafting('create:potato_cannon', [
      '23000',
      '11   '
    ], {
      0: 'create:fluid_pipe',
      1: 'minecraft:copper_ingot',
      2: 'create:andesite_alloy',
      3: 'kubejs:sealed_mechanism'
    })
    }
    if (Platform.isLoaded('createdieselgenerators')) {
    event.recipes.create.mechanical_crafting('createdieselgenerators:chemical_sprayer', [
      '22  ',
      '3140'
    ], {
      0: 'create:fluid_pipe',
      1: 'minecraft:copper_block',
      2: 'createdieselgenerators:kelp_handle',
      3: 'kubejs:sealed_mechanism',
      4: 'minecraft:dried_kelp'
    })
     event.recipes.create.mechanical_crafting('createdieselgenerators:chemical_sprayer', [
      '22  ',
      '3140'
    ], {
      0: 'create:fluid_pipe',
      1: 'minecraft:copper_block',
      2: 'createdieselgenerators:kelp_handle',
      3: 'kubejs:sealed_mechanism',
      4: 'minecraft:dried_kelp'
    })
    }
     if (Platform.isLoaded('protection_pixel')) {
     event.recipes.create.mechanical_crafting('protection_pixel:powerengine', [
      '46364',
      '05150',
      '46264'
    ], {
      0: 'create:fluid_pipe',
      1: 'create:fluid_tank',
      2: 'create:precision_mechanism',
      3: 'createaddition:modular_accumulator',
      4: 'create:brass_sheet',
      5: 'kubejs:sealed_mechanism',
      6: 'create:andesite_alloy'
    })
     }
    if (Platform.isLoaded('create')) {
    event.recipes.create.mechanical_crafting('create:cart_assembler', [
      '46364',
      '05150',
      '46264'
    ], {
      0: 'create:fluid_pipe',
      1: 'create:fluid_tank',
      2: 'create:precision_mechanism',
      3: 'createaddition:modular_accumulator',
      4: 'create:brass_sheet',
      5: 'kubejs:sealed_mechanism',
      6: 'create:andesite_alloy'
    })
    }
  })