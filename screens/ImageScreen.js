import { View, Image, ScrollView } from "react-native";

const ImageScreen = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <ScrollView horizontal={true} style={{ alignItems: "center" }}>
        <View style={{ margin: 8, padding: 8 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: "green",
              backgroundColor: "aliceblue",
            }}
            source={require("../assets/images/pikachu.png")}
          />
        </View>

        <View style={{ margin: 8, padding: 8 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: "green",
              backgroundColor: "aliceblue",
            }}
            source={require("../assets/images/flareon.png")}
          />
        </View>

        <View style={{ margin: 8, padding: 8 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: "green",
              backgroundColor: "aliceblue",
            }}
            source={require("../assets/images/rapidash.png")}
          />
        </View>

        <View style={{ margin: 8, padding: 8 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: "green",
              backgroundColor: "aliceblue",
            }}
            source={{
              uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/54.png",
            }}
          />
        </View>

        <View style={{ margin: 8, padding: 8 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: "green",
              backgroundColor: "aliceblue",
            }}
            source={{
              uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageScreen;
