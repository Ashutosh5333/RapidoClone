import { View, Text, Image } from "react-native";
import React from "react";
import { commonStyles } from "@/styles/commonStyles";
import { splashStyles } from "@/styles/splashStyles";
import CustomText from "@/components/shared/CustomText";

const Main = () => {
  return (
    <View style={commonStyles.container}>

       <Image source={require('@/assets/images/logo_t.png')}
        style={splashStyles.img}
       />

     <CustomText variant="h5"
           fontFamily="Medium"
           style={splashStyles.text}
      >
         Made In India
     </CustomText>

    </View>
  );
};

export default Main;
