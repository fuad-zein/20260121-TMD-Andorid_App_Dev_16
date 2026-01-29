import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MovieExplanation } from "../components/MovieComponent";

const DetailMovieScreen = (props) => {
  const { route } = props;
  const movie = route.params.item;
  // const { title, year } = route.params;

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  useEffect(() => {
    console.log(movie);
    // console.log(title);
    // console.log(year);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.movieContainer}>
        <View style={styles.middle}>
          <Image style={styles.image} source={{ uri: movie.imageLink }} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{movie.title}</Text>
        </View>

        <MovieExplanation name="Release year" value={movie.year} />

        <MovieExplanation name="Starring" value={movie.starring} />

        <MovieExplanation name="Description" value={movie.description} />

        <MovieExplanation
          name="Viewers"
          value={numberWithCommas(movie.viewers)}
        />

        <MovieExplanation name="Rating" isRating={true} rating={movie.rating} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  movieContainer: {
    margin: 8,
    padding: 8,
  },
  middle: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#ffbe7bff",
  },
  titleContainer: {
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 8,
    backgroundColor: "salmon",
    borderRadius: 10,
    color: "white",
  },
});

export default DetailMovieScreen;
