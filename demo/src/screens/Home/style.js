import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  container: {
    padding: 16,
    backgroundColor: Colors.WHITE,
  },
  box: {
    flexDirection: 'row',
  },
  profileImage: {
    width: 34,
    height: 34,
  },
  userBox: {
    marginLeft: 10,
    flex: 1,
  },
  alignItems: {
    alignItems: 'center',
  },
  nameTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
  checkImage: {
    width: 14,
    height: 14,
    marginHorizontal: 5,
  },
  description: {
    fontSize: 12,
  },
  subtitle: {
    fontSize: 10,
  },
  profileButton: {
    width: 75,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.ligthGreen,
    borderRadius: 50,
  },
  profileButtonTitle: {
    color: Colors.WHITE,
    fontSize: 12,
  },
  question: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.BLACK,
    marginTop: 16,
  },
  answer: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 16,
  },
  contentBox: {
    marginTop: 16,
  },
  content: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    margin: 5,
    borderRadius: 50,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.white,
  },
  webViewStyle: {
    height: 450,
    width: '100%',
    backgroundColor: Colors.subWhite,
  },
  likeBox: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeImage: {
    marginHorizontal: 5,
  },
  linkText: {
    marginRight: 5,
    color: Colors.darkWhite,
  },
  menuImageBox: {
    flex: 1,
  },
  webAlertButton: {
    width: 75,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.ligthGreen,
    borderRadius: 50,
  },
  profileBox: {
    alignItems: 'center',
    marginLeft: 10,
    flex: 1,
  },
  webAlertText: {
    color: Colors.WHITE,
    fontSize: 12,
  },
  menuImage: {
    marginHorizontal: 5,
    marginTop: -5,
  },
  tilteDescription: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 16,
    paddingLeft: 44,
  },
  TilteDescription: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 35,
  },
  subProfileBox: {
    width: '90%',
    alignSelf: 'flex-end',
  },
  subprofileDescription: {
    fontSize: 10,
    marginLeft: 5,
  },
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
  }
});
