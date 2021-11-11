import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Card from '../components/Card';
import { cards } from '../data/data';

const { width } = Dimensions.get('window');

export default function App() {

  return (
    <View style={styles.root}>
      {cards.map(card => (
        <Card
          title={card.title}
          paragraphs={card.paragraphs}
          closing={card.closing}
          image={card.image}
          link={card.link}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#484bb0',
    paddingBottom: 50,
  },
  title: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  paragraph: {
    color: '#000',
    fontSize: 16,
    marginTop: 12,
  },
  content: {
    maxWidth: 600,
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#fff',
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.28,
    shadowRadius: 16.0,
    elevation: 24,
    padding: 20,
    paddingLeft: 12,
    paddingRight: 12,
  },
  contenBig: {
    padding: 40,
    paddingLeft: 40,
    paddingRight: 40,
  },
  button: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 12,
  },
  buttonInner: {
    minHeight: 46,
    borderRadius: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  enter: { height: 20 },
});
