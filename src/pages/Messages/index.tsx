import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ListDoctor from '../../components/molecules/ListDoctor'
import { colors, fonts, theme } from '../../utils'
import { DummyDoctor1, DummyDoctor2, DummyDoctor3 } from '../../assets'

const Messages = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      profile: DummyDoctor1,
      name: 'Dr. M. Farhan',
      desc: 'Testing'
    },
    {
      id: 2,
      profile: DummyDoctor2,
      name: 'Dr. M. Farhan',
      desc: 'Testing'
    },
    {
      id: 3,
      profile: DummyDoctor3,
      name: 'Dr. M. Farhan',
      desc: 'Doctor 3'
    }
  ])
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map(doctor => {
          return (
            <ListDoctor
              key={doctor.id}
              profile={doctor.profile}
              name={doctor.name}
              desc={doctor.desc}
            />
          )
        })}        
      </View>
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  content: {
    flex: 1, 
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: theme.text.primary,
    marginTop: 30,
    marginLeft: 16,
  }
})