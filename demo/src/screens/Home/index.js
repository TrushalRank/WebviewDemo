import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from './style';
import images from '../../common/images';
import { WebView } from 'react-native-webview';
import Colors from '../../common/Colors';
import CommentBox from '../../Components/CommentBox';
import Header from '../../Components/Header';
import CommentInput from '../../Components/CommentInput';

const Homescreen = () => {
  const webViewRef = useRef(null);
  const [inputValue, setinputValue] = useState('');
  const HTML = `<!DOCTYPE html>
  <html>
     <head>
        <title>Button with Alert</title>
        <style>
           .box {
           display: flex;
           flex: 1;
           justify-content: center;
           align-items: center;
           background-color: #red;
           }
           .button {
           padding: 30px;
           background-color: #01B99F;
           border-radius: 60px;
           text-align: center;
           color: white;
           font-size: 40px;
           position: absolute;
           border-width: 0px;
           top: 50%;
           }
        </style>
        </style>
        <script>
           function showAlert() {
             const data = {
               type: 'alert',
               message: 'Hello from Native!',
             };
           
             window.ReactNativeWebView.postMessage(JSON.stringify(data));
           }
        </script>
     </head>
     <body class="box">
        <button class="button" onclick="showAlert()">Native Alert</button>
     </body>
  </html>`;

  const handleMessage = event => {
    const data = JSON.parse(event.nativeEvent.data);

    if (data.type === 'alert') {
      alert(data.message);
    }
  };

  const handleWebViewAlert = () => {
    webViewRef.current.injectJavaScript(`
      alert("Hello from WebView!");
    `);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Header />
        <CommentBox />
        <WebView
          ref={webViewRef}
          onMessage={handleMessage}
          style={styles.webViewStyle}
          source={{
            html: HTML,
          }}
        />
        <View style={styles.likeBox}>
          <Image style={styles.likeImage} source={images.heard} />
          <Text style={styles.linkText}>5</Text>
          <Image style={styles.likeImage} source={images.message} />
          <Text style={styles.linkText}>5</Text>
          <Image style={styles.likeImage} source={images.bookmark} />
          <View style={styles.menuImageBox}>
            <Image style={styles.likeImage} source={images.menu} />
          </View>
          <TouchableOpacity
            onPress={() => handleWebViewAlert()}
            style={styles.webAlertButton}>
            <Text style={styles.webAlertText}>WV Alert</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.box}>
            <Image source={images.Avtar} style={styles.profileImage} />
            <View style={[styles.box, styles.profileBox]}>
              <Text style={styles.nameTitle}>안녕 나 응애 </Text>
              <Image
                source={images.circulGreenCheck}
                style={styles.checkImage}
              />
              <Text style={styles.subtitle}>1일전</Text>
            </View>
            <Image style={styles.menuImage} source={images.menu} />
          </View>
          <Text style={styles.tilteDescription}>
            어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도
            아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가
            기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰
            올라온다고 하니 꼭 봐주세용~!
          </Text>
          <View style={styles.TilteDescription}>
            <Image style={styles.likeImage} source={images.heard} />
            <Text style={styles.linkText}>5</Text>
            <Image style={styles.likeImage} source={images.message} />
            <Text style={styles.linkText}>5</Text>
          </View>
        </View>
        <View style={[styles.container, styles.subProfileBox]}>
          <View style={styles.box}>
            <Image source={images.profile} style={styles.profileImage} />
            <View style={[styles.box, styles.profileBox]}>
              <Text style={styles.nameTitle}>ㅇㅅㅇ</Text>
              <Text style={styles.subprofileDescription}>1일전</Text>
            </View>
            <Image style={styles.subprofileDescription} source={images.menu} />
          </View>
          <Text style={styles.tilteDescription}>
            오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
          </Text>
          <View style={styles.TilteDescription}>
            <Image style={styles.likeImage} source={images.heard} />
            <Text style={styles.linkText}>5</Text>
          </View>
        </View>
        <CommentInput onChangeText={setinputValue} placeholder={"댓글을 남겨주세요."} rigth={<Text style={styles.registration}>등록</Text>} value={inputValue} />
      </ScrollView>
    </View>
  );
};

export default Homescreen;
