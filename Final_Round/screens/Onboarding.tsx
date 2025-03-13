import { DoneButton, NextButton } from "@/components/Onboarding_Buttons";
import { RootStackParamList } from "@/utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, StyleSheet } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';

type Props = NativeStackScreenProps<RootStackParamList, "OnBoardingScreen">;


export default function OnboardingScreen({ navigation }: Props) {
    return (
        <Onboarding
            onDone={() => navigation.replace("Home")}
            onSkip={() => navigation.replace("Home")}
            NextButtonComponent={NextButton}
            DoneButtonComponent={DoneButton}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/onboarding/github.png')} style={styles.imageContainer} />,
                    title: 'GitHub auth enabled',
                    subtitle: 'You can login using your GitHub account!',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/onboarding/google.png')} style={styles.imageContainer} />,
                    title: 'Google authentication available',
                    subtitle: 'Login using your Google account!',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/onboarding/razorpay.png')} style={styles.razorPayContainer} />,
                    title: 'Razorpay Payments',
                    subtitle: 'Payment made simplified using RazorPay!',
                },
            ]}
        />
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 160,
        height: 155,
        marginTop: -100
    },
    razorPayContainer: {
        width: 250,
        height: 155,
        marginTop: -100
    }
})