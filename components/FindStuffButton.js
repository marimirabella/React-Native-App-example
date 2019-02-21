import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import feedStyles from "../styles/feedStyles";

const FindStuffButton = ({ fetchMovies }) => (
  <View style={feedStyles.wrapper}>
    <TouchableOpacity onPress={fetchMovies} style={feedStyles.button}>
      <Text style={feedStyles.buttonText}>Find stuff</Text>
    </TouchableOpacity>
  </View>
);

export default FindStuffButton;
