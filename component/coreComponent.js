import React from 'react';
import { View, Text, Image, FlatList, Alert, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listGroup: {
        flexDirection: 'row',
        flex: 100,
        marginBottom: 10
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
    itemText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});
export default function CoreComponent() {
    const countryData = [
        { id: '1', country: 'Bangladesh', city: 'Dhaka', img: 'https://assetsds.cdnedge.bluemix.net/sites/default/files/styles/very_big_1/public/feature/images/dhaka-1_0.jpg?itok=YaE3hVhk' },
        { id: '2', country: 'Pakistan', city: 'Islamabad', img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Faisal_Masjid_From_Damn_e_koh.jpg' },
        { id: '3', country: 'Turkey', city: 'Ankara', img: 'http://efpt.eu/exchange/wp-content/uploads/2019/09/Gay-Ankara-3-1016x675.jpg' },
        { id: '4', country: 'Iran', city: 'Tehran', img: 'https://images.adsttc.com/media/images/5be0/29f1/08a5/e5e9/7500/0035/newsletter/14163864445_3772cbdf70_k.jpg?1541417450' },
        { id: '5', country: 'Egypt', city: 'Cairo', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/9b/2f/5b/cairo.jpg?w=1000&h=-1&s=1' },
    ];
    const onPressHandler = (title) => {
        Alert?.alert(title);
    };
    const SingleCountry = ({ item }) => {
        return (
            <View style={styles?.listGroup}>
                <View style={styles?.imageView}>
                    <Image style={{ width: '100%', height: 100 }} source={{ uri: item?.img }} />
                </View>
                <View style={styles?.parentText}>
                    <Text style={styles?.itemText} onPress={onPressHandler.bind(item,item?.country)}>{item?.country}</Text>
                    <Text style={styles?.itemText}>{item?.city}</Text>
                </View>
            </View>
        );
    }
    return (
        <View>
            <FlatList
                data={countryData}
                renderItem={({ item }) => <SingleCountry item={item} />}
                keyExtractor={item => item?.id}
            ></FlatList>
        </View>
    );
}
