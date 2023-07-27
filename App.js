import { StatusBar } from 'expo-status-bar';
import Carteirinha from './src/telas/index.js';
import { useFonts, Outfit_400Regular, Outfit_700Bold } from '@expo-google-fonts/outfit';

import Carregar from "./src/telas/carteirinha/componentes/splash.js"




export default function App() {
  

  let [fontsLoaded] = useFonts({
    "outFitRegular":Outfit_400Regular,
     "outFitBold":Outfit_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }
  return (<>
    <Carregar/>
    </>
    
  );
}


