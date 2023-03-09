import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

function Product() {
    const { productData } = useContext(UserContext)
    const [searchData, setSearchData] = useState("")
    // console.log(searchData)
    console.log(productData)
    const myFunc = (e) => {
        let data = productData.filter(pro => {
            return pro.name.toUpperCase().includes(e.target.value.toUpperCase())
        })
        return e.target.value === "" ? setSearchData("") : setSearchData(data)
    }

    return (
        <div>
            <input type="text" placeholder='Search product' onChange={myFunc} />
            <div className="">
                {searchData !== "" ? searchData?.map(product => (
                    <div className="" key={product.id}>
                        <Link to={`/product/${product.id}`} state={product}>
                            <h1>{product.name}</h1>
                        </Link>
                    </div>
                )) : <h1>Hech nima yoq</h1>}
            </div>

        </div>
    )
}

export default Product