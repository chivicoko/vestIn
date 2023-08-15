import React, {useContext, useState} from "react";
import { useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [cartNum, setCartNum] = useState(JSON.parse(localStorage.getItem('cart') || 0));

    const cartUpdate = () => {
        setCartNum(cartNum + 1);
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartNum));
      }, [cartNum]);

    return <AppContext.Provider value={{cartNum, cartUpdate}}>
        {children}
    </AppContext.Provider>
}

export const useGlobContext = () => {
    return useContext(AppContext);
}


export {AppContext, AppProvider};