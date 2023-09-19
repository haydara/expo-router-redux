import { SplashScreen, Stack } from "expo-router";
import { Provider } from 'react-redux';
import { store } from "@Store";


import {
  useFonts,
  EncodeSansSemiCondensed_100Thin,
  EncodeSansSemiCondensed_200ExtraLight,
  EncodeSansSemiCondensed_300Light,
  EncodeSansSemiCondensed_400Regular,
  EncodeSansSemiCondensed_500Medium,
  EncodeSansSemiCondensed_600SemiBold,
  EncodeSansSemiCondensed_700Bold,
  EncodeSansSemiCondensed_800ExtraBold,
  EncodeSansSemiCondensed_900Black,
} from '@expo-google-fonts/encode-sans-semi-condensed';
import React from "react";
SplashScreen.preventAutoHideAsync();

export default function Layout() {

  const [fontsLoaded] = useFonts({
    EncodeSansSemiCondensed_700Bold,
    EncodeSansSemiCondensed_400Regular,
    EncodeSansSemiCondensed_300Light,
    EncodeSansSemiCondensed_100Thin
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        SplashScreen.hideAsync();
      });
    }
  }, [fontsLoaded]);

  return (
    <Provider store={store}>
    <Stack screenOptions={{ headerShown: false }}  />
    </Provider>
  );
}
