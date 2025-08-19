import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ChatItem, Header, InputChat } from '../../components'
import { fonts, theme } from '../../utils'

const Chatting = ({navigation}:any) => {
  return (
    <View>
        <Header title='Nairobi Putri Hayza' type='dark-profile' onPress={() => navigation.navigate('ChooseDoctor')}/>
        <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
        <ChatItem/>
        <ChatItem/>
        <ChatItem/>
        <InputChat/>
    </View>
  )
}

const styles = StyleSheet.create({
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary[600],
    color: theme.text.secondary,
    marginVertical: 20,
    alignSelf: 'center',
  }
});

export default Chatting