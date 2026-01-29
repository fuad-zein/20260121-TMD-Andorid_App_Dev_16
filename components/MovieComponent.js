import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

export const ShowMovie = (props) => {
  const { image, title, viewers } = props;

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <View style={styles.horizontalDataContainer}>
      <Image style={styles.movieImage} source={image} />

      <View style={styles.horizontalTitleContainer}>
        <Text style={styles.horizontalTitle}>{title}</Text>
      </View>
      <View style={styles.viewersContainer}>
        <Icon name="eye" type="entypo" size={20} />
        <Text style={styles.viewersText}>{numberWithCommas(viewers)}</Text>
      </View>
    </View>
  );
};

export const MovieExplanation = (props) => {
  const { name, value, isRating, rating } = props;

  const starImages = {
    5: require("../assets/images/movies/five-stars.png"),
    4: require("../assets/images/movies/four-stars.png"),
    3: require("../assets/images/movies/three-stars.png"),
    2: require("../assets/images/movies/two-stars.png"),
    1: require("../assets/images/movies/star.png"),
  };

  let renderValue =
    isRating && starImages[rating] ? (
      <Image style={styles.ratingImage} source={starImages[rating]} />
    ) : (
      <Text style={styles.textValue}>{value}</Text>
    );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.nameContainer}>
        <Text style={styles.generalFontSize}>{name}</Text>
      </View>

      <Text style={styles.generalFontSize}> : </Text>

      <View style={styles.valueContainer}>{renderValue}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalDataContainer: {
    margin: 8,
    width: 180,
    alignItems: "center",
    borderColor: "#96ceb4",
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
  },
  movieImage: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },
  horizontalTitleContainer: {
    marginVertical: 8,
  },
  horizontalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  viewersContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewersText: {
    marginLeft: 8,
  },
  mainContainer: {
    flexDirection: "row",
    marginVertical: 6,
    alignItems: "flex-start",
  },
  nameContainer: {
    width: 110,
  },
  generalFontSize: {
    fontSize: 16,
  },
  valueContainer: {
    flex: 1,
  },
  ratingImage: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
  textValue: {
    fontSize: 16,
    flexShrink: 1,
  },
});
