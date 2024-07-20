import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TouchableOpacity } from 'react-native';
import ingredientsList from '../data/ingredients.json';
import allergensList from '../data/allergens.json';

import MultiSelectDropdown from '../Components/MultiSelectDropdown';
import AllergenCheckbox from '../Components/AllergenCheckbox';

const CreateScreen = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [babyAge, setBabyAge] = useState('');
  const [selectedAllergens, setSelectedAllergens] = useState([]);

  const handleSelectIngredient = (ingredient) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const handleRemoveIngredient = (ingredient) => {
    setSelectedIngredients(selectedIngredients.filter((item) => item !== ingredient));
  };

  const handleAllergenChange = (allergen) => {
    if (selectedAllergens.includes(allergen)) {
      setSelectedAllergens(selectedAllergens.filter((item) => item !== allergen));
    } else {
      setSelectedAllergens([...selectedAllergens, allergen]);
    }
  };

  const handleSubmit = () => {
    const requestData = {
      ingredients: selectedIngredients,
      babyAge,
      allergens: selectedAllergens,
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

  const babyAges = [
    { label: '6 months +', value: '6' },
    { label: '12 months +', value: '12' },
    { label: '18 months +', value: '18' },
    { label: '24 months +', value: '24' },
    { label: '3 years +', value: '3' },
    { label: '4 years +', value: '4' },
  ];

  return (
    <SafeAreaView className="flex-1 p-4">
      {/* Ingredients Selection */}
      <Text className="text-lg mb-2">Select Ingredients</Text>
      <MultiSelectDropdown
        data={ingredientsList}
        selectedItems={selectedIngredients}
        onSelectItem={handleSelectIngredient}
        onRemoveItem={handleRemoveIngredient}
      />

      {/* Baby Age Selection */}
      <Text className="text-lg mt-4 mb-2">Select Baby's Age</Text>
      <View className="flex-row flex-wrap mb-4">
        {babyAges.map((age) => (
          <TouchableOpacity
            key={age.value}
            onPress={() => setBabyAge(age.value)}
            className={`px-4 py-2 m-1 rounded ${babyAge === age.value ? 'bg-blue-500' : 'bg-gray-300'}`}
          >
            <Text className="text-white">{age.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Allergens Selection */}
      <Text className="text-lg mt-4 mb-2">Select Allergens</Text>
      <View className="flex-row flex-wrap mb-4">
        {allergensList.map((allergen) => (
          <View key={allergen} className="w-1/2 p-2">
            <AllergenCheckbox
              label={allergen}
              checked={selectedAllergens.includes(allergen)}
              onChange={() => handleAllergenChange(allergen)}
            />
          </View>
        ))}
      </View>

      {/* Send to GPT */}
      <Button title="Generate Recipe" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default CreateScreen;
