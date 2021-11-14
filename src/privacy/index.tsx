import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { privacyText } from './privacy';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#484bb0',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

const PrivacyPolicy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{privacyText}</Text>
    </View>
  );
};

export default PrivacyPolicy;
