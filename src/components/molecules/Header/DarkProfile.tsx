import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors, fonts, theme } from '../../../utils'
import { Button } from '../../atoms'
import { DummyDoctor1 } from '../../../assets'

const DarkProfile = ({navigation}:any) => {
  return (
    <View style={styles.container}>
        <Button type='icon-only' icon='back-light' onPress={() => navigation.goBack()} title='Profile Chat'/>
        <View style={styles.content}>
            <Text style={styles.name}>Nairobi Putri Hayza</Text>
            <Text style={styles.desc}>Dokter Anak</Text>
        </View>
        <Image source={DummyDoctor1} style={styles.avatar}/>
    </View>
  )
}

export default DarkProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        paddingVertical: 33,
        paddingLeft: 20,
        paddingRight: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        flex: 1,
    },
    avatar: {
        width: 46,
        height: 46,
        marginLeft: 12,
    },
    name:{
        textAlign: 'center',
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
    },
    desc:{
        textAlign: 'center',
        fontSize: 14,
        fontFamily: fonts.primary[600],
        marginTop: 6,
        color: theme.text.SubTitle,
    },
})