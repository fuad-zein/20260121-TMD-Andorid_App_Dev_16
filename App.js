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
      <InstagramHomeScreen />
    </SafeAreaProvider>
  );
}
