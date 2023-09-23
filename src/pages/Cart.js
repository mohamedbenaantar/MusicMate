import React from 'react'
import {useTitle} from "./../hooks/useTitle"
import { CartCard } from '../components'
export const Cart = () => {
    useTitle("Cart");
    const products = [
        {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/product1.jpeg"},
        {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/product2.jpeg"}

    ]
  return (
    <main>
        <section className="cart">
            <h1>Cart Items: {products.length}</h1>
            {products.map((product) => (
                <CartCard key={product.id} product={product}/>
            ))}
        </section>
    </main>
  )
}
