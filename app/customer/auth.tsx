import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { authStyles } from "@/styles/authStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CustomText from "@/components/shared/CustomText";
import { commonStyles } from "@/styles/commonStyles";
import PhoneInput from "@/components/shared/PhoneInput";
import CustomButton from "@/components/shared/CustomButton";
import { resetAndNavigate } from "@/utils/Helpers";
import { signin } from "@/service/authservice";

const Auth = () => {
  const [phone, setPhone] = useState("");

  const handleNext = () => {
    console.log("custmer function");

    if (!phone) {
      Alert.alert("Bro enter your phone number");
      return;
    }
    if (!phone && phone.length !== 10) {
      Alert.alert("Complete your phone number");
      return;
    }

    signin({ role: "customer", phone });

    // resetAndNavigate("/customer/home");
  };

  return (
    <SafeAreaView style={authStyles.container}>
      <ScrollView contentContainerStyle={authStyles.container}>
        <View style={commonStyles.flexRowBetween}>
          <Image
            // source={require("@/assets/images/captain_logo.png")}
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

        <CustomText
          fontFamily="Regular"
          variant="h7"
          style={commonStyles.lightText}
        >
          Enter Your Phone Number to proceed
        </CustomText>

        <PhoneInput onChangeText={setPhone} value={phone} />
      </ScrollView>

      {/* [---------------------] Scroll button  [-----------] */}

      <View style={authStyles.footerContainer}>
        <CustomText
          fontFamily="Regular"
          variant="h8"
          style={[
            commonStyles.lightText,
            { textAlign: "center", marginHorizontal: 20 },
          ]}
        >
          By continuing , you agree to the terms and privacy policy of rapido
        </CustomText>
        <CustomButton
          title="Next"
          onPress={handleNext}
          loading={false}
          disabled={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Auth;
