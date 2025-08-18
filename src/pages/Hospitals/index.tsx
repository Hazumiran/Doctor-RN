import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IHospitalsBackground } from '../../assets'
import { colors, fonts } from '../../utils'
import { ListHospital } from '../../components'
import { DummyHospitals1, DummyHospitals2, DummyHospitals3 } from '../../assets'
const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={IHospitalsBackground} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital type='Rumah Sakit' name='Citra Bunga Merdeka' address='Jln. Surya Sejahtera 20' picture={DummyHospitals1}/>
        <ListHospital type='Rumah Sakit Anak' name='Happy Family & Kids' address='Jln. Surya Sejahtera 20' picture={DummyHospitals2}/>
        <ListHospital type='Rumah Sakit Jiwa' name='Tingkatan Paling Atas' address='Jln. Surya Sejahtera 20' picture={DummyHospitals3}/>
      </View>
    </View>
  )
}

export default Hospitals

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  background: {
    height: 240,
    paddingTop: 30
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    textAlign: 'center',    
    color: colors.white
  },
  desc:{
    fontSize: 14,
    fontFamily: fonts.primary[300],
    textAlign: 'center',
    color: colors.white,
    marginTop: 6,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 16
  }
})