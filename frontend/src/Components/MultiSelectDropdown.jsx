import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CheckCircleIcon, XCircleIcon } from 'react-native-heroicons/outline';

const MultiSelectDropdown = ({ data, selectedItems, onSelectItem, onRemoveItem }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (text) => {
    setQuery(text);
    setFilteredData(
      data.filter(item => item.toLowerCase().includes(text.toLowerCase()))
    );
  };

  return (
    <View className="w-full">
      <View className="flex-row flex-wrap p-2 border border-gray-300 rounded-lg mb-2">
        {selectedItems.map((item, index) => (
          <View key={index} className="flex-row items-center bg-gray-200 p-2 rounded-full mr-2 mb-2">
            <Text className="mr-2">{item}</Text>
            <TouchableOpacity onPress={() => onRemoveItem(item)}>
              <XCircleIcon name="x-circle" color="red" size={20} />
            </TouchableOpacity>
          </View>
        ))}
        <TextInput
          value={query}
          onChangeText={handleSearch}
          placeholder="Search"
          className="flex-1 text-lg"
        />
      </View>
      {query.length > 0 && (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="p-2 flex-row items-center border-b border-gray-200"
              onPress={() => {
                onSelectItem(item);
                setQuery('');
                setFilteredData(data);
              }}
            >
              <Text className="flex-1">{item}</Text>
              {selectedItems.includes(item) && (
                <CheckCircleIcon name="check-circle" color="green" size={20} />
              )}
            </TouchableOpacity>
          )}
          className="border border-gray-300 rounded-lg max-h-40"
        />
      )}
    </View>
  );
};

export default MultiSelectDropdown;
