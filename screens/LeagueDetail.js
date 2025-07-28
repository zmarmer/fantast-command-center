import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const LeagueDetail = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>League Detail</Text>

      <View style={styles.matchupCard}>
        <Text style={styles.teamName}>You (Team Mayhem)</Text>
        <Text style={styles.score}>108.6 pts (Proj 125.2)</Text>
        <Text style={styles.players}>4 Playing | 3 Yet to Play</Text>
      </View>

      <View style={styles.matchupCard}>
        <Text style={styles.teamName}>Opponent (Gridiron Goats)</Text>
        <Text style={styles.score}>117.3 pts (Proj 120.8)</Text>
        <Text style={styles.players}>5 Playing | 2 Yet to Play</Text>
      </View>

      <Text style={styles.sectionTitle}>Top Pe
