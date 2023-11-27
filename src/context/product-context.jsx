import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();
const serverhost = import.meta.env.VITE_SERVERHOST;

export const useProduct = () => useContext(ProductContext);
export const ProductProvider = ({ children }) => {
    const [productlist , setProducts] = useState([]);
    useEffect(() => {
        fetch(`${serverhost}/api/clothes`)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);
    return (
        <ProductContext.Provider value={{ productlist}}>
            {children}
        </ProductContext.Provider>
    );
}
   




