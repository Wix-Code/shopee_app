import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Categories from '../components/categories'
import JustForYou from '../components/justforyou'
import MostPopular from '../components/mostpopular'
import NewItems from '../components/newitems'
import TopProduct from '../components/topproduct'

export default function index() {
  return (
    <ScrollView contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <Categories />
      <TopProduct />
      <NewItems />
      <MostPopular />
      <JustForYou />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffffffff",
    padding: 20
  },
})