import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Dashboard from './screens/Dashboard';
import LeagueDetail from './screens/LeagueDetail';
import Settings from './screens/Settings';
import { AppProvider } from './context/AppContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: { backgroundColor: '#121212' },
            tabBarActiveTintColor: '#00ff88',
            tabBarInactiveTintColor: '#888',
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Dashboard') iconName = 'home';
              else if (route.name === 'League Detail') iconName = 'list';
              else if (route.name === 'Settings') iconName = 'settings';
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="League Detail" component={LeagueDetail} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
