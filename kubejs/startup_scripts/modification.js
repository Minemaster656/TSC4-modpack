ItemEvents.modification(event => {
  event.modify('protection_pixel:flarerod', item => {
    item.maxDamage = 128;
    item.fireResistant = true;
  });
    event.modify('createbigcannons:gas_mask', item => {
    item.maxDamage = 512;
    item.fireResistant = true;
  });
   event.modify('protection_pixel:watertank', item => {
    item.maxDamage = 1000;
    item.fireResistant = true;
  });
});