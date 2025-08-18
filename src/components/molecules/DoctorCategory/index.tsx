import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICategoryDokterAnak, ICategoryDokterUmum, ICategoryObat, ICategoryPsikiater } from '../../../assets'
import { fonts, theme } from '../../../utils'

const DoctorCategory = ({category, onPress}:any) => {
  const Icon = () => {
    if(category === 'Dokter Umum'){
      return <ICategoryDokterUmum style={styles.illustration}/>
    }
    if(category === 'Dokter Psikiater'){
      return <ICategoryPsikiater style={styles.illustration}/>
    }
    if(category === 'Bbat'){
      return <ICategoryObat style={styles.illustration}/>
    }
    if(category === 'Dokter Anak'){
      return <ICategoryDokterAnak style={styles.illustration}/>
    }
      return <ICategoryDokterUmum style={styles.illustration}/>
    
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon/>
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  )
}

export default DoctorCategory

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: theme.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 105,
    height: 135
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: theme.text.primary
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: theme.text.primary
  }
})