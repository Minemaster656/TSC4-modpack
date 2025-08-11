// Disable Tinkers' Construct alloys and selected broad tools/parts

ServerEvents.recipes(event => {
  // Remove all alloying recipes (smeltery alloys)
  event.remove({ type: 'tconstruct:alloy' });
  // Some packs/datapacks name alloy recipes under various paths; remove by id patterns too
  event.remove({ id: /tconstruct:.*alloy.*/ });
  event.remove({ id: /tconstruct:smeltery\/alloys\/.*/ });
  event.remove({ id: /tconstruct:foundry\/alloys\/.*/ });
  event.remove({ id: /tconstruct:compat\/.+\/alloys\/.*/ });

  // Remove any Create/Thermal recipes that output TCon molten fluids (alternative alloy routes)
  // Create: Mixing producing tconstruct molten fluids
  event.forEachRecipe({ type: 'create:mixing' }, r => {
    const js = r.json.toString();
    if (js.includes('"fluid":"tconstruct:molten_')) {
      event.remove({ id: r.getId() });
    }
  });
  // Thermal: Crucible producing tconstruct molten fluids
  event.forEachRecipe({ type: 'thermal:crucible' }, r => {
    const js = r.json.toString();
    if (js.includes('"fluid":"tconstruct:molten_')) {
      event.remove({ id: r.getId() });
    }
  });

  // Tools to disable (tool building in Tinker Station)
  const toolItemIdsToDisable = [
    'tconstruct:excavator',
    'tconstruct:broad_axe',
    'tconstruct:scythe',
    // Hammer naming differs across versions; remove both just in case
    'tconstruct:sledge_hammer',
    'tconstruct:hammer'
  ];

  // Part items to disable (part builder and casting outputs)
  const partItemIdsToDisable = [
    'tconstruct:excavator_head',
    'tconstruct:broad_axe_head',
    'tconstruct:scythe_head', // some versions use scythe_blade
    'tconstruct:scythe_blade',
    // Hammer head naming can vary by version
    'tconstruct:sledge_hammer_head',
    'tconstruct:hammer_head'
  ];

  for (const itemId of toolItemIdsToDisable) {
    event.remove({ output: itemId });
  }

  for (const itemId of partItemIdsToDisable) {
    event.remove({ output: itemId });
  }

  // Also remove casting outputs by type to catch any dynamic material variants
  event.remove({ type: 'tconstruct:casting_table', output: /tconstruct:.*(excavator|broad_axe|scythe|hammer).*/ });
  event.remove({ type: 'tconstruct:casting_basin', output: /tconstruct:.*(excavator|broad_axe|scythe|hammer).*/ });

  // Remove part builder JSONs for these parts if any
  event.remove({ type: 'tconstruct:part_builder', output: /tconstruct:.*(excavator|broad_axe|scythe|hammer).*/ });

  // Remove by id patterns commonly used by TCon for part casting/part builder
  event.remove({ id: /tconstruct:smeltery\/casting\/parts\/(excavator_head|broad_axe_head|scythe_blade|hammer_head)\/.*/ });
  event.remove({ id: /tconstruct:tools\/part_builder\/(excavator_head|broad_axe_head|scythe_blade|hammer_head).*/ });

  // Aggressive sweep: remove any recipe json that references forbidden parts/tools
  const forbiddenTokens = [
    'excavator', 'excavator_head',
    'broad_axe', 'broad_axe_head',
    'scythe', 'scythe_blade',
    'hammer', 'hammer_head', 'sledge_hammer'
  ];
  event.forEachRecipe({}, r => {
    const js = r.json.toString();
    for (const token of forbiddenTokens) {
      if (js.includes(token)) {
        event.remove({ id: r.getId() });
        break;
      }
    }
  });
});


