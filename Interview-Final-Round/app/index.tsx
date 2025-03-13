import { Text, View } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import React from "react";
import { useOAuth } from "@clerk/clerk-expo";
import { RootStackParamList } from "@/utils/types";
import { Provider } from "react-redux";
import { store } from "@/utils/store";
import Login from "@/screens/Login";
import OnboardingScreen from "@/screens/Onboarding";
import Home from "@/screens/Home";
import Cart from "@/screens/Cart";
import Payment from "@/screens/Payment";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="OnBoardingScreen">
          <Stack.Screen name="OnBoardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
      </Provider>
    </>
  );
}