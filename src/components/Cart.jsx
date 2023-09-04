import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { CardContext } from '../App';
import { deleteShoppingCart, removeFromDb } from '../utils/tools';
import CartItem from './Cards/CartItem';


const Cart = () => {

    const [cart1,setCart1] = useContext(CardContext)
    //console.log(cart);

    let total = 0;
    if (cart1.length > 0) {
        for (const product of cart1) {
            total = total + product.price * product.quantity
        }
    }
    // remove item from shopping cart
    const handleRemoveItem = (id) =>{
        const remaining = cart1.filter(product => product.id !== id)
        setCart1(remaining)
        removeFromDb(id)
        toast.error('Product Removed')
    }
    // delete shopping cart
   /*  const deleteCartHandler = () =>{
        deleteShoppingCart() 
    }*/

    // Place order
    const orderHandler = () =>{
        if(cart1.length > 0){
            setCart1([])
            deleteShoppingCart()
            return toast.success('order done...👍')
        }
        return toast.error('cart is empty!🔥')
    }
    // clear cart 
    const deleteCartHandler = () =>{

        if(cart1.length > 0){
            setCart1([])
            deleteShoppingCart()
            return toast.success('items removed successfully...👍')
        }
        return toast.error('cart is empty!🔥')

    }
    


    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
                <h2 className='text-xl font-semibold'>
                    {cart1.length ? 'Review cart items' : 'cart is Empty!'}
                </h2>
                <ul className='flex flex-col divide-y  divide-gray-600'>
                    {
                        cart1.map(product => 
                        <CartItem key={product.id}
                             
                            product={product}
                            handleRemoveItem={handleRemoveItem}
                            ></CartItem>)
                    }
                </ul>
                <div className='space-y-1 text-right'>
                    <p>
                        Total amount: <span className='font-semibold'>{total}$</span>
                    </p>
                    <p className='text-sm text-gray-400'>
                        Not including taxes and shipping costs
                    </p>
                </div>
                <div className='flex justify-end space-x-4'>
                    {cart1.length > 0 ? (<button onClick ={deleteCartHandler}className='btn-outlined'>Clear Cart</button>) : (<Link to='/shop'><button className='btn-outlined'>Back to Shop</button></Link>)}
                    <button onClick={orderHandler} className='btn-primary'>Place Order</button>

                </div>
            </div>
        </div>
    );
};

export default Cart;