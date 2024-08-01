import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const Search = ({toggleTheCard}) => {
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleFilterModal = () => {
    setIsFilterModalVisible(!isFilterModalVisible);
  };

  const handleSearch = () => {
    // Implement your search functionality here
    console.log('Searching for:', searchText);
  };


  return (
    <View>
      <Text style={{ marginTop: 20, fontWeight: '700', fontSize: 27 }}> BLOGS </Text>
      <SearchBar
        placeholder="What do you want to say?"
        containerStyle={{
          backgroundColor: 'transparent',
          borderBottomColor: 'transparent',
          borderTopColor: 'transparent',
          paddingHorizontal: 0, // Remove horizontal padding
          paddingRight: 5, // Add right padding to accommodate filter icon
        }}
        inputContainerStyle={{ backgroundColor: '#e3e3e3', borderRadius: 5 }}
        searchIcon={false}
        onFocus={handleSearch}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={toggleFilterModal} style={{ marginLeft: 10, marginRight: 10, flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="filter" size={24} color="black" />
          <Text style={{ marginLeft: 5 }}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="arrow-up" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="arrow-down" size={24} color="black" />
          <Text style={{ marginLeft: 5 }}>High to Low Price</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 40, marginright: 10, flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons onPress={toggleTheCard} name="grid" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* Filter Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isFilterModalVisible}
        onRequestClose={toggleFilterModal}
      >
        <View style={{  flex:1,justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: '#fff', padding: 20 }}>
            <Text style={{ fontWeight: '700', fontSize: 20, marginBottom: 10 ,textAlign:'center'}}>Sort By</Text>
            {/* Add your filter options here */}
            <TouchableOpacity>
              <Text style={{fontWeight: '400', fontSize:20,marginBottom: 10,textAlign:'center'}}>Sort By A to Z</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{fontWeight: '400', fontSize:20,marginBottom: 10,textAlign:'center'}}>Sort By Z to A</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleFilterModal} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 10 }}>
              <Text style={{ color: '#fff', textAlign: 'center' }}>Apply Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Search;
