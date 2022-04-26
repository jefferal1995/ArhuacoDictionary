import React from "react";
import {
  View,
  TouchableOpacity
} from "react-native";

import {
  TextLabel
} from "../../components/common";

import {
  MARGIN_TOP,
  MARGIN_BOTTOM,
  MARGIN_RIGHT,
  MARGIN_LEFT,
  RADIUS,
  SECONDARY_COLOR,
  PADDING_TOP,
  PADDING_BOTTOM,
  NEUTRAL_COLOR,
  BIG_TEXT
} from "../../constants/styles";

const Button = ({ onPress, textStyle, buttonStyle, children }) => {
  const { button, text } = styles;
  return (
    <View style={{flexDirection: "row"}}>
      <TouchableOpacity onPress={onPress} style={{...button, ...buttonStyle}}>
        <TextLabel style={{...text, ...textStyle}}>
          {children}
        </TextLabel>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  text: {
    alignSelf: "center",
    color: NEUTRAL_COLOR,
    fontSize: BIG_TEXT,
    paddingTop: PADDING_TOP,
    paddingBottom: PADDING_BOTTOM
  },
  button: {
    flex: 1,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: RADIUS,
    marginTop: MARGIN_TOP,
    marginBottom: MARGIN_BOTTOM,
    marginLeft: MARGIN_LEFT,
    marginRight: MARGIN_RIGHT,
    paddingTop: PADDING_TOP,
    paddingBottom: PADDING_BOTTOM
  }
};

export { Button };
