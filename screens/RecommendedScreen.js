import React from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import { ShowMovie } from "../components/MovieComponent";

const { height, width } = Dimensions.get("window");

const RecommendedScreen = (props) => {
  const { route, navigation } = props;
  const sortedRecommended = route.params.allRecommended;

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedRecommended}
        contentContainerStyle={styles.mainContainer}
        numColumns={2}
        key={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <ShowMovie
              image={{ uri: item.imageLink }}
              title={item.title}
              // viewers={item.viewers}
              isRecommended={true}
              rating={item.rating}
              onPress={() => navigation.navigate("DetailMovie", { item })}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  mainContainer: {
    padding: 8,
  },
});

export default RecommendedScreen;
