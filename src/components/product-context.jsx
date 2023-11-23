import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);
export const ProductProvider = ({ children }) => {
    const [productlist , setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/api/clothes')
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
   




