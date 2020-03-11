// https://oblador.github.io/react-native-vector-icons/

import React from "react"
import {TouchableHighlight} from "react-native"
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface IIcon {
  name: string,
  size?: number,
  color?: string,

  onPress: () => void
}

export const StiIconFontAwesome5 = (props: IIcon) => {
  return <TouchableHighlight onPress={() => props.onPress()}>
    <FontAwesome5Icon {...props} />
  </TouchableHighlight>
}
export const StiIconEntypo = (props: IIcon) => <TouchableHighlight onPress={() => props.onPress()}>
    <EntypoIcon {...props} />
  </TouchableHighlight>

export const StiIconIon = (props: IIcon) => <TouchableHighlight onPress={() => props.onPress()}>
    <IonIcon {...props} />
  </TouchableHighlight>

export const StiIconMaterialIcon = (props: IIcon) => <TouchableHighlight onPress={() => props.onPress()}>
    <MaterialIcon {...props} />
  </TouchableHighlight>