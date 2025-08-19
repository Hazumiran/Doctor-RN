import { StyleSheet, Text, View, ViewStyle, TextStyle} from 'react-native'
import React from 'react'
import { Button, Gap } from '../../atoms'
import { colors, fonts, theme } from '../../../utils'
import DarkProfile from './DarkProfile';

interface HeaderProps {  
  type: 'dark' | 'light' | 'dark-profile';
  title: string;
  onPress?: () => void;
}


const Header = ({onPress, title, type}:HeaderProps) => {
  if (type === 'dark-profile') {
    return <DarkProfile />;
  }
  return (
    <View style={styles.container(type)}>
      <Button type='icon-only' icon={type === 'dark' ? 'back-light' : 'back-dark'} title='a' onPress={onPress}/>
      <Text style={styles.text(type)}>{title}</Text>
      <Gap height={0} width={24}/>
    </View>
  )
}

export default Header

const styles = {
  container: (type: 'dark' | 'light'): ViewStyle => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: 'row' as const,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    alignItems: 'center' as const,
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0
  }),

  text: (type: 'dark' | 'light'): TextStyle => ({
    textAlign: 'center' as const,
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: type === 'dark' ? colors.white : theme.text.primary,
  }),
};