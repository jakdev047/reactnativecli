import React, {useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import {changeIdAction, getDataAction} from '../../testSlice/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

export default function ReduxPage(props) {
  const {id} = useSelector((state) => {
    return state?.test;
  }, shallowEqual);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataAction(5));
  }, []);
  return (
    <SafeAreaView>
      <View>
        <Text style={styles?.welcomeText}>Redux</Text>
        <Button
          color="#841584"
          title="Change Id"
          onPress={() => dispatch(changeIdAction(id + 5))}
        />
        <Text style={{fontSize: 25, textAlign: 'center'}}>{id}</Text>
        <View>
          <Button
            style={{margin: 15}}
            color="teal"
            title="About"
            onPress={() => {
              props?.navigation?.navigate('About');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
