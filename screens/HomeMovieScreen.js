import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { movieData } from "../assets/data/MovieData";

const HomeMovieScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={movieData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => {
          return (
            <View style={styles.dataContainer}>
              <Image
                source={{ uri: item.imageLink }}
                style={styles.movieImage}
              />

              <View style={styles.movieDescriptionContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.yearContainer}>{item.year}</Text>
                <Text>{item.rating}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  flatListContainer: {
    padding: 8,
  },
  dataContainer: {
    margin: 8,
    padding: 16,
    borderColor: "#96ceb4",
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: "row",
  },
  movieImage: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },
  movieDescriptionContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  yearContainer: {
    marginVertical: 8,
  },
});

export default HomeMovieScreen;
