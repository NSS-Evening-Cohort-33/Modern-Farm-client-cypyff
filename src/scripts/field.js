let field = []
<<<<<<< HEADf

=======
export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (const corn of seed) {
            field.push(corn)
        }
    } else {
        field.push(seed)
    }
}
export const usePlants = () => {
    return structuredClone(field)
}
>>>>>>> 2a01cd887c218fa2660094b16eb928dc9edbed74

