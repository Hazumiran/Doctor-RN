import { View, Text } from 'react-native'
import React from 'react'
import { ChatItem, Header, InputChat } from '../../components'

const Chatting = ({navigation}:any) => {
  return (
    <View>
        <Header title='Nairobi Putri Hayza' type='dark' onPress={() => navigation.navigate('ChooseDoctor')}/>
        <Text>Senin, 21 Maret, 2020</Text>
        <ChatItem/>
        <ChatItem/>
        <ChatItem/>
        <InputChat/>
    </View>
  )
}

export default Chatting