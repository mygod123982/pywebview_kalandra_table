export const types = {
    0: {
        x: 4,
        y: 5
    },
    1: {
        x: 5,
        y: 5
    },
    2: {
        x: 5,
        y: 4
    }
}

export const resetData = (type = 0) => {
    const {x, y} = types[type]
    const result = []
    for (let i = 0; i < y; i++) {
        result.push(Array(x).fill(0))
    }
    return result
}