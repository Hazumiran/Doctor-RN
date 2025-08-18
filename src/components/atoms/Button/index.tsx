import { StyleSheet, Text, View, TextStyle, TouchableOpacity } from 'react-native'
import React from 'react'
import { theme } from '../../../utils';
import IconOnly from './iconOnly';

interface ButtonProps {
    type: string;
    title: string;
    onPress?: () => void;
    icon: string;
}

const Button = ({type, title, onPress, icon}:ButtonProps) => {
  if(type === "icon-only"){
    return (
      <IconOnly onPress={onPress} icon={icon}/>
    )
  }
  return (
      <TouchableOpacity style={getContainerStyle(type)} onPress={onPress}>
        <Text style={getTextStyle(type)}>{title}</Text>
      </TouchableOpacity>
  )
}

export default Button

const getContainerStyle = (type: string) => ({
    backgroundColor: type === 'secondary' ? theme.button.secondary.background : theme.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
});

const getTextStyle = (type: string) => ({
    fontSize: 18,
    fontWeight: 'bold',
    // fontFamily: fonts.primary[600],
    color: type === 'secondary' ? theme.button.secondary.text : theme.button.primary.text,
    textAlign: 'center'
  } as TextStyle);

const styles = StyleSheet.create({})