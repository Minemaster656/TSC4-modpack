ServerEvents.recipes(event => {
  if (!Item.of('createdeco:industrial_iron_ingot').isEmpty()) {
    event.stonecutting(
      Item.of('create:industrial_iron_block', 2),
      'createdeco:industrial_iron_ingot'
    )
  }
})