import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { DummyUser } from '../../../assets'
import { fonts, theme } from '../../../utils'

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.avatar}/>
      <View>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
    </View>
  )
}

export default HomeProfile

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: theme.text.primary
  },
  profession: {
     fontSize: 12,
     fontFamily: fonts.primary[400],
     color: theme.text.secondary
  }
})