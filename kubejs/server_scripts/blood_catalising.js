ServerEvents.recipes(event => {
  event.custom({
    type: "createaddition:charging",
    input: {
      item: "kubejs:incomplete_primodial_core",
      count: 1
    },
    result: {
      item: "biomancy:primordial_core",
      count: 1
    },
    energy: 25000,
    maxChargeRate: 5000
  })
})