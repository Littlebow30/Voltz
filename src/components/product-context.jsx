import React, { createContext, useContext, useState, useEffect } from 'react';
const apiUrl = import.meta.env.VITE_API_URL ?? "http://localhost:8080";
const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);
export const ProductProvider = ({ children }) => {
    const [productlist , setProducts] = useState([]);
    useEffect(() => {
        fetch(`${apiUrl}/api/clothes`)
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
   




