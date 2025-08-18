import { Text, TextStyle, TouchableOpacity } from 'react-native'
import React from 'react'
import { fonts, theme } from '../../../utils'

interface LinkProps {
    title?: string,
    size: number,
    align: string
}
const Link = ({title, size, align}:LinkProps) => {
  return (
    <TouchableOpacity>
      <Text style={getLinkStyle({size, align})}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Link

const getLinkStyle = ({size, align}:LinkProps) => ({
    fontSize: size,
    color: theme.text.secondary,
    fontFamily: fonts.primary[400],
    textDecorationLine: 'underline',
    textAlign: align
}as TextStyle);
