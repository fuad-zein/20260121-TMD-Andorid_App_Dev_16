import React from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import FirstScreen from "./screens/FirstScreen";
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";
import ImageScreen from "./screens/ImageScreen";
import FourthScreen from "./screens/FourthScreen";
import InstagramHomeScreen from "./screens/InstagramHomeScreen";
import HomeScreen from "./screens/HomeScreen";
import GuessTheCountryScreen from "./screens/GuessTheCountryScreen";
import WinScreen from "./screens/WinScreen";
import MainNavigator from "./navigator/MainNavigator";
import SolarSystemScreen from "./screens/SolarSystemScreen";
import TryCodeScreen from "./screens/TryCodeScreen";
import HomeMovieScreen from "./screens/HomeMovieScreen";

// Mencegah splash screen tertutup otomatis
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    ScriptRegular: require("./assets/fonts/StyleScript-Regular.ttf"),
    SpaceGroteskRegular: require("./assets/fonts/SpaceGrotesk-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      {/* <FirstScreen /> */}
      {/* <SecondScreen /> */}
      {/* <ThirdScreen /> */}
      {/* <ImageScreen /> */}
      {/* <FourthScreen /> */}
      {/* <InstagramHomeScreen /> */}
      {/* <HomeScreen /> */}
      {/* <GuessTheCountryScreen /> */}
      {/* <WinScreen /> */}
      {/* <MainNavigator /> */}
      {/* <SolarSystemScreen /> */}
      {/* <TryCodeScreen /> */}
      <HomeMovieScreen />
    </SafeAreaProvider>
  );
}
