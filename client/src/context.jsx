import React, {useContext, useState} from "react";
import { useEffect } from "react";
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [cartNum, setCartNum] = useState(JSON.parse(localStorage.getItem("cart") || 0));
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("items") || "[]"));
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

    const cartUpdate = (product) => {
        const productExists = cartItems.find(item => item.id === product.id);
        if (productExists) {
            setCartItems(cartItems.map(item => item.id === product.id ? {...productExists, quantity: productExists.quantity + 1} : item));
            // setCartNum((prevCounter) => prevCounter + 1);
        } else {
            setCartItems([...cartItems, {...product, quantity: 1}]);
            setCartNum((prevCounter) => prevCounter + 1);
        }

        // setCartItems([...cartItems, product]);
    }
    // console.log(cartItems[8].quantity);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartNum));
        localStorage.setItem("items", JSON.stringify(cartItems));
      }, [cartNum, cartItems]);

    return <AppContext.Provider value={{cartNum, cartUpdate, products, cartItems}}>
        {children}
    </AppContext.Provider>
}

export const useGlobContext = () => {
    return useContext(AppContext);
}


export {AppContext, AppProvider};