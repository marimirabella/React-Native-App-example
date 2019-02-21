import React from "react";
import { Text } from "react-native";

import feedStyles from "../styles/feedStyles";

const NoMoviesInfo = () => (
  <Text style={feedStyles.noMovies}>Sorry, no movies were found! ;(</Text>
);

export default NoMoviesInfo;
