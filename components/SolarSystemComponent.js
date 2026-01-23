import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

export const SolarSystemComponent = (props) => {
  const { planetImage, planetTitle, planetDescription } = props;

  const clickedPlanet = (planet) => {
    alert(`You clicked ${planet}`);
  };

  return (
    <TouchableOpacity onPress={() => clickedPlanet(planetTitle)}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "wheat",
          padding: 16,
          margin: 16,
          borderRadius: 20,
          borderColor: "green",
          borderWidth: 1,
        }}
      >
        <Image source={planetImage} style={{ height: 100, width: 100 }} />
        <View
          style={{ flex: 1, marginHorizontal: 8, justifyContent: "center" }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {planetTitle}
          </Text>
          <Text>{planetDescription}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
