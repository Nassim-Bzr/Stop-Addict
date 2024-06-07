import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

const InvestScreen = ({ route, navigation }) => {
  const { addiction } = route.params || { addiction: 'cette addiction' }; // Ajoutez une valeur par défaut
  const [isMoney, setIsMoney] = useState(true);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`bg-blue-900 p-4 flex-row justify-between items-center`}>
        <Text style={tw`text-white text-lg font-bold`}>STOP ADDICT</Text>
        <TouchableOpacity style={tw`bg-white p-2 rounded-full`}>
          <Text style={tw`text-blue-900 text-lg`}>👤</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`flex-1 justify-center items-center p-5`}>
        <View style={tw`border-2 border-blue-900 p-5 mb-5`}>
          <Image
            source={{ uri: 'https://example.com/your-image-url.png' }} // Replace with your image URL
            style={tw`w-24 h-24`}
          />
        </View>
        <Text style={tw`text-xl text-center mb-5`}>
          En moyenne, combien d’argent ou de temps avez-vous investi par jour pour {addiction} ?
        </Text>
        <View style={tw`flex-row mb-5`}>
          <TouchableOpacity
            style={tw`flex-1 p-4 ${isMoney ? 'bg-blue-900' : 'bg-gray-300'} rounded-l-lg items-center`}
            onPress={() => setIsMoney(true)}
          >
            <Text style={tw`${isMoney ? 'text-white' : 'text-black'}`}>Argent</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-1 p-4 ${!isMoney ? 'bg-blue-900' : 'bg-gray-300'} rounded-r-lg items-center`}
            onPress={() => setIsMoney(false)}
          >
            <Text style={tw`${!isMoney ? 'text-white' : 'text-black'}`}>Temps</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`items-center mb-5`}>
          <Text style={tw`text-2xl text-blue-900 mb-2`}>0 €</Text>
          <TouchableOpacity>
            <Text style={tw`text-red-600`}>Changer la devise</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={tw`bg-red-600 p-4 rounded-lg`}
          onPress={() => navigation.navigate('LastConsumed')}
        >
          <Text style={tw`text-white text-lg`}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default InvestScreen;
