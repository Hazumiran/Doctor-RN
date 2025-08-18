import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts, theme } from '../../../utils'

const ListDoctor = ({profile, name, desc}:any) => {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.avatar}/>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  )
}

export default ListDoctor

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: theme.border,
        alignItems: 'center'
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: 12,
    },
    name: {
        fontSize: 16,
        fontFamily: fonts .primary[400],
        color: theme.text.primary
    },
    desc: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: theme.text.secondary
    }
})