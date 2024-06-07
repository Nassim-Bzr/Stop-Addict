import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const SummaryScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { lastConsumedDate } = route.params;

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [cigarettesSaved, setCigarettesSaved] = useState(0);
  const [activeTab, setActiveTab] = useState('Résumé');

  useEffect(() => {
    const calculateTimeDifference = () => {
      const now = new Date();
      const diff = now - new Date(lastConsumedDate);
      setHours(Math.floor(diff / (1000 * 60 * 60)));
      setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((diff % (1000 * 60)) / 1000));
      setCigarettesSaved(Math.floor(diff / (1000 * 60 * 60 * 2))); // Assume 1 cigarette every 2 hours
    };

    const interval = setInterval(calculateTimeDifference, 1000);
    return () => clearInterval(interval);
  }, [lastConsumedDate]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Résumé':
        return (
          <View style={tw`p-5 bg-red-100 rounded-lg mb-5`}>
            <Text style={tw`text-lg text-center text-red-600 mb-2`}>Vous avez arrêté votre addiction à la cigarette depuis</Text>
            <View style={tw`flex-row justify-around mb-2`}>
              <Text style={tw`text-xl text-red-600`}>{hours} Heures</Text>
              <Text style={tw`text-xl text-red-600`}>{minutes} Minutes</Text>
              <Text style={tw`text-xl text-red-600`}>{seconds} Secondes</Text>
            </View>
            <Text style={tw`text-4xl text-center text-green-600`}>{cigarettesSaved} Cigarettes non fumées</Text>
          </View>
        );
      case 'Économies':
        return (
          <View style={tw`p-5 bg-green-100 rounded-lg mb-5`}>
            <Text style={tw`text-2xl text-center text-green-600 mb-2`}>Mes économies</Text>
            <Text style={tw`text-xl text-center text-green-600 mb-5`}>150 € économisés</Text>
            <Text style={tw`text-xl text-center text-green-600 mb-5`}>10 cigarettes non fumées</Text>
            <Text style={tw`text-xl text-center text-green-600 mb-5`}>10 ans de vie gagnés</Text>
          </View>
        );
      case 'Calendrier':
        return (
          <View style={tw`p-5 bg-yellow-100 rounded-lg mb-5`}>
            <Text style={tw`text-2xl text-center text-yellow-600 mb-2`}>Calendrier</Text>
            <Text style={tw`text-xl text-center text-yellow-600 mb-5`}>Suivi des jours sans addiction</Text>
          </View>
        );
      case 'Objectif':
        return (
          <View style={tw`p-5 bg-blue-100 rounded-lg mb-5`}>
            <Text style={tw`text-2xl text-center text-blue-600 mb-2`}>Objectif</Text>
            <Text style={tw`text-xl text-center text-blue-600 mb-5`}>Mon objectif est de rester sobre pendant 1 an</Text>
          </View>
        );
      default:
        return null;
    }
  };

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
        
        <View style={tw`flex-row justify-around mb-5`}>
          <TouchableOpacity onPress={() => setActiveTab('Résumé')} style={tw`${activeTab === 'Résumé' ? 'bg-blue-400' : 'bg-gray-200'} p-2 rounded-lg`}>
            <Text style={tw`${activeTab === 'Résumé' ? 'text-white' : 'text-black'}`}>Résumé</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Économies')} style={tw`${activeTab === 'Économies' ? 'bg-blue-400' : 'bg-gray-200'} p-2 rounded-lg`}>
            <Text style={tw`${activeTab === 'Économies' ? 'text-white' : 'text-black'}`}>Économies</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Calendrier')} style={tw`${activeTab === 'Calendrier' ? 'bg-blue-400' : 'bg-gray-200'} p-2 rounded-lg`}>
            <Text style={tw`${activeTab === 'Calendrier' ? 'text-white' : 'text-black'}`}>Calendrier</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Objectif')} style={tw`${activeTab === 'Objectif' ? 'bg-blue-400' : 'bg-gray-200'} p-2 rounded-lg`}>
            <Text style={tw`${activeTab === 'Objectif' ? 'text-white' : 'text-black'}`}>Objectif</Text>
          </TouchableOpacity>
        </View>

        {renderContent()}
      </View>

      <View style={tw`flex-row justify-around bg-blue-900 p-4`}>
        <TouchableOpacity onPress={() => navigation.navigate('Progress')}>
          <Text style={tw`text-white`}>📈 Progrès</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Journal')}>
          <Text style={tw`text-white`}>📓 Mon Journal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Support')}>
          <Text style={tw`text-white`}>👥 Échanger</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tips')}>
          <Text style={tw`text-white`}>💡 Conseils</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SummaryScreen;
