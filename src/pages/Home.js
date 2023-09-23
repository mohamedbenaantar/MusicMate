import React from 'react'
import {ProductCard} from "./../components"
import { useTitle } from "./../hooks/useTitle"
export const Home = () => {
    useTitle("Home")
    const products = [
        {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/product1.jpeg"},
        {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/product2.jpeg"},
        {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/product3.jpeg"},
        {"id": 4, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/product2.jpeg"},
        {"id": 5, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/images/product4.jpeg"},     
        {"id": 6, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/product3.jpeg"},
        {"id": 7, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/product1.jpeg"},
        {"id": 8, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/images/product4.jpeg"},
        {"id": 9, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/product2.jpeg"},
    ]
  return (
    <main>
       <section className="products">
        {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
        ))}
        
        </section> 
    </main>
  )
}
