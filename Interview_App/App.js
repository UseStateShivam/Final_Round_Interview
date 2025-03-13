import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "expo-dev-client";
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import { initializeApp, getApps, getApp } from '@react-native-firebase/app';

// Initialize Firebase only if it hasn't been initialized yet
if (!getApps().length) {
  initializeApp();
}

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  GoogleSignin.configure({
    webClientId: '564986500052-lckjvv2quk6vul8ri8nign97e4sucira.apps.googleusercontent.com'
  });

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onGoogleButtonPress = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      // Get the user's ID token
      const signInResult = await GoogleSignin.signIn();

      let idToken = signInResult.idToken || signInResult.data?.idToken;
      if (!idToken) {
        throw new Error('No ID token found');
      }

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const user_sign_in = await auth().signInWithCredential(googleCredential);
      console.log(user_sign_in);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  if (initializing) return null;

  return (
    <View style={styles.container}>
      {!user ? (
        <GoogleSigninButton
          style={{ width: 300, height: 65, marginTop: 300 }}
          onPress={onGoogleButtonPress}
        />
      ) : (
        <Text>Welcome, {user.displayName}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
