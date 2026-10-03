import { createPlan } from './plan.js'
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

console.log("Welcome to the main module")
const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

const plantsInField = usePlants()
console.log(plantsInField)
const harvestedFood = harvestPlants(plantsInField)
Catalog(harvestedFood)
