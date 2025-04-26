
import React, { useContext } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonContent } from '@ionic/react';
import { timeOutline, peopleOutline, cashOutline, mailOutline, callOutline, locationOutline } from 'ionicons/icons';
import { TitleSetterContext } from '../utils/contexts';

function AboutUs() {
    const titleSetter = useContext(TitleSetterContext);

    titleSetter("About Us");
  return (
    <IonContent className="ion-padding-0">
      <div className="bg-[#f8f8f8] font-inter min-h-screen">
      <div className="p-6 md:p-10">
        <div className="w-full flex flex-col md:flex-row bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center h-[38rem]">
            <p className="font-bold text-7xl mb-5">
              About Us
            </p>
            <p className="pt-6 text-lg md:text-xl text-gray-700">
              GrubGo was created by students who were tired of spending their precious break time waiting in long canteen lines. We built this app to make campus dining more efficient, allowing you to pre-order meals and pick them up when they're ready.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 bg-[#f0f0f0] flex items-center justify-center">
            <div className="w-full h-full overflow-hidden">
              <img 
                src="https://t3.ftcdn.net/jpg/08/33/97/18/360_F_833971865_WaiYVhb6e5iciJDjSBbzPTZeoz1NuC9Q.jpg" 
                alt="Students using GrubGo app" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 md:p-10">
        <div className="text-center mb-10">
          <p className="font-bold text-[3rem]">Problems We're Fixing</p>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            We identified these key challenges in campus dining and built GrubGo to address them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <IonCard className="rounded-xl overflow-hidden shadow-lg p-6 border-2 border-gray-200 hover:scale-105 transition-all duration-150 cursor-pointer ease-in">

            <IonCardHeader>
              <div className="flex justify-center m-4">
                <div className="p-4 flex justify-center items-center rounded-full bg-[#d0542a]">
                  <IonIcon icon={timeOutline} className="w-8 h-8 text-white" />
                </div>
              </div>
              <IonCardTitle className="text-2xl font-bold font-inter text-center mb-2">Long Wait Times</IonCardTitle>
            </IonCardHeader>
            <p className='text-lg text-center'>
              Students waste valuable break time standing in long lines at campus canteens, often missing out on relaxation time.
            </p>
            
          </IonCard>
          
          {/* Card 2 */}
          <IonCard className="rounded-xl overflow-hidden shadow-lg p-6 border-2 border-gray-200 hover:scale-105 transition-all duration-150 cursor-pointer ease-in">
            <IonCardHeader>
              <div className="flex justify-center m-4">
                <div className="p-4 flex justify-center items-center rounded-full bg-[#d0542a]">
                  <IonIcon icon={peopleOutline} className="w-8 h-8 text-white" />
                </div>
              </div>
              <IonCardTitle className="text-2xl font-bold font-inter text-center mb-2">Crowded Spaces</IonCardTitle>
            </IonCardHeader>
            <p className='text-lg text-center'>
              Cramped dining areas during peak hours create stress and frustration, leading to a poor dining experience.
            </p>
          </IonCard>
          
          {/* Card 3 */}
          <IonCard className="rounded-xl overflow-hidden shadow-lg p-6 border-2 border-gray-200 hover:scale-105 transition-all duration-150 cursor-pointer ease-in">
            <IonCardHeader>
              <div className="flex justify-center m-4">
                <div className="p-4 flex justify-center items-center rounded-full bg-[#d0542a]">
                  <IonIcon icon={cashOutline} className="w-8 h-8 text-white" />
                </div>
              </div>
              <IonCardTitle className="text-2xl font-bold font-inter text-center mb-2">Payment Hassles</IonCardTitle>
            </IonCardHeader>
            <p className='text-lg text-center'>
              Traditional payment methods slow down service and create bottlenecks during checkout at campus food vendors.
              </p>
          </IonCard>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="p-6 md:p-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="font-bold text-5xl text-center mb-12 mt-5">Get In Touch</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-blue-100 mb-4 flex justify-center items-center">
                <IonIcon icon={mailOutline} className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-bold text-xl mb-2">Email Us</h3>
              <p className="text-gray-600">contact@grubgo.app</p>
            </div>
            

            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-green-100 mb-4 flex justify-center items-center">
                <IonIcon icon={callOutline} className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-bold text-xl mb-2">Call Us</h3>
              <p className="text-gray-600">91+ 123456789</p>
            </div>
            

            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-purple-100 mb-4 flex justify-center items-center">
                <IonIcon icon={locationOutline} className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="font-bold text-xl mb-2">Visit Us</h3>
              <p className="text-gray-600">Navrachana University<br /></p>
            </div>
          </div>
        </div>
      </div>
      
      </div>
    </IonContent>
  );
}

export default AboutUs;