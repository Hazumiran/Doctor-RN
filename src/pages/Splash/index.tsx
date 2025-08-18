import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { ILLogo } from '../../assets'
import { colors, fonts, theme } from '../../utils'

const Splash = ({navigation}:any) =>{
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted')
    }, 1000);
  }, [navigation])

  return (
    <View style={styles.page}>
      <ILLogo/>
      <Text style={styles.title}>Welcome</Text>
    </View>
  )
}

export default Splash;

const styles = StyleSheet.create({
  page:{
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: theme.text.primary,
    marginTop: 20
  }
})