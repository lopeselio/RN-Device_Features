import React from 'react'
import { View, Button, Image, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

const ImagePicker = props => {
  const takeImageHandler = () => {

  }

  return(
    <View style={stles.ImagePicker}>
      <View style={styles.imagePreview}>
        <Text> No Image Picked yet.</Text>
        <Image style={styles.Image} />
      </View>
      <Button 
        title='Take Image' 
        color={Colors.primary} 
        onPress={} 
      />
    </View>

  )
}

const styles = styleSheet.create({
  ImagePicker: {
    alignItems: 'center'
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    borderColor: '#ccc',
    alignItems: 'center',
    borderWidth: 1
  },
  image:{}
})

export default ImagePicker