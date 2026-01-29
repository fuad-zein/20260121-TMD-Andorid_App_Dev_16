import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeMovieScreen from "../screens/HomeMovieScreen";
import DetailMovieScreen from "../screens/DetailMovieScreen";
import MostViewedScreen from "../screens/MostViewedScreen";

const Stack = createStackNavigator();

const MainMovieNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            title: "Movie Hub",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
          component={HomeMovieScreen}
        />
        <Stack.Screen
          name="DetailMovie"
          options={{
            title: "Detail Movie",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
          component={DetailMovieScreen}
        />
        <Stack.Screen
          name="MostViewed"
          options={{
            title: "Most Viewed",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
          component={MostViewedScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainMovieNavigator;
