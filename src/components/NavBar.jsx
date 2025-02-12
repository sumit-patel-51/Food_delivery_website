import React, { useContext, useEffect, useState } from "react";
import { GiFoodTruck } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { dataContext } from "../contaxt/Usercontaxt";
import food_items from "../Pages/Food_items";
import { useSelector } from "react-redux";

function NavBar() {

  const {input, setInput, cat, setCat, setShowCart} = useContext(dataContext);

  const scrollWindow = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
    setInput("")
    setCat(food_items);
  }
  
  useEffect(()=>{
    const newlist = food_items.filter((item)=> item.food_name.includes(input) || item.food_name.toLowerCase().includes(input) || item.food_type.toLowerCase().includes(input) || item.food_type.includes(input))
      setCat(newlist)
  },[input])

  const items = useSelector(state => state.cart)
  return (
    <div className="w-full fixed top-0 z-40 h-[5rem] bg-yellow-100 flex justify-between items-center px-4 md:px-8">
      <div className="p-3 bg-white rounded-lg shadow-md cursor-pointer" onClick={()=> scrollWindow()}>
        <GiFoodTruck  className="text-[2rem] text-yellow-500 "/>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="flex w-[50%] h-[3.4rem] gap-1 bg-white p-3 rounded-md overflow-hidden shadow-md md:w-[70%]">
        <GoSearch className="w-[25px] h-full bg-white text-yellow-500 md:w-[50px]"/>
        <input type="text" placeholder="Search Items..." className="w-[100%] text-[1rem] outline-none md:text-[1.5rem]" onChange={(e) => setInput(e.target.value)} value={input}/>
      </form>
      <div className="p-3 bg-white rounded-lg shadow-md relative cursor-pointer" onClick={()=> setShowCart(true)}>
        <span className="text-yellow-500 absolute top-1 right-1 font-bold">{items.length}</span>
        <LiaLuggageCartSolid className="text-[2rem] text-yellow-500" />
      </div>
    </div>
  );
}

export default NavBar;
