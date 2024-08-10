import { createContext, useContext } from "react";
import data from "../assets/data";

const menuContext = createContext()

export function MenuProvider({ children }) {
    return ( // 객체안에 menu 키안에 data가 들어있음
        <menuContext.Provider value={{menu: data.menu}}>
            {children}
        </menuContext.Provider>
    )
}

export function useMenu() {
    return useContext(menuContext)
}