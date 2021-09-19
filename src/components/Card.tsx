import * as React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

interface Props {
  title?: string;
  paragraphs: string[];
  closing?: string;
}

const Card = (props: Props) => {
  const { width } = useWindowDimensions();
  const { title, paragraphs, closing } = props;

  return (
    <View style={[styles.content, width > 900 && styles.contentBig]}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {paragraphs.map(paragraph => (
        <Text style={styles.paragraph}>
          {paragraph}
        </Text>
      ))}
      {closing ? (
        <>
          <View style={styles.enter} />
          <Text style={styles.paragraph}>
            {closing}
          </Text>
        </>
      ) : null}
    </View>
  );
};

export default Card;


const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1275e6',
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
  contentBig: {
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
