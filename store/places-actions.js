import * as FileSystem from 'expo-file-system'

export const ADD_PLACE = 'ADD_PLACE'

export const addPlace = (title, image) => {
  return async dispatch => {
    // splits the PATH using '/' and returns the filename
    const fileName = image.split('/').pop()
    const newPath = FileSystem.documentDirectory + fileName
    FileSystem.moveAsync({
      from: image,
      to: newPath
    })
    dispatch({ type: ADD_PLACE, placeData: { title: title, image: image } })
  }
}
