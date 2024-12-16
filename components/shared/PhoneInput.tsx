import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import React, { FC } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "./CustomText";
import { authStyles } from "@/styles/authStyles";
import { commonStyles } from "@/styles/commonStyles";
import CustomButton from "./CustomButton";

const PhoneInput: FC<PhoneInputProps> = ({
  value,
  onChangeText,
  onBlur,
  onFocus,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomText fontFamily="Medium" style={styles.text}>
        + 91
      </CustomText>

      <TextInput
        placeholder="0000000000"
        keyboardType="phone-pad"
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        maxLength={10}
        placeholderTextColor={"#ccc"}
        style={styles.input}
      />

  

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    gap: 4,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "#222",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    fontSize: RFValue(13),
    fontFamily: "Medium",
    height: 25,
    width: "90%",
  },
  text: {
    fontSize: RFValue(13),
    top: 2,
    fontFamily: "Medium",
  },
});

export default PhoneInput;


    {/* <View style={authStyles.footerContainer}>
        <CustomText
          fontFamily="Medium"
          variant="h7"
          style={[
            commonStyles.lightText,
            {
              textAlign: "center",
              marginHorizontal: 20,
            },
          ]}
        >
          By continue , you agree to the terms and privacy policy of Rapido
        </CustomText>
      </View> */}
