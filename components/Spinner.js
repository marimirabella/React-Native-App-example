import React from "react";
import { View, Animated } from "react-native";

import screenStyles from "../styles/screenStyles";

const spinnerUrl =
  "https://rodrigovallades.gallerycdn.vsassets.io/extensions/rodrigovallades/es7-react-js-snippets/1.9.3/1544731524156/Microsoft.VisualStudio.Services.Icons.Default";

export default class Spinner extends React.Component {
  rotate = new Animated.Value(0);

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.rotate, {
        toValue: 360,
        duration: 1500
      })
    ).start();
  }

  render() {
    return (
      <View style={screenStyles.spinner}>
        <Animated.Image
          source={{ uri: spinnerUrl }}
          style={{
            height: 100,
            width: 100,
            alignItems: "center",
            transform: [
              {
                rotate: this.rotate.interpolate({
                  inputRange: [0, 360],
                  outputRange: ["0deg", "360deg"]
                })
              }
            ]
          }}
        />
      </View>
    );
  }
}
