import { StyleSheet, Text, TextStyle, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconDoctorActive, IconDoctorInactive, IconHospitalsActive, IconHospitalsInactive, IconMessagesActive, IconMessagesInactive } from '../../../assets'
import { fonts, theme } from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}:any) => {
    const Icon = () => {
        if(title === 'Doctor'){
            return active ? <IconDoctorActive/> : <IconDoctorInactive/>
        }else if(title === 'Messages'){
            return active ? <IconMessagesActive/> : <IconMessagesInactive/>
        }else if(title === 'Hospitals'){
            return active ? <IconHospitalsActive/> : <IconHospitalsInactive/>
        }
        return <IconDoctorInactive/>
    }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
      <Icon/>
      <Text style={getTextStyle(active)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default TabItem

const getTextStyle = (active: string) => ({
    fontSize: 10,
    color: active ? theme.text.menuActive : theme.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop:4 
  } as TextStyle);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        fontSize: 10,
        color: theme.text.menuInactive,
        fontFamily: fonts.primary[600],
        marginTop:4 
    }
})