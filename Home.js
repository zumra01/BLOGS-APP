import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Search from './Search';
import Style from './Style';
import Card from './Card';

const Home = ({ navigation }) => {

  const [state, setState] = useState(true);

  const toggleTheCard = () => {
    setState(!state);
  };

 
const data = [{
  title: "AUSTRALIA",
  id: 1,
  sub: "some details",

  imageurl: 'https://www.holidify.com/images/bgImages/SYDNEY.jpg',
  details: "Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands",
},
{
  title: "PARIS",
  id: 2,
  sub: "some details",
  imageurl: 'https://tourscanner.com/blog/wp-content/uploads/2018/01/montparnasse.jpg',
  details: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg",

},
{
  title: "DUBAI",
  id: 3,
  sub: "some details",
  imageurl: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTnavcE0R1cW9vbZSJU9A_92W41dYEqmnQRVz51osw9lq-dYLXMRz2uqIIL1LrWzvQN',
  details: " Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.",

},
{
  title: "BARCELONA",
  id: 4,
  sub: "some details",

  imageurl: 'https://travel.usnews.com/dims4/USNEWS/d14f91c/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FParc_Guell_Gatsi_Getty_BLYJIGo.jpg',
  details: "Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city. Museu Picasso and Fundació Joan Miró feature modern art by their namesakes. City history museum MUHBA, includes several Roman archaeological sites."

},
{
  title: "ROME",
  id: 5,
  sub: "some details",
  imageurl: 'http://t1.gstatic.com/images?q=tbn:ANd9GcSvyEpl5vLmuNY2O1K45jdQVnZT6p0SbanoVCeGaaecCmD-hf4PspBZZT2JuK3AfOJwDkxS',
  details: " Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome Capital, and a special comune named Comune di Roma",

},
{
  title: "ISTANBUL",
  id: 6,
  sub: "some details",
  imageurl: 'https://www.celebritycruises.com/blog/content/uploads/2021/01/places-to-visit-in-istanbul-hero-1920x890.jpg',
  details: "Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here. In the Sultanahmet district, the open-air, Roman-era Hippodrome was for centuries the site of chariot races, and Egyptian obelisks also remain. The iconic Byzantine Hagia Sophia features a soaring 6th-century dome and",

}
]


  return (
    <View style={styles.container}>
      <ScrollView>
        <Search toggleTheCard={toggleTheCard} />
        <FlatList
          numColumns={state ? 1 : 2}
          key={state ? 'normal' : 'columns'}
          keyExtractor={(item) => item.id.toString()}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Blog', { item })}>
              <Card item={item} state={state} />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default Home;
export const HomeScreenOptions = {
  headerShown: false,
};

