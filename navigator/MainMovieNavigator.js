import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeMovieScreen from "../screens/HomeMovieScreen";
import DetailMovieScreen from "../screens/DetailMovieScreen";
import MostViewedScreen from "../screens/MostViewedScreen";
import RecommendedScreen from "../screens/RecommendedScreen";

const Stack = createStackNavigator();

const MainMovieNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            title: "Movie Collection",
            headerStyle: {
              backgroundColor: "#65c3ba",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",
              fontSize: 24,
            },
            headerTitleAlign: "center",
          }}
          component={HomeMovieScreen}
        />
        <Stack.Screen
          name="DetailMovie"
          options={{
            title: "Detail",
            headerStyle: {
              backgroundColor: "#65c3ba",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",
              fontSize: 24,
            },
            // headerLeft: null,
            headerTintColor: "white",
          }}
          component={DetailMovieScreen}
        />
        <Stack.Screen
          name="MostViewed"
          options={{
            title: "Most Viewed",
            headerStyle: {
              backgroundColor: "#65c3ba",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",
              fontSize: 24,
            },
            // headerLeft: null,
            headerTintColor: "white",
          }}
          component={MostViewedScreen}
        />
        <Stack.Screen
          name="Recommended"
          options={{
            title: "Recommended",
            headerStyle: {
              backgroundColor: "#65c3ba",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white",
              fontSize: 24,
            },
            // headerLeft: null,
            headerTintColor: "white",
          }}
          component={RecommendedScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainMovieNavigator;
