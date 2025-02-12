import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import {useDispatch} from 'react-redux'
import { AddItem } from "../redux/cardSlice";
import { GiChickenOven } from "react-icons/gi";
import { toast } from "react-toastify";

function Card(props) {
  const dispatch = useDispatch()
  return (
    <div
      key={props.id}
      className="flex flex-col w-[300px] h-[25rem] overflow-hidden bg-white p-3 rounded-lg shadow-lg hover:scale-[1.04] transition-all duration-150" 
    >
      <div className="w-full overflow-hidden h-[70%] rounded-lg">
        <img src={props.image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="flex flex-col justify-end py-2 h-[40%] gap-3">
        <p className="font-bold text-[1.5rem]">{props.name}</p>
        <div className="flex justify-between text-yellow-500">
          <p>Rs {props.price}/-</p>
          <span className="flex items-center gap-2">
            {props.type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />} {props.type}
          </span>
        </div>
        <button
          key={props.id}
          className="bg-yellow-400 text-white p-2 rounded-lg hover:bg-yellow-300 transition-all" onClick={()=>{dispatch(AddItem({id:props.id, name:props.name, price:props.price, quantity: props.quantity, image:props.image})); toast.success("Item Added Successfully !", {autoClose:2000, draggable:true})}}
        >
          Add to Dish
        </button>
      </div>
    </div>
  );
}

export default Card;
