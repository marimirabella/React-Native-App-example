import React from "react";
import ImagePicker from "react-native-image-picker";
import Video from "react-native-video";
import { View, Image, TouchableHighlight } from "react-native";

import mediaStyles from "../styles/mediaStyles";

const addPhotoSource =
  "data:image/png;base64,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";
const placeholderUri =
  "https://www.companyshop.co.uk/media/1017/media-placeholder.jpg";

export default class MediaScreen extends React.Component {
  state = {
    uri: "",
    type: "image"
  };

  getMediaObjectFromGallery = () => {
    const options = {
      title: "Select Photo/Video",
      mediaType: "mixed"
    };

    ImagePicker.showImagePicker(options, ({ uri, type }) => {
      this.setState({
        uri,
        type
      });
    });
  };

  renderMediaObject = () => {
    const { uri, type } = this.state;
    const validUri = uri || placeholderUri;
    const isVideo = !type;

    if (isVideo) {
      return (
        <Video
          style={mediaStyles.placeholder}
          source={{ uri: validUri }}
          muted={true}
          repeat={true}
          resizeMode={"cover"}
          volume={1.0}
          rate={1.0}
          ignoreSilentSwitch={"obey"}
        />
      );
    }

    return <Image style={mediaStyles.placeholder} source={{ uri: validUri }} />;
  };

  render() {
    return (
      <View style={mediaStyles.container}>
        {this.renderMediaObject()}
        <TouchableHighlight onPress={this.getMediaObjectFromGallery}>
          <Image
            source={{ uri: addPhotoSource }}
            style={mediaStyles.addPhoto}
          />
        </TouchableHighlight>
      </View>
    );
  }
}
