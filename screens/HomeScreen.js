import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`bg-blue-900 p-4`}>
        <Text style={tw`text-white text-lg font-bold`}>STOP ADDICT</Text>
      </View>
      <View style={tw`flex-1 justify-center items-center p-5`}>
        <Text style={tw`text-xl text-center mb-5`}>
          Quelle addiction ou mauvaise habitude souhaitez-vous arrêter ?
        </Text>
        <TouchableOpacity
          style={tw`bg-gray-300 p-4 rounded-lg mb-2 w-full items-center`}
          onPress={() => navigation.navigate('Invest', { addiction: 'Alcool' })}
        >
          <Text>Alcool</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-gray-300 p-4 rounded-lg mb-2 w-full items-center`}
          onPress={() => navigation.navigate('Invest', { addiction: 'Jeux d’argent' })}
        >
          <Text>Jeux d’argent</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-gray-300 p-4 rounded-lg mb-2 w-full items-center`}
          onPress={() => navigation.navigate('Invest', { addiction: 'Porno' })}
        >
          <Text>Porno</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-gray-300 p-4 rounded-lg mb-2 w-full items-center`}
          onPress={() => navigation.navigate('Invest', { addiction: 'Tabac' })}
        >
          <Text>Tabac</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-gray-300 p-4 rounded-lg mb-2 w-full items-center`}
          onPress={() => navigation.navigate('Invest', { addiction: 'Drogue' })}
        >
          <Text>Drogue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
