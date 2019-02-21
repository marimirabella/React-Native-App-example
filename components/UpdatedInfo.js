import React from "react";
import { Text } from "react-native";

import feedStyles from "../styles/feedStyles";

const UpdatedInfo = ({ lastUpdated }) => (
  <Text style={feedStyles.updatedTitle}>
    <Text>Last updated: </Text>
    <Text>{lastUpdated}</Text>
  </Text>
);

export default UpdatedInfo;
