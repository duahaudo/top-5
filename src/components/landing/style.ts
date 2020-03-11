import {StyleSheet} from "react-native"
import Constants from 'expo-constants';

const style = StyleSheet.create({
  landing: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 50
  },
  text: {
    alignItems: "center",
    marginBottom: 10,
    fontSize: 30
  },
  contentBox: {
    flex: 0.75   
  },
  line: {
    padding: 0
  },
  textbox: {
    borderWidth: 0,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1
  }
})

export default style;