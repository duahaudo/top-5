import {StyleSheet} from "react-native"
import Constants from 'expo-constants';

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: "pink"
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginBottom: 10
  },
  center: {
    flex: 1,
    backgroundColor: "red"
  },
  modal: {
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight
  },
  modalTitle: {
    justifyContent: 'center',
    alignItems: "center",
    height: 40,
    backgroundColor: "royalblue"
  },
  modalTitleText: {
    color: "#fff",
    fontSize: 26
  },
  modalBody: {
    padding: 20,
    // backgroundColor: "royalblue"
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  list: {
    // backgroundColor: "green"
  },
  closeModalBtn: {
    // backgroundColor: "blue"
  },
  groupBtns: {
    marginTop: 20,
    flexDirection: "row",
    alignContent: "stretch",
    justifyContent: "space-around"
  },
  noPaddingRight: {
    paddingRight: 0
  },
  noPaddingLeft: {
    paddingLeft: 0
  },
  saveBtnItem: {
    flex: 1,
    padding: 5
  },
  inputs: {
  },
  listItem: {
    height: 40,
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  listItem2: {
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    paddingLeft: 20
  },
  plusBtn: {
    backgroundColor: "royalblue",
    padding: 10,
    width: 60,
    height: 60,
    alignSelf: "center",
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: "center",
    position: "absolute",
    bottom: 10
  }
})

export default style;