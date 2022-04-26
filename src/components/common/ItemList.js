import React from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";

import {
  PRIMARY_COLOR,
  MARGIN_TOP,
  MARGIN_BOTTOM,
  RADIUS,
  PADDING_LEFT,
  PADDING_RIGHT,
  PADDING_TOP,
  PADDING_BOTTOM,
  MARGIN_LEFT,
  MARGIN_RIGHT,
  NEUTRAL_COLOR,
  BIG_TEXT,
  MEDIUM_TEXT
} from "../../constants/styles";

const ItemList = ({ onPress, title, subtitle, style }) => {
  const { view, button, titleStyle, subtitleStyle } = styles;
  return (
    <View style={view}>
      <TouchableOpacity onPress={onPress} style={{...button, ...style}}>
        <Text style={titleStyle}>
          {title}
        </Text>
        <Text style={subtitleStyle}>
          {subtitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  view: {
    flex: 1,
    flexDirection: "row",
  },
  titleStyle: {
    color: NEUTRAL_COLOR,
    fontSize: BIG_TEXT,
    paddingTop: PADDING_TOP,
    paddingBottom: PADDING_BOTTOM,
    paddingLeft: PADDING_LEFT,
    paddingRight: PADDING_RIGHT,
    fontFamily: 'CircularStd-Book',
  },
  subtitleStyle: {
    color: NEUTRAL_COLOR,
    fontSize: MEDIUM_TEXT,
    paddingTop: PADDING_TOP,
    paddingBottom: PADDING_BOTTOM,
    paddingLeft: PADDING_LEFT,
    paddingRight: PADDING_RIGHT,
    fontFamily: 'CircularStd-Book',
  },
  button: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: RADIUS,
    marginTop: MARGIN_TOP,
    marginBottom: MARGIN_BOTTOM,
    marginLeft: MARGIN_LEFT,
    marginRight: MARGIN_RIGHT,
    paddingTop: PADDING_TOP,
    paddingBottom: PADDING_BOTTOM
  }
};

export { ItemList };
