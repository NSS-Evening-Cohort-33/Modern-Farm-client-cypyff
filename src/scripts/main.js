import { createPlan } from './plan.js'
import { addPlant, usePlants } from "./field.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createCorn } from "./seeds/corn.js"
console.log("Welcome to the main module")
const yearlyPlan = createPlan()
const sunflowerSeed = createSunflower()
addPlant(sunflowerSeed)
const cornSeed = createCorn()
addPlant(cornSeed)
const plantsInField = usePlants()
console.log(plantsInField)