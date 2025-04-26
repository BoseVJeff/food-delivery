import { logInOutline, mailOutline, lockClosedOutline, person } from 'ionicons/icons';
import { useState } from 'react';

import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonIcon,
  IonText,
} from '@ionic/react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login attempted with:',username, email, password);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <div className="h-full w-full flex items-center justify-center flex-col gap-5 font-inter">
        <p className='text-5xl font-inter font-extrabold'>GrubGo</p>
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            
            <div className="text-center mb-6">
              <p className="text-4xl font-bold pb-2 text-gray-800">Sign Up!</p>

            </div>

            <div className="space-y-4">
            <div className="relative">
                <IonIcon
                  icon={person}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <IonInput
                  type="text"
                  placeholder="Username"
                  color="danger"
                  value={username}
                  onIonChange={(e) => setUsername(e.detail.value!)}
                  className="w-full pl-10 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="relative">
                <IonIcon
                  icon={mailOutline}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <IonInput
                  type="email"
                  placeholder="Email"
                  color="danger"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                  className="w-full pl-10 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="relative">
                <IonIcon
                  icon={lockClosedOutline}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <IonInput
                  color="danger"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                  className="w-full border border-gray-300 rounded-lg pl-10 py-2"
                />
              </div>

              <IonButton
                expand="block"
                color="danger"
                onClick={handleLogin}
                className="w-full"
              >
                
                Sign Up
              </IonButton>
            </div>

            <div className="mt-4 text-center space-y-2">
              <IonText color="medium">

              </IonText>
              <IonText color="medium">
                <p className="text-sm text-gray-500">
                  Already have an account?{' '}
                  <span className="text-blue-500 hover:underline cursor-pointer">
                    <a href='/login'>Login</a>
                  </span>
                </p>
              </IonText>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;