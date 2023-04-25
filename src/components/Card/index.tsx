import React from 'react';
import { Text, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Trash from '../../assets/images/trash.svg';

import styles from './styles';

interface Props{
  name: string;
  check: boolean;
}

export default function Card({name,check}:Props) {
  return (
    <View style={styles.container}>
        <BouncyCheckbox
          size={25}
          fillColor="#5E60CE"
          iconStyle={{ borderColor: "#4EA8DE" }}
          innerIconStyle={{ borderWidth: 2 }}
          onPress={(isChecked: boolean) => { }}
          isChecked={check}
          text={name}
          style={{
            flex: 1, 
            flexDirection: 'row'
          }}
        />
        <Trash style={styles.icon}/>
    </View>
  );
}