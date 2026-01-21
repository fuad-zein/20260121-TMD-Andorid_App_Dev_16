import { View, Text } from "react-native";

const ThirdScreen = () => {
  return (
    <View
      style={{ backgroundColor: "mistyrose", flex: 1, flexDirection: "row" }}
    >
      <View style={{ backgroundColor: "red", flex: 1 }}>
        <Text style={{ color: "white" }}>Pikachu</Text>
      </View>
      <View style={{ backgroundColor: "orange", flex: 1 }}>
        <Text style={{ color: "black" }}>Flaron</Text>
      </View>
      <View style={{ backgroundColor: "yellow", flex: 1 }}>
        <Text style={{ color: "black" }}>Rapidash</Text>
      </View>
    </View>
  );
};

export default ThirdScreen;
