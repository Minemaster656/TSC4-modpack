ServerEvents.tags('item', event => {
    event.add('thinair:breathing_equipment', [
        'scguns:netherite_respirator',
        'scguns:anthralite_respirator',
        'protection_pixel:closed_helmet',
        'createbigcannons:gas_mask',
        'alexscaves:hazmat_mask'
    ]);
    event.add('createbigcannons:gas_masks', [
        'scguns:netherite_respirator',
        'scguns:anthralite_respirator',
        'protection_pixel:closed_helmet',
        'thinair:respirator',
        'alexscaves:hazmat_mask'
    ]);
      event.add('sons_of_sins:is_slicer', [
        'biomancy:despoil_sickle'
    ]);
});