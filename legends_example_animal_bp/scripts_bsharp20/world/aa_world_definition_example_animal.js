const exampleAnimalWorldGenDefinition = {
    base: null,
    modify: (filterManager) => {
        filterManager.AppendFilter(["example_animal", "center"], 1)
        filterManager.AppendFilter(["example_animal", "frostlands"], 1)
    }
}

SNIPPET_InheritsFromGameMode("example_animal", () => {
    SetWorldGenDefinition(exampleAnimalWorldGenDefinition)
})
