import React, { useContext, useState } from 'react';
import { View, Text, Switch, TextInput, Button, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function Settings() {
  const { settings, setSettings, leagues, setLeagues } = useContext(AppContext);

  const [newLeague, setNewLeague] = useState({ name: '', record: '', icon: '' });

  const addLeague = () => {
    if (!newLeague.name) return;
    setLeagues([...leagues, { ...newLeague, id: Date.now().toString(), score: 0, projected: 0, oppScore: 0, oppProjected: 0, playing: 0, yetToPlay: 0 }]);
    setNewLeague({ name: '', record: '', icon: '' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {['showProjectedRecord','showBestPerformance','showClosestMatchup'].map(key => (
        <View style={styles.row} key={key}>
          <Text style={styles.label}>{key}</Text>
          <Switch
            value={settings[key]}
            onValueChange={(val) => setSettings({ ...settings, [key]: val })}
          />
        </View>
      ))}

      <Text style={styles.subheader}>Add League</Text>
      <TextInput style={styles.input} placeholder="League Name" placeholderTextColor="#888" value={newLeague.name} onChangeText={t => setNewLeague({ ...newLeague, name: t })}/>
      <TextInput style={styles.input} placeholder="Record (e.g. 3-1)" placeholderTextColor="#888" value={newLeague.record} onChangeText={t => setNewLeague({ ...newLeague, record: t })}/>
      <TextInput style={styles.input} placeholder="Icon URL (optional)" placeholderTextColor="#888" value={newLeague.icon} onChangeText={t => setNewLeague({ ...newLeague, icon: t })}/>
      <Button title="Add League" onPress={addLeague} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 16 },
  header: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  subheader: { color: '#00ff88', fontSize: 16, marginTop: 20, marginBottom: 8 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  label: { color: '#fff', fontSize: 14 },
  input: { backgroundColor: '#1c1c1c', color: '#fff', padding: 8, marginBottom: 8, borderRadius: 6 }
});
