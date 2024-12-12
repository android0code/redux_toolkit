// Written by Amrik
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Login from "..//features/auth/Login";
import { RouteConstants } from "./RouteConstants";
const AuthStack = createNativeStackNavigator();

const AuthStackScreen = ({ navigation, route }) => {
  return (
    <AuthStack.Navigator initialRouteName={RouteConstants.Login}>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name={RouteConstants.Login}
        component={Login}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
