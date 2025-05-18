import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const SummaryScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const lastConsumedDate = route.params?.lastConsumedDate || new Date();

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
          <View style={tw`p-6 bg-white rounded-xl shadow-lg mb-5`}>
            <Text style={tw`text-lg font-bold text-center text-indigo-900 mb-4`}>
              Vous avez arrêté votre addiction depuis
            </Text>
            <View style={tw`flex-row justify-around mb-6`}>
              <View style={tw`items-center bg-indigo-50 p-4 rounded-lg w-24`}>
                <Text style={tw`text-3xl font-bold text-indigo-600`}>{hours}</Text>
                <Text style={tw`text-indigo-500 text-sm mt-1`}>Heures</Text>
              </View>
              <View style={tw`items-center bg-indigo-50 p-4 rounded-lg w-24`}>
                <Text style={tw`text-3xl font-bold text-indigo-600`}>{minutes}</Text>
                <Text style={tw`text-indigo-500 text-sm mt-1`}>Minutes</Text>
              </View>
              <View style={tw`items-center bg-indigo-50 p-4 rounded-lg w-24`}>
                <Text style={tw`text-3xl font-bold text-indigo-600`}>{seconds}</Text>
                <Text style={tw`text-indigo-500 text-sm mt-1`}>Secondes</Text>
              </View>
            </View>
            <View style={tw`items-center bg-green-50 p-5 rounded-xl`}>
              <Text style={tw`text-4xl font-bold text-green-600`}>{cigarettesSaved}</Text>
              <Text style={tw`text-green-600 text-lg mt-2`}>Cigarettes non fumées</Text>
            </View>
          </View>
        );
      case 'Économies':
        return (
          <View style={tw`p-6 bg-white rounded-xl shadow-lg mb-5`}>
            <Text style={tw`text-2xl font-bold text-center text-green-700 mb-4`}>Mes économies</Text>
            
            <View style={tw`bg-green-50 rounded-xl p-5 mb-4`}>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`text-green-800 text-lg`}>Argent économisé</Text>
                <Text style={tw`text-2xl font-bold text-green-600`}>150 €</Text>
              </View>
              <View style={tw`h-2 bg-gray-200 rounded-full mt-2`}>
                <View style={tw`h-2 bg-green-500 rounded-full w-1/2`}></View>
              </View>
            </View>
            
            <View style={tw`bg-green-50 rounded-xl p-5 mb-4`}>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`text-green-800 text-lg`}>Cigarettes évitées</Text>
                <Text style={tw`text-2xl font-bold text-green-600`}>{cigarettesSaved}</Text>
              </View>
              <View style={tw`h-2 bg-gray-200 rounded-full mt-2`}>
                <View style={tw`h-2 bg-green-500 rounded-full w-1/3`}></View>
              </View>
            </View>
            
            <View style={tw`bg-green-50 rounded-xl p-5`}>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`text-green-800 text-lg`}>Vie gagnée (jours)</Text>
                <Text style={tw`text-2xl font-bold text-green-600`}>10</Text>
              </View>
              <View style={tw`h-2 bg-gray-200 rounded-full mt-2`}>
                <View style={tw`h-2 bg-green-500 rounded-full w-1/4`}></View>
              </View>
            </View>
          </View>
        );
      case 'Calendrier':
        return (
          <View style={tw`p-6 bg-white rounded-xl shadow-lg mb-5`}>
            <Text style={tw`text-2xl font-bold text-center text-indigo-900 mb-4`}>Mon calendrier</Text>
            
            <View style={tw`flex-row flex-wrap justify-around mb-4`}>
              {Array.from({ length: 30 }, (_, i) => (
                <View key={i} style={tw`m-1 w-12 h-12 rounded-lg ${i < 8 ? 'bg-indigo-500' : 'bg-gray-200'} justify-center items-center`}>
                  <Text style={tw`${i < 8 ? 'text-white' : 'text-gray-500'} font-bold`}>{i + 1}</Text>
                </View>
              ))}
            </View>
            
            <View style={tw`mt-4 bg-indigo-50 p-4 rounded-lg`}>
              <Text style={tw`text-center text-indigo-800`}>Vous êtes actuellement à 8 jours sans addiction ! Continuez comme ça !</Text>
            </View>
          </View>
        );
      case 'Objectif':
        return (
          <View style={tw`p-6 bg-white rounded-xl shadow-lg mb-5`}>
            <Text style={tw`text-2xl font-bold text-center text-indigo-900 mb-4`}>Mes objectifs</Text>
            
            <View style={tw`bg-indigo-50 rounded-xl p-5 mb-4`}>
              <Text style={tw`text-lg font-bold text-indigo-800 mb-2`}>Objectif principal</Text>
              <Text style={tw`text-indigo-700 mb-3`}>Rester sobre pendant 1 an</Text>
              <View style={tw`h-3 bg-gray-200 rounded-full mt-2`}>
                <View style={tw`h-3 bg-indigo-500 rounded-full`} style={{ width: '5%' }}></View>
              </View>
              <Text style={tw`text-right text-indigo-600 mt-1`}>5%</Text>
            </View>
            
            <View style={tw`flex-row justify-between`}>
              <TouchableOpacity style={tw`bg-indigo-100 p-4 rounded-xl flex-1 mr-2 items-center`}>
                <Text style={tw`text-indigo-800 font-bold`}>Modifier</Text>
              </TouchableOpacity>
              <TouchableOpacity style={tw`bg-indigo-600 p-4 rounded-xl flex-1 ml-2 items-center`}>
                <Text style={tw`text-white font-bold`}>+ Nouvel objectif</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50`}>
      {/* Header */}
      <View style={tw`bg-indigo-900 px-4 py-3 flex-row justify-between items-center shadow-md`}>
        <Text style={tw`text-white text-xl font-bold`}>STOP ADDICT</Text>
        <TouchableOpacity style={tw`bg-indigo-700 p-2 rounded-full`}>
          <Text style={tw`text-white text-lg font-bold`}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
        <View style={tw`p-4`}>
          <Text style={tw`text-2xl font-bold text-indigo-900 mb-4`}>Mon résumé</Text>
          
          {/* Tab Navigation */}
          <View style={tw`flex-row justify-between bg-gray-200 rounded-xl p-1 mb-5`}>
            {['Résumé', 'Économies', 'Calendrier', 'Objectif'].map((tab) => (
              <TouchableOpacity 
                key={tab}
                onPress={() => setActiveTab(tab)} 
                style={tw`py-2 px-3 rounded-lg flex-1 items-center ${activeTab === tab ? 'bg-white shadow-sm' : ''}`}
              >
                <Text style={tw`${activeTab === tab ? 'text-indigo-900 font-bold' : 'text-gray-600'}`}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {renderContent()}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={tw`bg-white border-t border-gray-200 flex-row justify-around py-2 px-2 shadow-lg`}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Progress')}
          style={tw`items-center justify-center p-2 flex-1`}
        >
          <Text style={tw`text-lg text-indigo-600 mb-1`}>📈</Text>
          <Text style={tw`text-xs text-indigo-900`}>Progrès</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Journal')}
          style={tw`items-center justify-center p-2 flex-1`}
        >
          <Text style={tw`text-lg text-gray-500 mb-1`}>📓</Text>
          <Text style={tw`text-xs text-gray-600`}>Journal</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={tw`items-center justify-center p-2 bg-indigo-600 rounded-full -mt-5 shadow-lg`}
        >
          <Text style={tw`text-lg text-white`}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Support')}
          style={tw`items-center justify-center p-2 flex-1`}
        >
          <Text style={tw`text-lg text-gray-500 mb-1`}>👥</Text>
          <Text style={tw`text-xs text-gray-600`}>Échanger</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Tips')}
          style={tw`items-center justify-center p-2 flex-1`}
        >
          <Text style={tw`text-lg text-gray-500 mb-1`}>💡</Text>
          <Text style={tw`text-xs text-gray-600`}>Conseils</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SummaryScreen;
