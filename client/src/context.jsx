import React, {useContext, useState} from "react";
import { useEffect } from "react";
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [cartNum, setCartNum] = useState(JSON.parse(localStorage.getItem('cart') || 0));
    const [products, setProducts] = useState([]);
    
    const productsUrl = 'https://dummyjson.com/products/';
    const fetchProducts = async (url) => {
        try {
            const {data} = await axios(url);
            setProducts(data.products);
        } catch (error) {
            console.log(error.response);
        }
    }

    useEffect(() => {
        fetchProducts(productsUrl);
    }, []);

    const cartUpdate = (e) => {
        // console.log(e.target);
        setCartNum(cartNum + 1);
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartNum));
      }, [cartNum]);

    return <AppContext.Provider value={{cartNum, cartUpdate, products}}>
        {children}
    </AppContext.Provider>
}

export const useGlobContext = () => {
    return useContext(AppContext);
}


export {AppContext, AppProvider};