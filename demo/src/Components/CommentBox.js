import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import images from '../common/images';
  import {Array} from '../common/Array';
  import Colors from '../common/Colors';

const CommentBox = () => {
  return (
    <View style={styles.container}>
          <View style={styles.box}>
            <Image source={images.Avtar} style={styles.profileImage} />
            <View style={styles.userBox}>
              <View style={[styles.box, styles.alignItems]}>
                <Text style={styles.nameTitle}>안녕 나 응애</Text>
                <Image
                  source={images.circulGreenCheck}
                  style={styles.checkImage}
                />
                <Text style={styles.description}>1일전</Text>
              </View>
              <Text style={styles.description}>165cm • 53kg</Text>
            </View>
            <TouchableOpacity style={styles.profileButton}>
              <Text style={styles.profileButtonTitle}>팔로우</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.question}>
            지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?
          </Text>
          <Text style={styles.answer}>
            지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
            혹시 어떤 상품이 제일 괜찮았어?
          </Text>
          <Text style={styles.answer}>
            후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이
            제일 재밌었다던데 맞아???
          </Text>
          <Text style={styles.answer}>
            올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
            아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에
            있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!
          </Text>
          <View style={styles.contentBox}>
            <FlatList
              data={Array.chatArray}
              numColumns={4}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <View style={styles.content}>
                  <Text>{item.lable}</Text>
                </View>
              )}
            />
          </View>
        </View>
  )
}

export default CommentBox

const styles = StyleSheet.create({
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
})