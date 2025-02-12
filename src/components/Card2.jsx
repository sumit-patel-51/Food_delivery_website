import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Dicresequantity, Incresequantity, RemoveItem } from "../redux/cardSlice";

function Card2(props) {
    const dispatch = useDispatch();
  return (
    <div key={props.id} className="w-full h-[7rem] overflow-hidden flex p-2 shadow-lg rounded-md">
      <div className="flex gap-6 w-[60%] h-full ">
        <div className="w-[50%] h-full overflow-hidden rounded-lg">
          <img
            src={props.image}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex gap-2 justify-center flex-col w-[50%]">
          <p>{props.name}</p>
          <div className="flex justify-between items-center font-semibold w-[100%] border-2 overflow-hidden border-yellow-500 rounded-lg shadow-lg">
            <button className="p-2 w-[30%] h-full text-yellow-500 hover:bg-slate-100" onClick={()=>{
                props.quantity > 1 ? dispatch(Dicresequantity(props.id)) : 1
            }}>-</button>
            <span className="flex justify-center items-center text-yellow-500 bg-slate-200 w-[40%] h-full">
              {props.quantity}
            </span>
            <button className="p-2 w-[30%] h-full text-yellow-500 hover:bg-slate-100" onClick={()=>{
                dispatch(Incresequantity(props.id))
            }}>+</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-3 justify-center w-[40%] h-full">
        <p>Rs {props.price}/-</p>
        <RiDeleteBinLine className="text-red-400 text-[1.5rem] cursor-pointer hover:text-red-600" onClick={()=>(dispatch(RemoveItem(props.id)))}/>
      </div>
    </div>
  );
}

export default Card2;
