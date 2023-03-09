import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()


export const UserProvider = ({ children }) => {
    const [productData, setProductData] = useState([])
    const [getInputData, setInputData] = useState("")

    useEffect(() => {
        const getApi = async () => {
            let api = await axios.get("https://fortnite-api.com/v2/cosmetics/br/new")
            return setProductData(api.data.data.items)
        }
        getApi()
    }, [])


    return < UserContext.Provider value={{ getInputData, setInputData, productData }
    }> {children}</UserContext.Provider >

}