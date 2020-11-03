import * as FileSystem from 'expo-file-system'

export const ADD_PLACE = 'ADD_PLACE'

export const addPlace = (title, image) => {
  return async dispatch => {
    const newPath = FileSystem.documentDirectory
    dispatch({ type: ADD_PLACE, placeData: { title: title, image: image } })
  }
}
