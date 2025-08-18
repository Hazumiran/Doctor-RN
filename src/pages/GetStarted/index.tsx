import { Alert, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILGetStarted, ILLogo } from '../../assets'
import { Button, Gap } from '../../components'
import { colors, fonts } from '../../utils'

const GetStarted = ({navigation}:any) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
        <View>
            <ILLogo/>
            <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
        </View>
        <View>
            <Button type='primary' title={'Get Started'} onPress={() => navigation.navigate('Register')} icon=''/>
            <Gap height={16} width={0}/>            
            <Button type='secondary' title={'Sign In'} onPress={() => navigation.navigate('Login')} icon=''/>
        </View>
    </ImageBackground>
  )
}

export default GetStarted

const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: colors.white
    },
    title: {
        fontSize: 28,
        color: colors.white,
        marginTop: 91,
        fontFamily: fonts.primary[600],
    }
})