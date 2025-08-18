import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Header, Input, Button, Gap } from '../../components'
import { colors } from '../../utils'

const Register = ({navigation}:any) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title='Daftar Akun'/>
      <View style={styles.content}>        
        <Input label='Full Name'/>
        <Gap height={24} width={0}/>
        <Input label='Work'/>
        <Gap height={24} width={0}/>
        <Input label='Email Address'/>
        <Gap height={24} width={0}/>
        <Input label='Password'/>
        <Gap height={40} width={0}/>
        <Button type='primary' title={'Continue'} onPress={() => navigation.navigate('UploadPhoto')} icon=''/>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  },
  content: {    
    padding: 40,
    paddingTop: 0,
    backgroundColor: colors.white
  }
})