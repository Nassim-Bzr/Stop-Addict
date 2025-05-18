import React, { useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome, MaterialIcons } from 'react-native-vector-icons';
import { AppProvider, AppContext } from './AppContext';
import HomeScreen from './screens/HomeScreen';
import InvestScreen from './screens/InvestScreen';
import LastConsumedScreen from './screens/LastConsumedScreen';
import SummaryScreen from './screens/SummaryScreen';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  const { isUserInfoFilled } = useContext(AppContext);

  return (
    <Tab.Navigator
      initialRouteName={isUserInfoFilled ? 'Summary' : 'Home'}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Summary') {
            iconName = focused ? 'bar-chart' : 'bar-chart';
            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name === 'Progress') {
            iconName = focused ? 'line-chart' : 'line-chart';
            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name === 'Journal') {
            iconName = focused ? 'book' : 'book';
            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name === 'Support') {
            iconName = focused ? 'group' : 'group';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Tips') {
            iconName = focused ? 'lightbulb-outline' : 'lightbulb-outline';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
  
      <Tab.Screen name="Summary" component={SummaryScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Progress" component={SummaryScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Journal" component={SummaryScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Support" component={SummaryScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Tips" component={SummaryScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </AppProvider>
  );
}

export default App;
