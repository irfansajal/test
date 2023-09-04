import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { CardContext, ProductContext } from '../App';
import { addToDb } from '../utils/tools';
import ProductCard from './Cards/ProductCard';

const Shop = () => {
    
        
        
    const [cart1,setCart1] = useContext(CardContext)


   const products = useContext(ProductContext)
  // console.log(products)
    const handleAddToCart = product =>{
        let newCart = []
        const exists = cart1.find(
          existingProduct => existingProduct.id === product.id
        )
        if (!exists) {
          product.quantity = 1
          
          newCart = [...cart1, product]
        } else {
          const rest = cart1.filter(
            existingProduct => existingProduct.id !== product.id
          )
          exists.quantity = exists.quantity + 1
          newCart = [...rest, exists]
        }
        toast.success('Product added')
        setCart1(newCart)
        addToDb(product.id)
    }
    

    return (
        <div className='product-container'>
            {products.map(product =>
                <ProductCard key={product.id} product={product}  handleAddToCart = {handleAddToCart}></ProductCard>)}

        </div>
    );
};

export default Shop;