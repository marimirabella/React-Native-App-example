import React from "react";
import { View, Text, Image } from "react-native";

import moviesStyles from "../styles/moviesStyles";

const MovieDetails = ({ navigation }) => {
  const movie = navigation.getParam("movie", {});
  const { Title, Poster, Year } = movie;

  return (
    <View style={moviesStyles.movieDetails}>
      <Text style={moviesStyles.title}>{Title}</Text>
      <Text style={moviesStyles.year}>Year: {Year}</Text>
      <Image
        style={moviesStyles.image}
        source={{ uri: Poster }}
        resizeMode="cover"
      />
    </View>
  );
};

export default MovieDetails;
