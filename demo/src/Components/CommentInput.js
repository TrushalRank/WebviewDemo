import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Colors from '../common/Colors'
import images from '../common/images'

const CommentInput = ({value, onChangeText, placeholder, rigth}) => {
  return (
    <View style={styles.textInputBox}>
    <Image style={styles.textInputImage} source={images.imagesmode} />
    <TextInput
      style={styles.textInput}
      value={value && value}
      onChangeText={onChangeText}
      placeholderTextColor={Colors.grey}
      placeholder={placeholder && placeholder}
    />
    {rigth && rigth}
  </View>
  )
}

export default CommentInput

const styles = StyleSheet.create({
    textInputBox: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: Colors.darkWhite,
      },
      textInputImage: {
        marginHorizontal: 7,
        height: 30,
        width: 30,
      },
      textInput: {
        flex: 1,
      },
      registration: {
        marginRight: 5,
        color: Colors.darkWhite,
      },
})