import { View, Text, TouchableOpacity } from "react-native";

const SecondScreen = () => {
  const openAlert = (game) => {
    if (game === "mobileLegends") {
      alert("You chose Mobile Legends!");
    } else if (game === "pubg") {
      alert("You chose PUBG!");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "lavender",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* todo: mobile legends */}
      <View
        style={{
          backgroundColor: "skyblue",
          padding: 10,
          margin: 10,
          borderStyle: "dashed",
          borderRadius: 1,
          borderWidth: 5,
          borderColor: "red",
        }}
      >
        <Text
          style={{
            color: "black",
            fontFamily: "sans-serif",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 5,
          }}
        >
          Mobile Legends
        </Text>
        <Text>
          <Text
            style={{
              color: "#4A08A3",
              fontWeight: "bold",
            }}
          >
            Mobile Legends
          </Text>{" "}
          is a multiplayer online battle arena (MOBA) game. The two opposing
          teams fight to reach and destroy the enemy’s base while defending
          their own base for control of a path.
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            padding: 8,
            margin: 8,
            borderRadius: 50,
            borderWidth: 2,
          }}
          onPress={() => openAlert("mobileLegends")}
        >
          <Text style={{ color: "lightcoral" }}>Mobile Legends Button</Text>
        </TouchableOpacity>
      </View>

      {/* todo: pubg */}
      <View
        style={{
          backgroundColor: "cornflowerblue",
          padding: 10,
          margin: 10,
          borderStyle: "dotted",
          borderRadius: 1,
          borderWidth: 5,
          borderColor: "red",
        }}
      >
        <Text
          style={{
            color: "black",
            fontFamily: "sans-serif",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 5,
          }}
        >
          PUBG
        </Text>
        <Text>
          <Text
            style={{
              color: "#4A08A3",
              fontWeight: "bold",
            }}
          >
            PlayerUnknown’s Battlegrounds,
          </Text>{" "}
          better known as PUBG, is a multiplayer battle royale game in which
          players drop onto an island and fight to be the last one left
          standing.
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            padding: 8,
            margin: 8,
            borderRadius: 50,
            borderWidth: 2,
          }}
          onPress={() => openAlert("pubg")}
        >
          <Text style={{ color: "lightcoral" }}>PUBG Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SecondScreen;
