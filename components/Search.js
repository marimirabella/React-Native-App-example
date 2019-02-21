import Picker from "react-native-picker";
import { View, Text, TouchableOpacity } from "react-native";
import range from "lodash.range";
import React from "react";

import screenStyles from "../styles/screenStyles";

export default class Search extends React.Component {
  showPicker = () => {
    const { onYearSelect } = this.props;
    let data = range(2019, 1895, -1);

    Picker.init({
      pickerData: data,
      selectedValue: [data[0]],
      onPickerConfirm: onYearSelect
    });
    Picker.show();
  };

  render() {
    return (
      <View style={screenStyles.searchWrapper}>
        <TouchableOpacity onPress={this.showPicker}>
          <Text style={screenStyles.search}>Select a Year</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
