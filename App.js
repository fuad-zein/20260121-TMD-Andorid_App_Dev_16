import { SafeAreaProvider } from "react-native-safe-area-context";
import FirstScreen from "./screens/FirstScreen";
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";
import ImageScreen from "./screens/ImageScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <FirstScreen /> */}
      {/* <SecondScreen /> */}
      {/* <ThirdScreen /> */}
      <ImageScreen />
    </SafeAreaProvider>
  );
}
