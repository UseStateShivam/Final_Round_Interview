import Cart from "@/screens/Cart";
import Home from "@/screens/Home";
import OnboardingScreen from "@/screens/Onboarding";
import { store } from "@/utils/store";
import { RootStackParamList } from "@/utils/types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="OnBoardingScreen">
          <Stack.Screen name="OnBoardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </Provider>
    </>
  );
}