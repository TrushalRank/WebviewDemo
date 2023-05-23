import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import DeviceInfo from 'react-native-device-info'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
          <Fontisto name={'angle-left'} size={22} style={styles.backArrow} />
          <Text style={styles.headerTitle}>자유톡</Text>
          <Ionicons
            name={'notifications-outline'}
            size={28}
            style={styles.backArrow}
          />
        </View>
  )
}

export default Header

const isnotch = DeviceInfo.hasNotch();
const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        backgroundColor: Colors.WHITE,
        height: isnotch ? heightPercentageToDP(13) : heightPercentageToDP(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      backArrow: {
        marginHorizontal: 10,
      },
      headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.BLACK,
      },
})