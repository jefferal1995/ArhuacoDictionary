import React from "react";
import {
  Text
} from "react-native";

import {
  MARGIN_RIGHT,
  MARGIN_LEFT,
} from "../../constants/styles";

const TextLabel = (props) => {
  const { text } = styles;
  const { style, ...other_props } = props;
  const merged_style = { ...text, ...style };

  return (
    <Text style={merged_style} {...other_props}>
      {props.children}
    </Text>
  );
};

const styles = {
  text: {
    textAlign: 'center',
    fontFamily: 'CircularStd-Book',
    marginLeft: MARGIN_LEFT,
    marginRight: MARGIN_RIGHT,
    fontSize: 15,
    color: 'black'
  }
};

export { TextLabel };
