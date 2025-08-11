ServerEvents.recipes(event => {
  if (typeof removeRecipes === 'function') {
    removeRecipes(event)
  } else {
    console.warn('removeRecipes is not defined; skipping')
  }
  if (typeof replaceRecipes === 'function') {
    replaceRecipes(event)
  } else {
    // Avoid hard error when optional function is missing
    console.warn('replaceRecipes is not defined; skipping')
  }
})