import React from "react";
import {
  TextInput
} from "react-native";

import {
  PRIMARY_COLOR,
  MARGIN_TOP,
  MARGIN_BOTTOM,
  RADIUS,
  PADDING_RIGHT,
  MEDIUM_TEXT,
  MARGIN_RIGHT,
  MARGIN_LEFT
} from "../../constants/styles";

const Input = ({value, onChangeText, placeholder, secureTextEntry, multiline, numberOfLines }) => {
  const {inputStyle} = styles;

  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      autoCorrect={false}
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={inputStyle}
    />
  );
};

const styles = {
  inputStyle: {
    paddingRight: PADDING_RIGHT,
    paddingLeft: PADDING_RIGHT,
    fontSize: MEDIUM_TEXT,
    borderWidth: 2,
    borderRadius: RADIUS,
    borderColor: PRIMARY_COLOR,
    fontFamily: 'CircularStd-Book',
    marginTop: MARGIN_TOP,
    marginBottom: MARGIN_BOTTOM,
    marginRight: MARGIN_RIGHT,
    marginLeft: MARGIN_LEFT
  }
};

export { Input };
