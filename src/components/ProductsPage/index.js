import React from 'react'
import Feature from '../Feature';
import Footer from '../Footer';
import Products from '../Products';
import { productData, productDataTwo, productDataipad } from '../Products/data';

function ProductsPage() {
    return (
        <>
            <Products heading='Tech Specs ' data={productData} styled='hidden' />
            <Products heading='Tech Specs ' data={productDataTwo} styled='hidden' />
            <Products heading='Tech Specs ' data={productDataipad} styled='hidden' />
            <Footer />
        </>
    )
}

export default ProductsPage
