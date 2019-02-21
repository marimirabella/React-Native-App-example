import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import movieStyles from "../styles/moviesStyles";

export default class MovieThumbnail extends React.Component {
  render() {
    const {
      movie: { Title, Poster, imdbID },
      navigateToMovie
    } = this.props;

    return (
      <TouchableOpacity onPress={navigateToMovie(imdbID)}>
        <View style={movieStyles.movieThumbnail}>
          <Text style={movieStyles.title}>{Title}</Text>
          <Image
            style={movieStyles.image}
            source={{ uri: Poster }}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
    );
  }
}
