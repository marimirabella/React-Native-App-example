import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import moviesStyles from "../styles/moviesStyles";

const MovieThumbnail = ({
  movie: { Title, Poster, imdbID },
  navigateToMovie
}) => (
  <TouchableOpacity onPress={() => navigateToMovie(imdbID)}>
    <View style={moviesStyles.movieThumbnail}>
      <Text style={moviesStyles.title}>{Title}</Text>
      <Image
        style={moviesStyles.image}
        source={{ uri: Poster }}
        resizeMode="cover"
      />
    </View>
  </TouchableOpacity>
);

export default MovieThumbnail;