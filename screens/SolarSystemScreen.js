import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SolarSystemComponent } from "../components/SolarSystemComponent";

const SolarSystemScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 16, alignItems: "center" }}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "serif",
            textDecorationLine: "underline",
          }}
        >
          SOLAR SYSTEM
        </Text>
      </View>

      <ScrollView>
        <SolarSystemComponent
          planetImage={require("../assets/images/lesson8/mercury.png")}
          planetTitle="Mercury"
          planetDescription="Mercury is the fastest planet, zipping around the sun every 88 earth day"
        />

        <SolarSystemComponent
          planetImage={require("../assets/images/lesson8/venus.png")}
          planetTitle="Venus"
          planetDescription="Venus spins slowly in the opposite direction from most planets"
        />

        <SolarSystemComponent
          planetImage={require("../assets/images/lesson8/earth.png")}
          planetTitle="Earth"
          planetDescription="Earth is the only place we know of so far that’s inhabited by living thing"
        />

        <SolarSystemComponent
          planetImage={require("../assets/images/lesson8/mars.png")}
          planetTitle="Mars"
          planetDescription="Mars is a dusty, cold, desert world with a very thin atmosphere"
        />

        <SolarSystemComponent
          planetImage={require("../assets/images/lesson8/jupiter.png")}
          planetTitle="Jupiter"
          planetDescription="Jupiter is more than twice as massive than the other planets of our solar system combined"
        />

        <SolarSystemComponent
          planetImage={require("../assets/images/lesson8/saturn.png")}
          planetTitle="Saturn"
          planetDescription="Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system"
        />

        <SolarSystemComponent
          planetImage={require("../assets/images/lesson8/uranus.png")}
          planetTitle="Uranus"
          planetDescription="Uranus rotates at a nearly 90-degree angle from the planet of its orbit"
        />

        <SolarSystemComponent
          planetImage={require("../assets/images/lesson8/neptune.png")}
          planetTitle="Neptune"
          planetDescription="Neptune is dark, cold, and whipped by supersonic winds"
        />
      </ScrollView>
    </View>
  );
};

export default SolarSystemScreen;
