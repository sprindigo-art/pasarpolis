const allEqual = arr => arr.every( v => v === arr[0] )

const checker = (params = []) => {
    let product = []
    params.map(val => {
        product = [...product, val.product]
    })
    const isProductEqual = allEqual(product)
    if (isProductEqual) {
        return true
    }
    return false
}

module.exports = checker