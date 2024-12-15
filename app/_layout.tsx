import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import {gestureHandlerRootHOC} from "react-native-gesture-handler";


const Rootlayout = () => {


  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="role" />
      <Stack.Screen name="customer/auth" />
      <Stack.Screen name="captain/auth"  />
      {/* <Stack.Screen name='index' /> */}
    </Stack>
  );
};

export default gestureHandlerRootHOC(Rootlayout);


