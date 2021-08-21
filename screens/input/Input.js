import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Row from '../../helper/Row';
import Col from '../../helper/Col';
import FormInput from '../../helper/TextInput';
import CustomButton from '../../helper/CustomButton';

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

const initialValues = {
  reason: '',
};

const validationSchema = Yup.object().shape({
  reason: Yup.string().required('Reason is required'),
});

export default function Input(props) {
  const [loading, setLoading] = useState(false);
  const formikprops = useFormik({
    enableReinitialize: true,
    initialValues: {...initialValues},
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      saveHandler(values, () => {
        actions.resetForm();
      });
    },
  });
  const saveHandler = (values, cb) => {
    console.log('values', values);
  };
  return (
    <SafeAreaView>
      <View>
        <Text style={styles?.welcomeText}>Input</Text>
        <Row colGap={5}>
          <Col width="50%">
            <FormInput
              inputStyle={{paddingVertical: 2}}
              name="reason"
              label="Reason"
              placeholder="Enter Reason"
              formikProps={formikprops}
            />
          </Col>
        </Row>
        <CustomButton
          onPress={formikprops.handleSubmit}
          isLoading={loading}
          style={{marginTop: 10, marginBottom: 5}}
          btnTxt="Save"
        />
        <Button
          style={{margin: 15}}
          color="teal"
          title="About"
          onPress={() => {
            props?.navigation?.navigate('About');
          }}
        />
      </View>
    </SafeAreaView>
  );
}
