import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

function Product() {
    const { productData } = useContext(UserContext)
    const [searchData, setSearchData] = useState("")
    console.log(productData)

    const myFunc = (e) => {
        let data = productData.filter(pro => {
            return pro.title.toUpperCase().includes(e.target.value.toUpperCase())
        })
        setSearchData(data)
    }
    return (
        <div>
            <input type="text" placeholder='Search product' onChange={myFunc} />
            <div className="">
                {searchData ? searchData?.map(product => (
                    <div className="" key={product.id}><h1>{product.title}</h1></div>
                )) :
                    productData?.map(product => (
                        <div className="" key={product.id}><h1>{product.title}</h1></div>
                    ))}
            </div>

        </div>
    )
}

export default Product