import React from 'react'
import { Link, useLocation } from "react-router-dom"
function SignlePage() {
    const product = useLocation()?.state
    console.log(product)

    return (
        <div>
            <Link to={"/"}>go to home</Link>
            <div className="">
                <img src={product.images.icon} alt="" width={"200px"} />
                <h1> id: {product.id}</h1>
                <h1>{product.name}</h1>
                <h1>${product.price}</h1>
            </div>
        </div>
    )
}

export default SignlePage