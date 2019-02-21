import Picker from "react-native-picker";
import { View, Text, TouchableOpacity } from "react-native";
import range from "lodash.range";
import React from "react";

import feedStyles from "../styles/feedStyles";

export default class Search extends React.Component {
  showPicker = () => {
    const { onYearSelect } = this.props;
    const data = range(2019, 1895, -1);

    Picker.init({
      pickerData: data,
      selectedValue: [data[0]],
      onPickerConfirm: onYearSelect
    });
    Picker.show();
  };

  render() {
    return (
      <View style={feedStyles.searchWrapper}>
        <TouchableOpacity onPress={this.showPicker}>
          <Text style={feedStyles.search}>Select a Year</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
