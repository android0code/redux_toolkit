// Written by Amrik
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const MainStack = createNativeStackNavigator();

// Screens
import AllUserScreen from "../features/user/AllUserScreen";
import { RouteConstants } from "./RouteConstants";
import UserPostsScreen from "../features/user/UserPostsScreen";
import UserScreen from "../features/user/UserScreen";
import MainScreen from "../features/dashboard/MainScreen";
import CounterScreen from "../features/counter/CounterScreen";

const MainStackScreen = ({ navigation, route }) => {
  return (
    <MainStack.Navigator initialRouteName={RouteConstants.MainScreen}>
      <MainStack.Screen
        options={{ headerShown: false }}
        name={RouteConstants.MainScreen}
        component={MainScreen}
      />
      <MainStack.Screen
        options={{ headerShown: true }}
        name={RouteConstants.AllUserScreen}
        component={AllUserScreen}
      />
      <MainStack.Screen
        options={{ headerShown: true }}
        name={RouteConstants.UserScreen}
        component={UserScreen}
      />
      <MainStack.Screen
        options={{ headerShown: true }}
        name={RouteConstants.UserPostsScreen}
        component={UserPostsScreen}
      />
      <MainStack.Screen
        options={{ headerShown: true }}
        name={RouteConstants.CounterScreen}
        component={CounterScreen}
      />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
