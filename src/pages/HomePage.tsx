import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonContent,
  IonIcon,
  IonInput,
} from "@ionic/react";
import { useContext } from "react";
import { TitleSetterContext } from "../utils/contexts";
import { logInOutline, search } from "ionicons/icons";

const HomePage = () => {
  const titleSetter = useContext(TitleSetterContext);

  titleSetter("Home");
  const availableForToday = [1, 2, 3, 4, 5, 6, 7, 8, 5, 5, 2, 4, 5, 4];
  const todaysSpecial = [1,2,3,4,5,6,7]

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
                type="text"
                placeholder="Search for food"
                className="w-full outline-none border-2 bg-white rounded-lg h-11 border-[#e0e0e0] text-2xl pr-3 pl-3 shadow-sm"
              />
              <div className=" rounded-lg w-[3rem] bg-[#f7f7f7] h-11 flex items-center justify-center border-2 border-[#e0e0e0] shadow-sm cursor-pointer">
                <IonIcon icon={search} slot="start" className="text-xl" />
              </div>
            </div>
            <p className="text-left font-bold text-2xl pb-3 pt-5 border-b-2 border-[#eee] ">
              Today's Special
              </p>
              <div className="flex overflow-x-auto pb-5 pt-5 scrollbar-hide gap-5" 
           style={{ 
             scrollbarWidth: 'none', 
             msOverflowStyle: 'none',
             WebkitOverflowScrolling: 'touch'
           }}>
              {todaysSpecial.map((element) => (
                <IonCard               className="min-w-[17rem] w-[17rem] flex-shrink-0 rounded-xl shadow-md border-2 border-[#e0e0e0] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                >
    
                  <div className="h-[11rem] overflow-hidden">
                    <img
                      alt="Silhouette of mountains"
                      src="https://ionicframework.com/docs/img/demos/card-media.png"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <IonCardHeader className=" ">
                    <IonCardTitle className="text-left p-3 text-[1.5rem]">
                      Lunch
                    </IonCardTitle>
                  </IonCardHeader>

                  <p className="text-[1.4rem] font-inter text-left pl-3 pb-3 text-black font-medium">
                    ₹80
                  </p>
                </IonCard>
              ))}
              
            </div>
            <div className="hidden md:flex justify-end gap-2 mt-2">
        <button 
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
          onClick={() => {
            const container = document.querySelector('.overflow-x-auto');
            container.scrollBy({ left: -300, behavior: 'smooth' });
          }}
        >
          &larr;
        </button>
        <button 
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
          onClick={() => {
            const container = document.querySelector('.overflow-x-auto');
            container.scrollBy({ left: 300, behavior: 'smooth' });
          }}
        >
          &rarr;
        </button>
      </div>


            <p className="text-left font-bold text-2xl pb-3 pt-5 border-b-2 border-[#eee] ">
              Available for today
            </p>
            <div className="flex justify-start pt-5 gap-2">
              <IonChip
                outline={true}
                className="bg-white border-2 border-[#eee] pr-4 pl-4 text-left text-[1rem]"
              >
                Lunch
              </IonChip>
            </div>
            <div className=" flex flex-wrap gap-8 pt-5">
              {availableForToday.map((element) => (
                <IonCard className=" md:w-[17rem] w-[100%] rounded-xl shadow-md border-2 border-[#e0e0e0]  cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
                  <div className="h-[11rem] overflow-hidden">
                    <img
                      alt="Silhouette of mountains"
                      src="https://ionicframework.com/docs/img/demos/card-media.png"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <IonCardHeader className=" ">
                    <IonCardTitle className="text-left p-3 text-[1.5rem]">
                      Lunch
                    </IonCardTitle>
                  </IonCardHeader>

                  <p className="text-[1.4rem] font-inter text-left pl-3 pb-3 text-black font-medium">
                    ₹80
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
