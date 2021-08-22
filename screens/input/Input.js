import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Row from '../../helper/Row';
import Col from '../../helper/Col';
import FormInput from '../../helper/TextInput';
import CustomButton from '../../helper/CustomButton';
import IDatePicker from '../../helper/IDatePicker';
import {_todayDate} from '../../functions/_todayDate';
import ICustomPicker from '../../helper/ICustomPicker';
import IRadioButton from './../../helper/IRadioButton';
import ICheckbox from './../../helper/ICheckbox';

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
  formContent: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: transparent,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 23,
  },
});

const initialValues = {
  reason: '',
  fromDate: _todayDate(),
  gender: '',
  isCooler: false,
};

const validationSchema = Yup.object().shape({
  reason: Yup.string().required('Reason is required'),
  gender: Yup.string().required('Gender is required'),
  isCooler: Yup.bool().required('Is Coller is required'),
  country: Yup.object().shape({
    label: Yup.string().required('Country is required'),
    value: Yup.string().required('Country is required'),
  }),
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
    console.log('Values', JSON.stringify(values, null, 2));
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
          <Col width="50%">
            <IDatePicker
              label="From Date"
              name="fromDate"
              formikProps={formikprops}
            />
          </Col>
          <Col width="50%">
            <ICustomPicker
              label="Country Name"
              name="country"
              options={[
                {value: 1, label: 'Bangladesh'},
                {value: 2, label: 'Pakistan'},
                {value: 3, label: 'Srilanka'},
              ]}
              formikProps={formikprops}
              // disabled={!location?.latitude}
              onChange={(selectedOption) => {
                formikprops.setFieldValue('country', selectedOption);
              }}
            />
          </Col>
          <Col width="50%">
            <View style={styles.formContent}>
              <Text style={{marginHorizontal: 10}}>Male</Text>
              <IRadioButton
                onPress={() => {
                  formikprops.setFieldValue('gender', 'Male');
                }}
                selected={formikprops?.values?.gender === 'Male'}
              />

              <Text style={{marginHorizontal: 10}}>Female</Text>
              <IRadioButton
                onPress={() => {
                  formikprops.setFieldValue('gender', 'female');
                }}
                selected={formikprops?.values?.gender === 'female'}
              />
            </View>
          </Col>
          <Col width="50%">
            <View
              style={[
                {
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginVertical: 10,
                },
              ]}>
              <ICheckbox
                checked={formikprops?.values?.isCooler}
                onPress={(e) => {
                  formikprops?.setFieldValue(
                    'isCooler',
                    !formikprops?.values?.isCooler,
                  );
                }}
              />
              <Text>Is Coller</Text>
            </View>
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
