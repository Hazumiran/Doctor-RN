import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Header, ListDoctor} from '../../components/molecules/'
import { DummyDoctor1 } from '../../assets'

const ChooseDoctor = ({navigation}:any) => {
  return (
    <View>
      <Header title='Pilih Dokter' type='dark' onPress={() => navigation.goBack()}/>
      <ListDoctor type="next" profile={DummyDoctor1} name='Dr. M. Farhan' desc='Spesialis Anak' onPress={() => navigation.navigate('Chatting')}/>
      <ListDoctor type="next" profile={DummyDoctor1} name='Dr. M. Farhan' desc='Spesialis Anak'/>
      <ListDoctor type="next" profile={DummyDoctor1} name='Dr. M. Farhan' desc='Spesialis Anak'/>
      <ListDoctor type="next" profile={DummyDoctor1} name='Dr. M. Farhan' desc='Spesialis Anak'/>
      <ListDoctor type="next" profile={DummyDoctor1} name='Dr. M. Farhan' desc='Spesialis Anak'/>
      <ListDoctor type="next" profile={DummyDoctor1} name='Dr. M. Farhan' desc='Spesialis Anak'/>
    </View>
  )
}

export default ChooseDoctor

const styles = StyleSheet.create({})