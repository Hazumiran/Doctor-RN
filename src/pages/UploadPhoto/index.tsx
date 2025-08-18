import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, Link } from '../../components'
import { IconAddPhoto, INullPhoto } from '../../assets'
import { colors, fonts, theme } from '../../utils'

const UploadPhoto = ({navigation}:any) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title='Upload Photo'/>
      <View style={styles.content}>
        <View style={styles.profile}>
            <View style={styles.avatarWrapper}>
                <Image source={INullPhoto} style={styles.avatar}/>
                <IconAddPhoto style={styles.addPhoto}/>
            </View>  
            <Text style={styles.name}>Shayna Melinda</Text>
            <Text style={styles.profession}>Product Designer</Text>
        </View>
        <View>
            <Button type='primary' title={'Upload and Continue'} onPress={() => {}} icon=''/>
                <Gap height={30} width={0}/>  
            <Link title='Skip for this' size={16} align='center'/>
        </View>
      </View>
    </View>
  )
} 

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,        
    },
    content: {
        flex: 1,
        paddingHorizontal: 40,
        paddingBottom: 64,
        justifyContent: 'space-between'
    },
    profile: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 110,
        height: 110,
    },
    avatarWrapper:{
        borderWidth: 1,
        width: 130,
        height: 130,
        borderColor: theme.border,
        borderRadius: 130/2,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        fontFamily: fonts.primary[600],
        color: theme.text.primary,
        textAlign: 'center'
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: theme.text.secondary,
        textAlign: 'center',
        marginTop: 4
    }
})