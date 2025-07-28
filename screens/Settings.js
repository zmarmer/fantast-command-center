import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useState } from 'react';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.settingRow}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          trackColor={{ false: '#888', true: '#00ff88' }}
          thumbColor="#121212"
        />
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.label}>Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
          trackColor={{ false: '#888', true: '#00ff88' }}
          thumbColor="#121212"
        />
      </View>

      <Text style={styles.footer}>More settings coming soon...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 20
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00ff88',
    marginBottom: 32
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  label: {
    fontSize: 18,
    color: '#fff'
  },
  footer: {
    marginTop: 40,
    fontSize: 14,
    color: '#888'
  }
});

export default Settings;
