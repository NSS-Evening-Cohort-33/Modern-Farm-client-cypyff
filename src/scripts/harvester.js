export const harvestPlants = (plants) => {
    let harvestedPlants = []

    for (const plant of plants) {
        let addToHarvest = plant.output

        if (plant.type === "Corn") {
            addToHarvest = plant.output / 2
        }

        for (let i = 0; i < addToHarvest; i++) {
            harvestedPlants.push(plant)
        }
    }

    return harvestedPlants
}