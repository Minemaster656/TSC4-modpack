ServerEvents.recipes(event => {
  if (Platform.isLoaded('createdieselgenerators')) {
    event.custom({
      type: 'createdieselgenerators:distillation',
      ingredients: [
        { fluidTag: 'forge:crude_oil', amount: 100 }
      ],
      heatRequirement: 'heated',
      processingTime: 100,
      results: [
        { fluid: 'createdieselgenerators:diesel', amount: 50 },
        { fluid: 'createdieselgenerators:gasoline', amount: 30 },
        { fluid: 'thermal:latex', amount: 20 }
      ]
    })
  }
})
