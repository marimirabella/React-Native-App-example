import React from "react";
import { View, Text } from "react-native";

import feedStyles from "../styles/feedStyles";

const Heading = () => (
  <View style={feedStyles.wrapper}>
    <Text style={feedStyles.heading}>Movies Feed</Text>
  </View>
);

export default Heading;
