import { Text } from "react-native";

export default function AppTextScriptRegular(props) {
  return (
    <Text {...props} style={[{ fontFamily: "ScriptRegular" }, props.style]}>
      {props.children}
    </Text>
  );
}
