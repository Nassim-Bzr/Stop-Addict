import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`p-4`}>
        <Text style={tw`text-xl font-bold`}>Paramètres</Text>
        {/* Ajoutez ici les options de paramètres que vous souhaitez */}
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
