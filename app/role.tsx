import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { roleStyles } from "@/styles/roleStyles";
import CustomText from "@/components/shared/CustomText";
import { router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

const Role = () => {
  const handleCustmerPress = () => {
    router.navigate("/customer/auth");
  };

  const handleCaptianPress = () => {
    router.navigate("/captain/auth");
  };

  return (
    <ScrollView>
    <View style={roleStyles.container}>
      <Image
        source={require("@/assets/images/logo_t.png")}
        style={roleStyles.logo}
      />
      <CustomText fontFamily="Medium" variant="h6">
        Choose your user type
      </CustomText>

      <TouchableOpacity style={roleStyles.card} onPress={handleCustmerPress}>
        <Image
          source={require("@/assets/images/customer.png")}
          style={roleStyles.image}
        />
        <View style={roleStyles.cardContent}>
          <CustomText style={roleStyles.title}>Custmer</CustomText>
          <CustomText>
            Are you a customer ? Order rides and deliveries easily .
          </CustomText>
        </View>
      </TouchableOpacity>

      {/* ===============  This for Captian  ================ */}

      <TouchableOpacity style={roleStyles.card} onPress={handleCaptianPress}>
        <Image
          source={require("@/assets/images/captain.png")}
          style={roleStyles.image}
        />
        <View style={roleStyles.cardContent}>
          <CustomText style={roleStyles.title}>Custmer</CustomText>
          <CustomText>
            Are you a Captain ? Order rides and deliveries easily .
          </CustomText>
        </View>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default Role;
