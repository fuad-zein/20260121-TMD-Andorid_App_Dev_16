import { SafeAreaProvider } from "react-native-safe-area-context";
import FirstScreen from "./screens/FirstScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <FirstScreen />
    </SafeAreaProvider>
  );
}
