import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

export default function loader() {



  return <LottieView source={require("../../../../assets/splash.json")} autoPlay loop={false}/>
    

}