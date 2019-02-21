import React from "react";
import { View, Text, Image } from "react-native";

import movieStyles from "../styles/moviesStyles";

export default class MovieDetails extends React.Component {
  render() {
    const { navigation } = this.props;
    const movie = navigation.getParam("movie", {});

    const { Title, Poster, Year } = movie;

    return (
      <View style={movieStyles.movieDetails}>
        <Text style={movieStyles.title}>{Title}</Text>
        <Text style={movieStyles.year}>Year: {Year}</Text>
        <Image
          style={movieStyles.image}
          source={{ uri: Poster }}
          resizeMode="cover"
        />
      </View>
    );
  }
}
