import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';

export const ProductContext = createContext([])
export const CardContext = createContext([])

const App = () => {
  //modal state
  let [isOpen, setIsOpen] = useState(false)

  const { cart, products } = useLoaderData()
  const [cart1, setCart1] = useState(cart)

  //session storage
  const cartAlert = sessionStorage.getItem('alert')
  if(cart1.length > 0 && cartAlert !== 'true'){
   setIsOpen(true)
    sessionStorage.setItem('alert',true)
  }



  return (
    <ProductContext.Provider value={products}>
      <CardContext.Provider value={[cart1, setCart1]}>
        <Header></Header>
        <div className='min-h-[calc(100vh-137px)]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </CardContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
