import * as FileSystem from "expo-file-system"
import { AsyncStorage } from "react-native"

export const saveAsyncStore = (key: string, data: any = {}) => {
  return AsyncStorage.setItem(`Sti_${key}`, JSON.stringify(data));
}

export const removeAsyncStore = (key: string) => {
  return AsyncStorage.removeItem(`Sti_${key}`)
}

export const getAsyncStore = (key: string) => {
  return AsyncStorage.getItem(`Sti_${key}`).then(res => JSON.parse(res))
}


const baseUrl = FileSystem.documentDirectory;

export const saveFile = (fileName: string, contents: string): Promise<void> => {
  return FileSystem.writeAsStringAsync(`${baseUrl}${fileName}`, contents, {
    encoding: FileSystem.EncodingType.Base64
  })
}

export const deleteFile = (fileName: string): Promise<void> => {
  return FileSystem.deleteAsync(`${baseUrl}${fileName}`, {
    idempotent: false
  })
}

export const loadFile = (fileName: string): Promise<string> => {
  return FileSystem.readAsStringAsync(`${baseUrl}${fileName}`, {
    encoding: FileSystem.EncodingType.Base64
  })
}

export const lsDirectory = (): Promise<string[]> => {
  return FileSystem.readDirectoryAsync(baseUrl)
    .then((res: string[]) => res.filter((fileName: string) => fileName.startsWith("Sti")))
}
