import { createPlan } from './plan.js'
import { addPlant, usePlants } from "./field.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potoato.js"
import { createWheat } from "./seeds/wheat.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createSoybean } from "./seeds/soybean.js"

console.log("Welcome to the main module")
const yearlyPlan = createPlan()

const sunflowerSeed = createSunflower()
addPlant(sunflowerSeed)

const cornSeed = createCorn()
addPlant(cornSeed)

const potatoSeed = createPotato()
addPlant(potatoSeed)

const wheatSeed = createWheat()
addPlant(wheatSeed)

const asparagusSeed = createAsparagus()
addPlant(asparagusSeed)

const soybeanSeed = createSoybean()
addPlant(soybeanSeed)


const plantsInField = usePlants()
console.log(plantsInField)

