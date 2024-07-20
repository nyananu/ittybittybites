import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity, Button } from 'react-native';
import ingredientsList from '../data/ingredients.json';

import MultiSelectDropdown from '../Components/MultiSelectDropdown'

export default CreateScreen = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [babyAge, setBabyAge] = useState('');
  const [allergens, setAllergens] = useState('none');

  const handleSelectIngredient = (ingredient) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const handleRemoveIngredient = (ingredient) => {
    setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
  };

  const handleSubmit = () => {
    const requestData = {
      ingredients: selectedIngredients,
      babyAge,
      allergens,
    };
    fetchRecipe(requestData);
  };

  const fetchRecipe = async (data) => {
    const response = await fetch('/api/generateRecipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <SafeAreaView className="flex-1 p-4 justify-center">
      <Text className="text-lg mb-2">Select Ingredients</Text>
      <MultiSelectDropdown
        data={ingredientsList}
        selectedItems={selectedIngredients}
        onSelectItem={handleSelectIngredient}
        onRemoveItem={handleRemoveIngredient}
      />
      <Text className="text-lg mt-4 mb-2">Select Baby's Age</Text>
      <Picker
        selectedValue={babyAge}
        onValueChange={(itemValue) => setBabyAge(itemValue)}
        className="border-b border-gray-300 mb-4"
      >
        <Picker.Item label="6 months +" value="6" />
        <Picker.Item label="12 months +" value="12" />
        <Picker.Item label="18 months +" value="18" />
        <Picker.Item label="24 months +" value="24" />
        <Picker.Item label="3 years +" value="3" />
        <Picker.Item label="4 years +" value="4" />
      </Picker>
      <Text className="text-lg mt-4 mb-2">Select Allergens</Text>
      <Button title="Generate Recipe" onPress={handleSubmit} />
    </SafeAreaView>
  )
}