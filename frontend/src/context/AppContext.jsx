import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext=createContext();

const AppContextProvider=(props)=>{

    const currencySymbol ='R'
    const val={
       doctors,currencySymbol
    };

    return(
        <AppContext.Provider value={val}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
