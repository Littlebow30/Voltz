import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from './product-context.jsx';

function ProductDetail() {
    const { productId } = useParams();
    const {productlist} = useProduct();
    const serverhost = import.meta.env.VITE_SERVERHOST;
    const product = productlist.find(p=>p.id==productId)

    return (
        <div className="product-detail">
            <h1>{product.clothing}</h1>
            <img src={`${serverhost}/${product.img}`} alt={product.clothing} />
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Size:</strong> {product.size}</p>
            <p><strong>Color:</strong> {product.color}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Inventory:</strong> {product.inventory}</p>
        </div>
    );
    
}

export default ProductDetail;
