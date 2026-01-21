import { SafeAreaProvider } from "react-native-safe-area-context";
import FirstScreen from "./screens/FirstScreen";
import SecondScreen from "./screens/SecondScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <FirstScreen /> */}
      <SecondScreen />
    </SafeAreaProvider>
  );
}
