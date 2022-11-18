function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        let url = `http://localhost:5000/products?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)

    }
}

export const productAction={getProducts}