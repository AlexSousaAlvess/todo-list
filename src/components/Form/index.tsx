import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Plus from '../../assets/images/plus.svg';

import styles from './styles';

interface Props {
  placeholder: string;
  handleTask: (text:string) => void;
}

export default function Form({placeholder, handleTask}:Props){
  const [borderBoxColor, setBorderBoxColor] = useState('#0D0D0D')
  const [textTask, setTextTask] = useState('');

  function handleOnFocus(e:any) {
    setBorderBoxColor('#5E60CE');
  };
  
  function handleOnBlur(e:any) {
    setBorderBoxColor('#0D0D0D');
  };

  return(
    <View style={styles.container}>
      <TextInput 
        style={[styles.input, {borderColor:borderBoxColor, borderWidth:1}]} 
        placeholder={placeholder}
        placeholderTextColor='#808080'
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        onChangeText={setTextTask}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={()=>handleTask(textTask)}
      >
        <Plus/>
      </TouchableOpacity>
    </View>
  );
}