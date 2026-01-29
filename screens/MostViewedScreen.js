import React, { useEffect } from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import { ShowMovie } from "../components/MovieComponent";

const { height, width } = Dimensions.get("window");

const MostViewedScreen = (props) => {
  const { route } = props;
  const sortedMostViewed = route.params.allMostViewed;

  useEffect(() => {
    console.log(sortedMostViewed.length);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        contentContainerStyle={styles.mainDataContainer}
        data={sortedMostViewed}
        numColumns={2}
        key={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <ShowMovie
              image={{ uri: item.imageLink }}
              title={item.title}
              viewers={item.viewers}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: height,
    width: width,
  },
  mainDataContainer: {
    padding: 8,
  },
});

export default MostViewedScreen;
