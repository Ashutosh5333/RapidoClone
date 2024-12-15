import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { authStyles } from "@/styles/authStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CustomText from "@/components/shared/CustomText";
import { commonStyles } from "@/styles/commonStyles";
import PhoneInput from "@/components/shared/PhoneInput";

const Auth = () => {
  const [phone, setPhone] = useState("");

  return (
    <SafeAreaView style={authStyles.container}>
      <ScrollView contentContainerStyle={authStyles.container}>
        <View style={commonStyles.flexRowBetween}>
          <Image
            source={require("@/assets/images/logo_t.png")}
            style={authStyles.logo}
          />
          <TouchableOpacity style={authStyles.flexRowGap}>
            <MaterialIcons name="help" size={18} color={"grey"} />
            <CustomText fontFamily="Medium" variant="h7">
              Help
            </CustomText>
          </TouchableOpacity>
        </View>
   
           {/* =========== */}

        <CustomText fontFamily="Medium" variant="h7">
            What's your number ?
        </CustomText>

         <CustomText fontFamily="Regular" variant="h7" 
         style={commonStyles.lightText}
         >
           Enter Your Phone Number to proceed
         </CustomText>

         <PhoneInput
         onChangeText ={setPhone}
         value={phone}

         />

      </ScrollView>
    </SafeAreaView>
  );
};

export default Auth;
