import { Text } from "react-native";

export default function AppTextSpaceGroteskRegular(props) {
  return (
    <Text
      {...props}
      style={[{ fontFamily: "SpaceGroteskRegular" }, props.style]}
    >
      {props.children}
    </Text>
  );
}
