let field = []
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