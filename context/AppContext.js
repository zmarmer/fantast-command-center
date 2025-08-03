import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

const defaultLeagues = [
  {
    id: '1',
    name: 'Sleeper Dynasty',
    record: '3-1',
    score: 108.4,
    projected: 132.9,
    opponent: 'Gridiron Gang',
    oppScore: 104.6,
    oppProjected: 129.1,
    playing: 5,
    yetToPlay: 3,
    icon: null
  },
  {
    id: '2',
    name: 'ESPN Redraft',
    record: '2-2',
    score: 96.2,
    projected: 115.7,
    opponent: 'Chubb Club',
    oppScore: 101.4,
    oppProjected: 121.2,
    playing: 3,
    yetToPlay: 5,
    icon: null
  }
];

const defaultSettings = {
  showProjectedRecord: true,
  showBestPerformance: true,
  showClosestMatchup: true,
  backgroundColor: '#000',
  accentColor: '#00ff88'
};

export const AppProvider = ({ children }) => {
  const [leagues, setLeagues] = useState(defaultLeagues);
  const [settings, setSettings] = useState(defaultSettings);

  // Load from AsyncStorage
  useEffect(() => {
    (async () => {
      const storedLeagues = await AsyncStorage.getItem('leagues');
      const storedSettings = await AsyncStorage.getItem('settings');
      if (storedLeagues) setLeagues(JSON.parse(storedLeagues));
      if (storedSettings) setSettings(JSON.parse(storedSettings));
    })();
  }, []);

  // Save on change
  useEffect(() => { AsyncStorage.setItem('leagues', JSON.stringify(leagues)); }, [leagues]);
  useEffect(() => { AsyncStorage.setItem('settings', JSON.stringify(settings)); }, [settings]);

  return (
    <AppContext.Provider value={{ leagues, setLeagues, settings, setSettings }}>
      {children}
    </AppContext.Provider>
  );
};
