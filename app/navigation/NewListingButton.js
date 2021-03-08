import React from 'react';
import { View, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import { color } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';

function NewListingButton({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <MaterialCommunityIcons name="plus-circle" size={40} color="white"/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
      height:80,
      width:80,
      bottom:35,
      backgroundColor:colors.primary,
      borderColor:colors.white,
      borderRadius:50,
      borderWidth:10,
      alignItems:'center',
      justifyContent:'center',
  }
});

export default NewListingButton;