import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AllergenCheckbox = ({ label, checked, onChange }) => {
  return (
    <TouchableOpacity onPress={onChange} className="flex-row items-center mb-2">
      <MaterialCommunityIcons
        name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
        size={24}
        color={checked ? 'green' : 'gray'}
      />
      <Text className="ml-2 text-lg">{label}</Text>
    </TouchableOpacity>
  );
};

export default AllergenCheckbox;
