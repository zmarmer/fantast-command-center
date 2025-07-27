import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LeagueDetail() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>League Detail View Coming Soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#ccc',
    fontSize: 18
  }
});
