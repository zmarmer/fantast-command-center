import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function LeagueDetail() {
  const { leagues } = useContext(AppContext);

  const renderTeam = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.teamName}>{item.name} [{item.record}]</Text>
      <Text style={styles.scoreLine}>
        Score: {item.score} ({item.projected})
      </Text>
      <Text style={styles.scoreLine}>
        Opponent: {item.opponent} – {item.oppScore} ({item.oppProjected})
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>League Details</Text>
      <FlatList
        data={leagues}
        keyExtractor={(item) => item.id}
        renderItem={renderTeam}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 12 },
  header: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  card: { backgroundColor: '#1c1c1c', padding: 12, marginVertical: 6, borderRadius: 8 },
  teamName: { color: '#00ff88', fontWeight: 'bold', fontSize: 16 },
  scoreLine: { color: '#fff', fontSize: 14, marginTop: 4 }
});
