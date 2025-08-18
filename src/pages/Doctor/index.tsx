import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DoctorCategory, Gap, HomeProfile, RatedDoctor } from '../../components'
import NewsItem from '../../components/molecules/NewsItem'
import { colors, fonts, theme } from '../../utils'
import { JSONCategoryDoctor } from '../../assets'

const Doctor = ({navigation}:any) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap width={0} height={30}/>
            <HomeProfile/>
            <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
          </View>
          <View style={styles.wrapperStyles}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} height={0}/>
                {
                  JSONCategoryDoctor.data.map((item, index) => {
                    return <DoctorCategory category={item.category} key={index} onPress={() => navigation.navigate('ChooseDoctor')} />
                  })
                }
                <Gap width={22} height={0}/>
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctor/>
            <RatedDoctor/>
            <RatedDoctor/>
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem/>
          <NewsItem/>
          <NewsItem/>
        </ScrollView>
      </View>
    </View>
  )
}

export default Doctor

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  content: {
    flex: 1,    
    // paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: theme.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  category: {
    flexDirection : 'row',
  },
  wrapperStyles: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: theme.text.primary,
    marginVertical: 20,
  }
})