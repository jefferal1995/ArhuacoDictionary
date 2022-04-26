import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SectionList
} from "react-native";

import {
	Input,
	ItemList,
} from "../../src/components/common";
import { PADDING_TOP, SECONDARY_COLOR } from "../constants/styles";

import {
	getDBConnection,
	getWordItems
} from '../services/connectionService';

class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      sections: [],
      loading: true
    };
  };

  componentDidMount() {
    this.getWordList(this.state.search);
  };

  searchWord(search) {
    this.getWordList(search);
  };

  async getWordList(search) {
    const db = await getDBConnection();
    const words = await getWordItems(db, search.toLowerCase());
    this.setState({
      search: search,
      sections: this.wordsIntoSections(words),
      loading: false
    });
  };

  wordsIntoSections(words) {  
    let sections = {};
    for(let i = 0; i < words.length; i++) {
      if(!sections[words[i]["ikun"][0].toLowerCase()]) {
        sections[words[i]["ikun"][0].toLowerCase()] = [] 
      }
      sections[words[i]["ikun"][0].toLowerCase()].push(words[i]);
    }

    let finalSections = [];
    for(let section in sections) {
      finalSections.push({ title: section, data: sections[section] });
    }

    finalSections.sort(function(a, b) {
      return a.title.localeCompare(b.title);
    });

    return finalSections;
  };

  definitionIntoNumbered(definition) {
    let numbered = "";
 
    let definitions = definition.split("|");
    for(let i = 0; i < definitions.length; i++) {
      numbered += (i+1) + ". " + definitions[i] + "\n";
    }

    return numbered;
  };

	render() {
    const { sections } = this.state;
    const { navigation } = this.props;
 
		return (
			<View style={styles.generalView}>
				<Input
					label={'Palabra'}
					placeholder={'Busca una palabra en ikʉn o español'}
          onChangeText={ (evt) => this.searchWord(evt) }
				/>
				<SectionList
					sections={sections}
					renderItem={({item}) => <ItemList title={item["ikun"]} subtitle={this.definitionIntoNumbered(item["meaning_spa"])} onPress={()=> navigation.navigate('Significado', { word: item })} /> }
					renderSectionHeader={({section}) => <ItemList title={section.title.toUpperCase()} style={styles.card} />}
					keyExtractor={(item) => item["word_id"]}
				/>
			</View>
		);
	};
};

const styles = StyleSheet.create({
	generalView: {
		flex: 1,
		flexDirection: "column",
		paddingBottom: PADDING_TOP
	},
  card: {
    backgroundColor: SECONDARY_COLOR
  }
});

export default SearchScreen;
