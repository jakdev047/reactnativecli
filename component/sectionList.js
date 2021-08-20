import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  SectionList,
  Alert,
} from 'react-native';

const styles = StyleSheet.create({
  listGroup: {
    flexDirection: 'row',
    flex: 100,
    marginBottom: 10,
  },
  listGroupHorizontal: {
    flexDirection: 'column',
    marginBottom: 10,
    width: 180,
    height: 250,
    padding: 5,
  },
  imageView: {
    flex: 30,
  },
  parentText: {
    padding: 10,
    margin: 5,
    backgroundColor: '#ddd',
    flex: 70,
  },
  parentTextHorizontal: {
    padding: 10,
    backgroundColor: '#ddd',
  },
  itemText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
export default function SectionListComponent() {
  const cityData = [
    {
      id: '1',
      title: 'Bangladesh',
      data: ['Dhaka', 'Rangpur', 'Chittagong', 'Khulna', 'Rajshahi'],
    },
    {
      id: '2',
      title: 'India',
      data: ['West Bengal', 'Asam', 'Bihar', 'Tripura', 'Mizorampur'],
    },
    {
      id: '3',
      title: 'Pakistan',
      data: ['Lahore', 'Faisalabad', 'Islamabad', 'Karachi', 'Panjab'],
    },
  ];
  const textHandler = (childName) => {
    Alert?.alert(childName);
  };
  const ItemChild = ({item}) => {
    return (
      <View style={{marginBottom: 10, paddingLeft: 15}}>
        <Text
          style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}
          onPress={() => textHandler(item)}>
          {item}
        </Text>
      </View>
    );
  };
  const ItemHeadChild = ({headChild}) => {
    return (
      <View
        style={{
          width: '100%',
          backgroundColor: 'blue',
          padding: 15,
          marginBottom: 15,
        }}>
        <Text
          style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}
          onPress={() => textHandler(headChild)}>
          {headChild}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <SectionList
        inverted={-1}
        stickySectionHeadersEnabled={true}
        sections={cityData}
        renderItem={({item}) => <ItemChild item={item} />}
        renderSectionHeader={({section: {title}}) => (
          <ItemHeadChild headChild={title} />
        )}
        keyExtractor={(item, index) => item + index}
      />
      <View style={{height: 30}}></View>
    </SafeAreaView>
  );
}
