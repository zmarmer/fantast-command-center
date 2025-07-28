import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './screens/Dashboard';
import Settings from './screens/Settings';
import LeagueDetail from './screens/LeagueDetail';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: '#121212' },
          tabBarActiveTintColor: '#00ff88',
          tabBarInactiveTintColor: '#888',
          tabBarIcon: ({ color, size }) => {
            let iconName = 'ios-home';
            if (route.name === 'Dashboard') iconName = 'ios-home';
            else if (route.name === 'League Detail') iconName = 'ios-football';
            else if (route.name === 'Settings') iconName = 'ios-settings';
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
      >
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="League Detail" component={LeagueDetail} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
