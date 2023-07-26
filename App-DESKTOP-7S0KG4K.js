import { setStatusBarHidden } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Carteirinha from "./src/telas/index.js";
import { useFonts, Outfit_400Regular, Outfit_700Bold } from '@expo-google-fonts/outfit';


export default function App() {
  let [fontsLoaded] = useFonts({
    "outFitRegular": Outfit_400Regular,
    "outFitBold": Outfit_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (

    <SafeAreaView style={{flex:1}}>
     <StatusBar />

      <Carteirinha/>

    </SafeAreaView>


  );
  
   
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
