

import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
// import { colors } from '../themes/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CustomTextInput = props => {
  const {
    placeholder,
    placeholderTextColor,
    onChange,
    value,
    keyboardType,
  } = props;
  return (
    <View>
  
        {value!=""?
        <Text style={{marginLeft:wp(6)}}>{placeholder}</Text>
:null}
  <View style={[styles.textInputView,props.inputstyle]}>
      <TextInput
      
        onChangeText={text => onChange(text)}
        value={value}
        keyboardType={keyboardType}
 style={[styles.textInputStyle,props.textstyles]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      
      />
    </View>
    </View>
  );
};


export default CustomTextInput;
const styles = StyleSheet.create({
  textInputView: {
    width: '90%',
    height: 50,
    paddingLeft: 2,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:10
  },
  textInputStyle: {
    width: '95%',
    // paddingLeft: 20,
    color: '#000',

},
});
