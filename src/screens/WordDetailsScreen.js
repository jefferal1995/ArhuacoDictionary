import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Linking
} from "react-native";

import {
  Button,
  TextLabel
} from "../components/common";

import { MARGIN_LEFT, MARGIN_RIGHT, PADDING_TOP } from "../constants/styles";

class WordDetailsScreen extends Component {
  constructor(props) {
    super(props);
  };

  getFullTranslation(meaningSpa, examplesIkun, examplesSpa) {
    let fullTranslation = '';

    let spDefinitions = meaningSpa.split("|");
    let expIkun = examplesIkun.split("|");
    let expSpanish = examplesSpa.split("|");

    if(expSpanish.length > 1 || examplesIkun > 1) {
      for(let i = 0; i < spDefinitions.length; i++) {
        fullTranslation += (i+1) + ". " + spDefinitions[i] + "\n";
        fullTranslation += expIkun[i] ? "Ejemplo: " + expIkun[i] + "\n" : "";
        fullTranslation += expSpanish[i] ? "Traducción: " + expSpanish[i] + "\n" : "";
        fullTranslation += "\n"
      }      
    } else {
      for(let i = 0; i < spDefinitions.length; i++) {
        fullTranslation += (i+1) + ". " + spDefinitions[i] + "\n";
      }
      fullTranslation += "\n"
      fullTranslation += expIkun[0] ? "Ejemplo: " + expIkun[0] + "\n" : "";
      fullTranslation += expSpanish[0] ? "Traducción: " + expSpanish[0] + "\n" : "";
    }

    return fullTranslation;
  };

  openWhatsAppLink(ikun, translation) {
    let whatsappLink = "https://api.whatsapp.com/send?phone=573203888113&text=Hola,%20tengo%20una%20sugerencia%20para%20esta%20palabra:%0A%0A"
    whatsappLink += ikun + "%0A";
    whatsappLink += encodeURIComponent(translation) + "%0A"
    whatsappLink += encodeURIComponent("Esta es mi sugerencia:") + "%0A"
    Linking.openURL(whatsappLink);
  };

	render() {
    const { route } = this.props;
    const word = route.params.word;
    const fullTranslation = this.getFullTranslation(word["meaning_spa"], word["examples_ikun"], word["examples_spa"]);

		return (
			<View style={styles.generalView}>
        <TextLabel style={styles.wordText}>
          {word["ikun"]}
        </TextLabel>
        <TextLabel></TextLabel>
        <TextLabel style={styles.meaningText}>
          {fullTranslation}
        </TextLabel>
        <Button
          textStyle={styles.buttonTextStyle}
          buttonStyle={styles.buttonStyle}
          onPress={() => this.openWhatsAppLink(word["ikun"], fullTranslation)}>
          {'¿Hay un error en esta palabra? \n Crea una sugerencia'}
        </Button>
			</View>
		);
	};
};

const styles = StyleSheet.create({
	generalView: {
		flex: 1,
		flexDirection: "column",
		paddingTop: PADDING_TOP,
	},
  wordText: {
    fontSize: 50,
  },
  meaningText: {
    fontSize: 20,
    textAlign: 'left'
  },
  buttonTextStyle: {
    fontSize: 15,
  },
  buttonStyle: {
    marginLeft: MARGIN_LEFT + 30,
    marginRight: MARGIN_RIGHT + 30   
  }
});

export default WordDetailsScreen;
