import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function Settings() {
  const [showBest, setShowBest] = useState(true);
  const [showProjRecord, setShowProjRecord] = useState(true);
  const [showPlayersRemaining, setShowPlayersRemaining] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customize Dashboard</Text>

      <View style={styles.settingRow}>
        <Text style={styles.label}>Show Best Performance</Text>
        <Switch
          value={showBest}
          onValueChange={() => setShowBest(prev => !prev)}
        />
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.label}>Show Projected Record</Text>
        <Switch
          value={showProjRecord}
          onValueChange={() => setShowProjRecord(prev => !prev)}
        />
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.label}>Show Players Remaining</Text>
        <Switch
          value={showPlayersRemaining}
          onValueChange={() => setShowPlayersRemaining(prev => !prev)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    padding: 16
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  label: {
    color: '#ccc',
    fontSize: 16
  }
});
