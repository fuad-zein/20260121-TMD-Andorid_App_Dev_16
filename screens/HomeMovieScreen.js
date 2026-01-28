import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { movieData } from "../assets/data/MovieData";
import { ShowMovie } from "../components/MovieComponent";
import { Icon } from "react-native-elements";

const HomeMovieScreen = () => {
  const [recommended, setRecommended] = useState([]);
  const [mostViewed, setMostViewed] = useState([]);

  const starImages = {
    5: require("../assets/images/movies/five-stars.png"),
    4: require("../assets/images/movies/four-stars.png"),
    3: require("../assets/images/movies/three-stars.png"),
    2: require("../assets/images/movies/two-stars.png"),
    1: require("../assets/images/movies/star.png"),
  };

  const compareRating = (a, b) => {
    const ratingA = a.rating;
    const ratingB = b.rating;

    if (ratingA > ratingB) {
      return -1;
    } else if (ratingA < ratingB) {
      return 1;
    } else {
      return 0;
    }
  };

  const compareViewers = (a, b) => {
    const viewersA = a.viewers;
    const viewersB = b.viewers;

    if (viewersA > viewersB) {
      return -1;
    } else if (viewersA < viewersB) {
      return 1;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const sortRecommended = [...movieData].sort(compareRating);
    const sortedMostViewed = [...movieData].sort(compareViewers);
    setRecommended(sortRecommended);
    setMostViewed(sortedMostViewed);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        nestedScrollEnabled
        data={recommended}
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
                {/* title */}
                <View style={styles.titleRow}>
                  <Icon name="title" type="material" size={18} color="#555" />
                  <Text style={styles.titleText}>{item.title}</Text>
                </View>

                {/* year */}
                <View style={styles.yearRow}>
                  <Icon
                    name="calendar"
                    type="antdesign"
                    size={16}
                    color="#777"
                  />
                  <Text style={styles.yearText}>{item.year}</Text>
                </View>

                {/* rating */}
                {starImages[item.rating] && (
                  <Image
                    style={styles.starImages}
                    source={starImages[item.rating]}
                  />
                )}
              </View>
            </View>
          );
        }}
        ListHeaderComponent={
          <View>
            <View style={styles.mainCategoryContainer}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Most Viewed</Text>
              </View>
            </View>

            <FlatList
              horizontal
              directionalLockEnabled
              nestedScrollEnabled
              data={mostViewed}
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

            <View style={styles.mainCategoryContainer}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Recommended</Text>
              </View>
            </View>
          </View>
        }
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
    flexGrow: 1,
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
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 6,
  },
  yearRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  yearText: {
    marginLeft: 6,
    color: "#666",
  },
  mainCategoryContainer: {
    marginTop: 8,
    marginHorizontal: 8,
    flexDirection: "row",
  },
  categoryContainer: {
    flex: 1,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  starImages: {
    width: 100,
    height: 20,
  },
});

export default HomeMovieScreen;
