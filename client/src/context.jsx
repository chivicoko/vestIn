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

    let totalPrice = cartItems.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0);
    let naira = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
    });
    // let totalPriceInNairaFormat = naira.format(totalPrice);

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
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartNum));
        localStorage.setItem("items", JSON.stringify(cartItems));
      }, [cartNum, cartItems]);

    return <AppContext.Provider value={{cartNum, cartUpdate, products, cartItems, naira, totalPrice}}>
        {children}
    </AppContext.Provider>
}

export const useGlobContext = () => {
    return useContext(AppContext);
}


export {AppContext, AppProvider};