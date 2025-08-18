import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconBackDark, IconBackLight } from '../../../assets';

interface IconProps {
    icon: string;
    onPress?: () => void
}

const iconOnly = ({onPress, icon}:IconProps) => {
    const Icon = () => {
        if(icon === 'back-dark'){
            return <IconBackDark/>
        }
        if(icon === 'back-light'){
            return <IconBackLight/>
        }
        return <IconBackDark/>
    }
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon/>
    </TouchableOpacity>
  )
}

export default iconOnly

const styles = StyleSheet.create({})