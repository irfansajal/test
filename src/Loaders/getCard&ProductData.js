import { getStoredCart } from "../utils/tools"

export const productsAndCartData = async () =>{
    const productsData = await fetch('products.json')
    const products = await productsData.json()


    let cart = []
    const savedCart = getStoredCart()
    for (const id in savedCart) {
        const foundProduct = products.find(product => product.id === id)
        if (foundProduct) {
            foundProduct.quantity = savedCart[id]
            cart.push(foundProduct)
        }
    }
    //console.log(cart);
    return {cart,products}
}