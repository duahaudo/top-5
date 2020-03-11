import {StyleSheet} from "react-native"
import {iconBtnStyle} from "../controls/button"

const style = StyleSheet.create({
  camera: {
    flex: 1
  },
  cameraModal: {
    flex: 1,
    backgroundColor: "red",
    position: "relative",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  picturesWrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "red"
  },
  pictureBox: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    // backgroundColor: "lightblue",
    flexDirection: "row",
    opacity: 0.8
  },
  picture: {
    width: 40,
    height: 40,
    padding: 4
  },
  pictureName: {
    color: 'darkblue',
    alignSelf: "center",
    marginLeft: 20
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    // backgroundColor: "white"
  },
  cameraButton: {
    ...iconBtnStyle,
    backgroundColor: "royalblue"
  },
  backButton: {
    ...iconBtnStyle,
    backgroundColor: "royalblue",
    transform: [
      { rotateY: '180deg' }
    ]
  },
  deleteButton: {
    ...iconBtnStyle,
    backgroundColor: "red"
  },
  viewPicWrapper: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "darkgrey",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1,
    padding: 10
  }, 
  pictureLarge: {
    flex: 1,
    backgroundColor: "red"
  },
  pictureViewPort: {
    flex: 1, 
    opacity: 1
  }
})

export default style;