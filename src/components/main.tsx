import React from 'react';
import { Provider, useSelector } from "react-redux";
import { StyleSheet, View, SafeAreaView, StatusBar, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';
import { IStoreState } from "../duck/type"

import store from "../duck/store"

import Header from "./header";
import Body from "./routers";
import Footer from "./footer";
import style from './header/style';

const MainView = () => {
  const showLoadingIndicator: boolean = useSelector(({ reducer }: IStoreState) => reducer.showLoadingIndicator)

  let viewStyle = { ...styles.body }
  if (showLoadingIndicator) {
    viewStyle = { ...styles.body, ...styles.opacityHalf }
  }
  return (
    <SafeAreaView style={styles.container}>
      {showLoadingIndicator && <View style={styles.loadingIndicator}>
        <ActivityIndicator size="large" color="#FFA500" />
      </View>}

      <View style={viewStyle}>
        <StatusBar barStyle="light-content" />

        <View style={styles.header}>
          <Header />
        </View>

        <View style={styles.body}>
          <Body />
        </View>

        {/* <View style={styles.footer}>
          <Footer />
        </View> */}
      </View>
    </SafeAreaView>
  )
}

export default () => (
  <Provider store={store}>
    <MainView />
  </Provider>
)

const styles = StyleSheet.create({
  header: {
    height: 40
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  opacityHalf: {
    opacity: 0.5
  },
  container: {
    flex: 1,
    backgroundColor: "#FFA500"
  },
  footer: {
    height: 50
  },
  loadingIndicator: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    alignSelf: "center",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#000",
    opacity: 0.7
  }
});
