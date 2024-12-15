import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { commonStyles } from "@/styles/commonStyles";
import { splashStyles } from "@/styles/splashStyles";
import CustomText from "@/components/shared/CustomText";
import { useFonts } from "expo-font";
import { resetAndNavigate } from "@/utils/Helpers";

const Main = () => {
  const [loaded] = useFonts({
    Bold:require('../assets/fonts/NotoSans-Bold.ttf'),
    Regular:require('../assets/fonts/NotoSans-Regular.ttf'),
    Medium:require('../assets/fonts/NotoSans-Medium.ttf'),
    Light:require('../assets/fonts/NotoSans-Light.ttf'),
    SemiBold:require('../assets/fonts/NotoSans-SemiBold.ttf'),
  });
  const [hasnavigated,setHasNavigated] = useState(false)
  
   const tokencheck = async() =>{
      resetAndNavigate('/role')
   }

  useEffect(() =>{
     if(!loaded && !hasnavigated){
       const timeoutid = setTimeout(() =>{
         tokencheck()
         setHasNavigated(true)
       },1000)
     }
  },[loaded,hasnavigated])

  return (
    <View style={commonStyles.container}>
      <Image
        source={require("@/assets/images/logo_t.png")}
        style={splashStyles.img}
      />

      <CustomText variant="h5" fontFamily="Medium" style={splashStyles.text}>
        Made In India
      </CustomText>
    </View>
  );
};

export default Main;
