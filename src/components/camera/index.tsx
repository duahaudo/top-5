import React, { useState, useEffect, useCallback, useMemo } from "react"
import { View, Image, TouchableOpacity, FlatList, Share } from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { IStoreState, IPicture } from "../../duck/type"
import { savePicture, initData, deletePicture } from "../../duck/action"
import { StiModal } from "../controls/other"
import { StiTxt } from "../controls/input"
import style from "./style"
import * as ImagePicker from 'expo-image-picker';
import moment from "moment"

import { StiIconFontAwesome5, StiIconMaterialIcon, StiIconEntypo } from '../controls/icon';
import Camera from "../controls/camera"

interface IProps {
  pictures: IPicture[],
  loaded: boolean
}

export default () => {
  const dispatch = useDispatch();
  const props: IProps = useSelector(({ reducer }: IStoreState) => {
    const { pictures, loaded } = reducer;
    return {
      pictures, loaded
    }
  })

  const [showCamera, setShowCamera] = useState<boolean>(false);
  const [selectedPic, setSelectedPic] = useState<IPicture>();

  const getPhotoLibrary = useCallback(async () => {
    let {cancelled, base64} = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: true
      // aspect: [4, 3]
    });
    if (cancelled) {
      return base64
    }

    return null
  }, [])

  useEffect(() => {
    dispatch(initData())
  }, [props.loaded])

  const takePictures = () => {
    setShowCamera(true)
  }

  const getTimeStamps = (fileId: string): string => {
    const timestamps = Number(fileId.replace(/^\D+/g, ''))
    return moment(timestamps).format("MM-DD-YYYY HH:mm")
  }

  const onSharedHandler = async (base64: string) => {
    try {
      const result = await Share.share({
        message: base64
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <View style={style.camera}>
      <StiModal show={showCamera}>
        <View style={style.cameraModal}>
          <Camera cameraOffHandler={() => setShowCamera(false)} shutter={(base64: string) => dispatch(savePicture(base64))} />
        </View>
      </StiModal>

      <View style={style.picturesWrapper}>
        <FlatList
          data={props.pictures}
          renderItem={({ item }) => (<TouchableOpacity style={style.pictureBox} onPress={() => setSelectedPic(item)}>
            <Image style={style.picture} source={{ uri: `data:image/png;base64,${item.base64}` }} />
            <StiTxt style={style.pictureName}>{getTimeStamps(item.id)}</StiTxt>
          </TouchableOpacity>)}
        />
      </View>

      {selectedPic && (<View style={style.viewPicWrapper}>
        <View style={style.pictureViewPort}>
          <Image style={style.pictureLarge} source={{ uri: `data:image/png;base64,${selectedPic.base64}` }} />
        </View>

        <View style={style.buttonWrapper}>
          <View style={style.backButton}>
            <StiIconFontAwesome5 name="share" size={25} color="white" onPress={() => setSelectedPic(null)} />
          </View>
          <View style={style.cameraButton}>
            <StiIconFontAwesome5 name="share-alt" size={25} color="white" onPress={() => onSharedHandler(selectedPic.base64)} />
          </View>
          <View style={style.deleteButton}>
            <StiIconMaterialIcon name="delete" size={25} color="white" onPress={() => {
              dispatch(deletePicture(selectedPic.id))
              setSelectedPic(null)
            }} />
          </View>
        </View>
      </View>)}

      {!selectedPic && <View style={style.buttonWrapper}>
        <View style={style.cameraButton}>
          <StiIconFontAwesome5 name="camera" size={25} color="white" onPress={() => takePictures()} />
        </View>
        <View style={style.cameraButton}>
          <StiIconFontAwesome5 name="image" size={25} color="white" onPress={() => {
            getPhotoLibrary().then((base64: string) => {
              if (base64) {
                dispatch(savePicture(base64))
              }
            })
          }} />
        </View>
      </View>}

    </View>
  )
}