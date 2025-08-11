ServerEvents.recipes(event => {
    event.recipes.create.compacting('biomancy:exotic_dust', '#forge:ender_pearls');
    event.recipes.create.compacting(
    'etched:blank_music_disc',
    [
        'thermal:cured_rubber',
        'create:crushed_raw_iron'
    ]
);
    event.recipes.create.compacting('thermal:rubber', [
        Fluid.of('thermal:latex', 250)
    ]);
    event.recipes.create.compacting('thermal:cured_rubber', [
    Fluid.of('thermal:latex', 250)
  ]).heated();
  event.recipes.create.mixing([
    Fluid.of('thermal:latex', 250)
  ], [
    Fluid.of('thermal:resin', 1000),
    '#forge:coal',
    '#forge:slimeballs'
  ]).heated();

});