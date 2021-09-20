import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Card from './components/Card';
import { intro } from './data/data';

const { width, height } = Dimensions.get('window');

export default function App() {

  return (
    <View style={styles.root}>
      <Card
        title={intro.title}
        paragraphs={intro.paragraphs}
        closing={intro.closing}
        image={intro.image}
        linkImage={intro.linkImage}
        link={intro.link}
      />
      <Card
        title={intro.title}
        paragraphs={intro.paragraphs}
        closing={intro.closing}
      />
      <Card
        title={intro.title}
        paragraphs={intro.paragraphs}
        closing={intro.closing}
      />
      <Card
        title={intro.title}
        paragraphs={intro.paragraphs}
        closing={intro.closing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1275e6',
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
