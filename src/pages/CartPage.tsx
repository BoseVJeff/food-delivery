import { IonButton, IonContent, IonIcon, IonLabel } from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import { TitleSetterContext } from "../utils/contexts";
import { add, remove, trashBinOutline } from "ionicons/icons";

const HomePage = () => {
  const titleSetter = useContext(TitleSetterContext);

  titleSetter("Cart");

  const [cartItem, setCartItems] = useState([
    {
      id: 0,
      name: "Lunch",
      description: "Aloo sabji, 2x roti, rice, daal chawal",
      price: 80,
      quantity: 1,
    },
    {
      id: 1,
      name: "Aloo Paratha",
      description: "Aloo Paratha",
      price: 40,
      quantity: 1,
    },
  ]);

  // handling the summary page for totals and subtotals
  
  const [subTotal, setSubTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    let total = 0
    cartItem.forEach(element => {
        total = total + (element.price * element.quantity)
    });
    setSubTotal(parseFloat(total.toFixed(2)))
  },[cartItem])

  useEffect(()=>{
    let totalTaxes = 0
    cartItem.forEach(element => {
        let totalPrice = element.price * element.quantity
        totalTaxes = totalTaxes + (totalPrice * 18/100)
    })
    setTaxes(parseFloat(totalTaxes.toFixed(2)))
  },[cartItem, subTotal])

  useEffect(()=>{
    let total = subTotal + taxes
    setTotal(parseFloat(total.toFixed(2)))
  },[cartItem, taxes])

  const incrementQuantity = (id) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrement quantity, but not below 1
  const decrementQuantity = (id) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id && item.quantity > 1 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      )
    );
  };

  return (
    <>
      <IonContent>
        <div className="md:p-10 p-5 font-inter flex gap-5 flex-col md:flex-row">
          <div className="w-full">
            <p className=" text-4xl font-bold text-left border-b-2 pb-2 md:pt-0 pt-15  border-[#eee]">
              Your Cart
            </p>
            <div className="pt-10">
              {/* items Card */}
              {cartItem.map((items) => (
                <div key={items.id} className="h-[10rem] md:h-[10rem] w-[100%] md:w-[90%] rounded-xl flex gap-2 shadow-sm border-2 border-[#eee] mb-5">
                  <img
                    src="https://ionicframework.com/docs/img/demos/card-media.png"
                    alt="silluate of mountains"
                    className=" h-full w-[30%] object-cover rounded-lg scale-90 md:w-[25%]"
                  />
                  <div className="p-2 flex flex-col justify-between w-[28%] md:w-[45%]">
                    <p className="text-[1.2rem] md:text-[1.6rem] font-inter pt-4 text-left font-semibold">
                      {items.name}
                    </p>
                    <p className="text-sm text-left truncate pb-2">
                      {items.description}
                    </p>
                    <p className="text-[1.2rem] text-left pb-4 md:text-2xl">₹{items.price}</p>
                  </div>
                  <div className="flex gap-4 justify-center items-center ">
                    <IonIcon
                      icon={add}
                      slot="start"
                      className="text-[0.8rem] md:text-xl cursor-pointer bg-[#f9f9f9] p-2 rounded-md border-2 border-[#eee]"
                      onClick={() => incrementQuantity(items.id)}
                    />
                    <p className="text-[0.8rem] md:text-xl">{items.quantity}</p>
                    <IonIcon
                      icon={remove}
                      slot="start"
                      className="text-[0.8rem] md:text-xl cursor-pointer bg-[#f9f9f9] p-2 rounded-md border-2 border-[#eee]"
                      onClick={() => decrementQuantity(items.id)}
                    />
                  </div>
                  <div className="flex justify-center items-center w-[15%]">
                    <IonLabel className="hover:bg-[#eee] text-center p-2 rounded-lg border-2 border-[#f3f3f3] transition-all duration-300 hover:text-red-500 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash2-icon lucide-trash-2 "><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                  </IonLabel>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1/2 border-l-2 flex flex-col justify-center items-center gap-8 border-[#eee] h-full">
            <p className="text-2xl font-bold text-left">Summary</p>
            <div className="w-[70%] flex flex-col gap-5 text-[1.1rem]">
              <div className="flex justify-between border-b-2 border-[#eee] pb-2">
                <p>Sub Total</p>
                <p>₹{subTotal}</p>
              </div>
              <div className="flex justify-between border-b-2 border-[#eee] pb-2">
                <p>Taxes</p>
                <p>{taxes}</p>
              </div>
              <div className="flex justify-between border-b-2 border-[#eee] pb-2">
                <p>Total</p>
                <p>₹{total}</p>
              </div>
              <div>
                <IonButton className="w-full h-10" color={"danger"}>
                  Pay
                </IonButton>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default HomePage;
