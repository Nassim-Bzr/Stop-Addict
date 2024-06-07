import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import tw from 'tailwind-react-native-classnames';
import { AppContext } from '../AppContext';

const LastConsumedScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const { setIsUserInfoFilled } = useContext(AppContext);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const handleNext = () => {
    setIsUserInfoFilled(true); // Set the user info as filled
    navigation.navigate('Summary', { lastConsumedDate: date });
  };

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
            source={{ uri: 'https://example.com/calendar-icon.png' }} // Replace with your image URL
            style={tw`w-24 h-24`}
          />
        </View>
        <Text style={tw`text-xl text-center mb-5`}>
          Quand avez-vous consommé la dernière fois ?
        </Text>
        <TouchableOpacity onPress={showDatepicker} style={tw`bg-gray-200 p-4 rounded-lg mb-5`}>
          <Text style={tw`text-blue-900 text-lg`}>
            {date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })} {date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
          </Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="datetime"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <TouchableOpacity
          style={tw`bg-red-600 p-4 rounded-lg`}
          onPress={handleNext}
        >
          <Text style={tw`text-white text-lg`}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LastConsumedScreen;
