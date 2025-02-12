import React, { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import Cotegorie from "../Pages/Cotegories";
import Card from "../components/Card";
import food_items from "../Pages/Food_items";
import { dataContext } from "../contaxt/Usercontaxt";
import { RxCross1 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Slider from "../components/sliderBar/Slider";
import images from "../assets/images";

function Home() {
  const { cat, setCat, input, showCart, setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCat(food_items);
    } else {
      const newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCat(newList);
    }
  }

  const items = useSelector((state) => state.cart);
  const subTotal = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const deliveryFee = 20;
  const taxes = (subTotal * 0.5) / 100;
  const grandTotal = subTotal + deliveryFee + taxes;

  return (
    <div className="w-full min-h-screen bg-yellow-100">
      <NavBar />
      {!input ? (
        <div className="flex justify-center px-3 mt-[5rem]">
          <Slider>
            {images.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </Slider>
        </div>
      ) : null}
      {/* mininavbar */}
      {!input ? (
        <div className="flex flex-wrap w-full mt-[1rem] justify-center items-center gap-1 px-2">
            {Cotegorie.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-1 w-24 h-24rem] justify-center items-center bg-white p-2 shadow-md rounded-lg overflow-hidden hover:bg-yellow-200 transition-all duration-400 cursor-pointer"
                onClick={() => filter(item.name)}
              >
                <div>{item.image}</div>
                <p className="text-yellow-500 text-[10px] font-bold">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
      ) : null}

      {/* Cart */}
      <div
        className={`flex flex-wrap gap-4 justify-center py-4 px-2 w-full ${
          !input ? "mt-[0]" : "mt-[5rem]"
        }`}
      >
        {cat.length > 0 ? (
          cat.map((item) => (
            <Card
              id={item.id}
              key={item.id}
              name={item.food_name}
              category={item.food_category}
              type={item.food_type}
              image={item.food_image}
              price={item.price}
              quantity={item.food_quantity}
            />
          ))
        ) : (
          <div className=" text-yellow-500 text-[2rem] ">No Item Found</div>
        )}
      </div>
      <div
        className={`w-[100%] md:w-[45%] h-full bg-white p-6 overflow-auto z-50 fixed top-0 right-0 ${
          showCart ? "translate-x-0" : "translate-x-full"
        } shadow-lg transition-all duration-200`}
      >
        <header className="flex justify-between items-center">
          <span className="text-yellow-400 font-bold">Order Items</span>
          <RxCross1
            onClick={() => setShowCart(false)}
            className="text-yellow-400 font-bold text-[1.5rem] cursor-pointer"
          />
        </header>
        {items.length > 0 ? (
          <>
            <div className="w-full flex flex-col gap-4 mt-5">
              {items.map((item) => (
                <Card2
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  quantity={item.quantity}
                />
              ))}
            </div>
            <div className="flex flex-col gap-1 w-full mt-6">
              <div className="border-t-2 border-b-2 p-4 border-yellow-400">
                <div className="flex justify-between text-yellow-500">
                  <p>Subtotal</p>
                  <p>Rs {subTotal}/-</p>
                </div>
                <div className="flex justify-between mt-3 text-yellow-500">
                  <p>Delivery Fee</p>
                  <p>Rs {deliveryFee}/-</p>
                </div>
                <div className="flex justify-between mt-3 text-yellow-500">
                  <p>Taxes</p>
                  <p>{taxes}%</p>
                </div>
              </div>
              <div className="flex justify-between text-lg p-4 text-yellow-500">
                <p>Grand Total</p>
                <p>Rs {grandTotal}/-</p>
              </div>
              <button
                className="bg-yellow-400 text-white p-2 rounded-lg hover:bg-yellow-300 transition-all"
                onClick={() => {
                  toast.success("Order Plased...", { autoClose: 2000 });
                }}
              >
                Place Order
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-full text-yellow-500 font-semibold text-[1.5rem]">
            Empty Card
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
