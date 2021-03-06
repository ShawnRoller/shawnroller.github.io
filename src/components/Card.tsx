import * as React from 'react';
import { Pressable, View, Text, StyleSheet, useWindowDimensions, Image, Linking, ImageSourcePropType } from 'react-native';
import { CardData, Link } from '../data/data';

const getURIFromImage = (source: string | ImageSourcePropType): string => {
  if (typeof source === 'string') {
    return source;
  }
  return Image.resolveAssetSource(source).uri;
};

const renderLink = (link?: Link) => {
  if (link) {
    const { title, url, image } = link;
    return (
      <>
        <View style={styles.enter} />
        <Pressable style={styles.linkContainer} onPress={() => Linking.openURL(url)}>
          {image ? <Image style={[styles.linkImage, image.style]} source={{ uri: getURIFromImage(image.source) }} resizeMode={image.resizeMode} /> : null}
          {title ? <Text style={styles.link}>
            {title}
          </Text> : null}
        </Pressable>
      </>
    );
  }

  return null;
};

const Card = (props: CardData) => {
  const { width } = useWindowDimensions();
  const { title, paragraphs, closing, image, link } = props;

  return (
    <View style={[styles.content, width > 900 && styles.contentBig]}>
      <View style={styles.titleContainer}>
        {image ? <Image style={[styles.image, image.style]} source={{ uri: getURIFromImage(image.source) }} resizeMode={image.resizeMode} /> : null}
        {title ? <Text style={styles.title}>{title}</Text> : null}
      </View>
      {paragraphs.map(paragraph => (
        <Text style={styles.paragraph}>
          {paragraph}
        </Text>
      ))}
      {closing ? (
        <>
          <View style={styles.enter} />
          <Text style={styles.closing}>
            {closing}
          </Text>
        </>
      ) : null}
      {renderLink(link)}
    </View>
  );
};

export default Card;

const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.28,
  shadowRadius: 16.0,
  elevation: 24,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1275e6',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  title: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    color: '#000',
    fontSize: 16,
    marginTop: 12,
  },
  closing: {
    color: '#000',
    fontSize: 16,
    marginTop: 12,
    textAlign: 'center',
  },
  content: {
    maxWidth: 650,
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#fff',
    marginTop: 50,
    padding: 20,
    paddingLeft: 12,
    paddingRight: 12,
    ...shadowStyle,
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
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginHorizontal: 25,
  },
  link: {
    color: 'blue',
    textDecorationColor: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkImage: {
    height: 25,
    width: 25,
    borderRadius: 13,
    marginHorizontal: 15,
  },
});
