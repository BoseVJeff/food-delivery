import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonSpinner,
  useIonAlert,
} from "@ionic/react";
import { useContext, useEffect, useRef, useState } from "react";
import { TitleSetterContext, UserContext } from "../utils/contexts";
import { search } from "ionicons/icons";
import { FoodItem } from "../utils/types";

const HomePage = () => {
  const titleSetter = useContext(TitleSetterContext);

  titleSetter("Menu");

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [menuItems, setMenuItems] = useState<FoodItem[]>([]);

  const [searchTerm, setSearchTerm] = useState<string>("");

  let availableForToday: FoodItem[] = menuItems.filter((e) => e.name.toLowerCase().includes(searchTerm.toLowerCase()) || e.description.toLowerCase().includes(searchTerm.toLowerCase()));

  let todaysSpecial: FoodItem[] = availableForToday.filter((i) => i.isSpecial === true);

  const user = useContext(UserContext);

  const [presentAlert] = useIonAlert();

  useEffect(() => {
    setMenuItems(user.menu);
    setIsLoading(false);
  }, [user.menu]);

  const searchBar = useRef<HTMLInputElement | null>(null);

  if (isLoading) {
    return <>
      <IonSpinner></IonSpinner>
      <input type="text" ref={searchBar}></input>
    </>
  }

  function updateSearchTerm() {

    setSearchTerm(searchBar.current?.value ?? "");
  }

  function addItemToCart(item: FoodItem) {
    // user.addToCart(item);
    presentAlert({
      header: item.name,
      message: item.description,
      buttons: [
        {
          text: "Add to Cart",
          handler: () => {
            user.addToCart(item);
          },
        }
      ],
    });
  }

  return (
    <>
      {/* <IonTitle>Listen now</IonTitle> */}
      <IonContent>
        <div className=" flex flex-col pl-10 pt-20 pr-10 md:pt-10">
          <div>
            <p className="font-inter text-5xl font-extrabold  pb-5  text-left  ">
              Feeling Hungry ?
            </p>
          </div>
          <div className="pt-5">
            <div className="flex items-center justify-center gap-2 ">
              <input
                id="search"
                type="text"
                ref={searchBar}
                placeholder="Search for food"
                onInput={updateSearchTerm}
                className="w-full outline-none border-2 bg-white rounded-lg h-11 border-[#e0e0e0] text-2xl pr-3 pl-3 shadow-sm"
              />
              {/* <IonSearchbar placeholder="Search for food" showClearButton="focus" className="w-full outline-none border-2 bg-white rounded-lg h-11 border-[#e0e0e0] text-2xl pr-3 pl-3 shadow-sm"></IonSearchbar> */}
              <div className=" rounded-lg w-[3rem] bg-[#f7f7f7] h-11 flex items-center justify-center border-2 border-[#e0e0e0] shadow-sm cursor-pointer">
                <IonIcon icon={search} slot="start" className="text-xl" />
              </div>
            </div>
            <p className="text-left font-bold text-2xl pb-3 pt-5 border-b-2 border-[#eee] ">
              Today's Special
            </p>
            <div className="flex overflow-x-auto pb-5 pt-5 scrollbar-hide gap-5 px-1"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}>
              {todaysSpecial.map((e) => (
                <IonCard className="min-w-[17rem] w-[17rem] flex-shrink-0 rounded-xl shadow-sm border-2 border-[#e0e0e0] cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out"
                  key={e.id} onClick={() => addItemToCart(e)}
                >

                  <div className="h-[11rem] overflow-hidden">
                    <img
                      alt="Silhouette of mountains"
                      src={(e.image === "") ? "https://ionicframework.com/docs/img/demos/card-media.png" : e.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <IonCardHeader className=" ">
                    <IonCardTitle className="text-left p-3 text-[1.5rem]">
                      {e.name}
                    </IonCardTitle>
                  </IonCardHeader>

                  <p className="text-[1.4rem] font-inter text-left pl-3 pb-3 text-black font-medium">
                    ₹{e.price}
                  </p>
                </IonCard>
              ))}

            </div>
            <div className="hidden md:flex justify-end gap-2 mt-2">
              <button
                className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
                onClick={() => {
                  const container = document.querySelector('.overflow-x-auto');
                  if (container !== null) {
                    container.scrollBy({ left: -300, behavior: 'smooth' });
                  }
                }}
              >
                &larr;
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
                onClick={() => {
                  const container = document.querySelector('.overflow-x-auto');
                  if (container !== null) {
                    container.scrollBy({ left: 300, behavior: 'smooth' });
                  }
                }}
              >
                &rarr;
              </button>
            </div>


            <p className="text-left font-bold text-2xl pb-3 pt-5 border-b-2 border-[#eee] ">
              Available for today
            </p>
            {/* <div className="flex justify-start pt-5 gap-2">
              <IonChip
                outline={true}
                className="bg-white border-2 border-[#eee] pr-4 pl-4 text-left text-[1rem]"
              >
                Lunch
              </IonChip>
            </div> */}
            <div className=" flex flex-wrap gap-8 pt-5">
              {availableForToday.map((e) => (
                <IonCard key={e.id} onClick={() => addItemToCart(e)} className=" md:w-[17rem] w-[100%] rounded-xl shadow-md border-2 border-[#e0e0e0]  cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                  <div className="h-[11rem] overflow-hidden">
                    <img
                      alt="Silhouette of mountains"
                      src={(e.image === "") ? "https://ionicframework.com/docs/img/demos/card-media.png" : e.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <IonCardHeader className=" ">
                    <IonCardTitle className="text-left p-3 text-[1.5rem]">
                      {e.name}
                    </IonCardTitle>
                  </IonCardHeader>

                  <p className="text-[1.4rem] font-inter text-left pl-3 pb-3 text-black font-medium">
                    ₹{e.price}
                  </p>
                </IonCard>
              ))}
            </div>
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default HomePage;
