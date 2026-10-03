import { addPlant } from "./field.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createWheat } from "./seeds/wheat.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createSoybean } from "./seeds/soybean.js"

export const plantSeeds = (plan) => {
    for (const row of plan) {
        for (const crop of row) {
            if (crop === "Asparagus") {
                const seed = createAsparagus()
                addPlant(seed)
            } else if (crop === "Corn") {
                const seed = createCorn()
                addPlant(seed)
            } else if (crop === "Sunflower") {
                const seed = createSunflower()
                addPlant(seed)
            } else if (crop === "Potato") {
                const seed = createPotato()
                addPlant(seed)
            } else if (crop === "Wheat") {
                const seed = createWheat()
                addPlant(seed)
            } else if (crop === "Soybean") {
                const seed = createSoybean()
                addPlant(seed)
            }
        }
    }
}