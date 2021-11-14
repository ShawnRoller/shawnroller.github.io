import * as React from 'react';
import { Pressable, Text, SafeAreaView } from 'react-native';
import Card from '../components/Card';
import styles from './styles';
import { cards } from '../data/data';
import { useNavigation } from '@react-navigation/core';
import { NavigationPropList, NavigationScreens } from '../models';
import { StackNavigationProp } from '@react-navigation/stack';

type MainProps = StackNavigationProp<NavigationPropList, 'Main'>;

const Main = () => {
  const { navigate } = useNavigation<MainProps>();

  return (
    <SafeAreaView style={styles.root}>
      {cards.map(card => (
        <Card
          title={card.title}
          paragraphs={card.paragraphs}
          closing={card.closing}
          image={card.image}
          link={card.link}
        />
      ))}
      <Pressable style={styles.privacy} onPress={() => navigate(NavigationScreens.Privacy)}>
        <Text style={styles.privacyText}>Privacy Policy</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Main;
