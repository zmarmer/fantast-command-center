import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function Dashboard() {
  const { leagues, settings } = useContext(AppContext);

  const bestPerformance = leagues.reduce((best, l) => (l.score > best.score ? l : best), leagues[0]);
  const closestMatchup = leagues.reduce((closest, l) => {
    const diff = Math.abs(l.score - l.oppScore);
    const closestDiff = Math.abs(closest.score - closest.oppScore);
    return diff < closestDiff ? l : closest;
  }, leagues[0]);

  const renderLeague = ({ item }) => (
    <View style={[styles.card, { backgroundColor: '#1c1c1c' }]}>
      <View style={styles.cardHeader}>
        <Text style={styles.leagueName}>{item.name} [{item.record}]</Text>
        {item.icon && (
          <Image source={{ uri: item.icon }} style={styles.icon} />
        )}
      </View>
      <Text style={styles.scoreLine}>
        {item.name.includes('Dynasty') ? 'The Blitzers' : 'Denver Dawgs'}: {item.score} ({item.projected})
      </Text>
      <Text style={styles.scoreLine}>
        {item.opponent}: {item.oppScore} ({item.oppProjected})
      </Text>
      <Text style={styles.subtext}>Playing: {item.playing} | Yet to Play: {item.yetToPlay}</Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: settings.backgroundColor }]}>
      {settings.showProjectedRecord && (
        <Text style={styles.header}>Projected Record: 1–1</Text>
      )}
      {settings.showBestPerformance && (
        <Text style={styles.subheader}>Best Performance: {bestPerformance.name} ({bestPerformance.score})</Text>
      )}
      {settings.showClosestMatchup && (
        <Text style={styles.subheader}>Closest Matchup: {closestMatchup.name} vs {closestMatchup.opponent}</Text>
      )}

      <FlatList
        data={leagues}
        keyExtractor={(item) => item.id}
        renderItem={renderLeague}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  header: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  subheader: { color: '#bbb', fontSize: 14, marginBottom: 8 },
  card: {
    padding: 12,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  leagueName: { color: '#00ff88', fontSize: 16, fontWeight: 'bold' },
  scoreLine: { color: '#fff', fontSize: 14, marginTop: 4 },
  subtext: { color: '#bbb', fontSize: 12, marginTop: 4 },
  icon: { width: 24, height: 24, marginLeft: 8, borderRadius: 12 }
});
