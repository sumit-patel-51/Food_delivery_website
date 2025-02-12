import React, { createContext, useState } from "react";
import food_items from "../Pages/Food_items";

export const dataContext = createContext();

function Usercontaxt({ children }) {
  const [input, setInput] = useState("");
  const [cat, setCat] = useState(food_items);
  const [showCart, setShowCart] = useState(false)
  const data = {
    input,
    setInput,
    cat,
    setCat,
    showCart,
    setShowCart,
  };
  return (
    <div>
    <dataContext.Provider value={data}>
        {children}
    </dataContext.Provider>
    </div>
  );
}

export default Usercontaxt;
