import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const SummaryScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { lastConsumedDate } = route.params || { lastConsumedDate: new Date() }; // Ajoutez une valeur par défaut

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [cigarettesSaved, setCigarettesSaved] = useState(0);

  useEffect(() => {
    const calculateTimeDifference = () => {
      const now = new Date();
      const diff = now - new Date(lastConsumedDate);
      setHours(Math.floor(diff / (1000 * 60 * 60)));
      setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((diff % (1000 * 60)) / 1000));
      setCigarettesSaved(Math.floor(diff / (1000 * 60 * 60 * 2)));  // Assume 1 cigarette every 2 hours
    };

    const interval = setInterval(calculateTimeDifference, 1000);
    return () => clearInterval(interval);
  }, [lastConsumedDate]);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`bg-blue-900 p-4 flex-row justify-between items-center`}>
        <Text style={tw`text-white text-lg font-bold`}>STOP ADDICT</Text>
        <TouchableOpacity style={tw`bg-white p-2 rounded-full`}>
          <Text style={tw`text-blue-900 text-lg`}>👤</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`flex-1 p-5`}>
        <Text style={tw`text-2xl text-center text-blue-900 mb-5`}>Mon résumé</Text>

        <View style={tw`p-5 bg-red-100 rounded-lg mb-5`}>
          <Text style={tw`text-lg text-center text-red-600 mb-2`}>Vous avez arrêté votre addiction à la cigarette depuis</Text>
          <View style={tw`flex-row justify-around mb-2`}>
            <Text style={tw`text-xl text-red-600`}>{hours} Heures</Text>
            <Text style={tw`text-xl text-red-600`}>{minutes} Minutes</Text>
            <Text style={tw`text-xl text-red-600`}>{seconds} Secondes</Text>
          </View>
          <Text style={tw`text-4xl text-center text-green-600`}>{cigarettesSaved} Cigarettes non fumées</Text>
        </View>

        <View style={tw`p-5 bg-green-100 rounded-lg mb-5`}>
          <Text style={tw`text-lg text-center text-green-600 mb-2`}>La raison pour laquelle je fais cet arrêt</Text>
          <Text style={tw`text-xl text-center text-green-600 mb-5`}>Je veux reprendre une vie saine</Text>
          <TouchableOpacity style={tw`bg-green-500 p-2 rounded-lg`}>
            <Text style={tw`text-white text-center`}>Ajouter une raison</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default SummaryScreen;
