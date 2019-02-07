import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  Animated
} from "react-native";

import Video from "react-native-video";
import LightVideo from "./lights.mp4";
import Moment from "./moment";

const { width, height } = Dimensions.get("window");
const Images = [
  { image: require('./images/1.jpg')},
  { image: require('./images/2.jpg')},
  { image: require('./images/3.jpg')},
  { image: require('./images/4.jpg')},
  { image: require('./images/5.jpeg')}
];

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class ImageVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animatedScroll: new Animated.Value(0)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>navigation/newscreeddtation</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Video 
          source={{  uri : "https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile id=119&oauth2 token id=57447761" }}
          // resizeMode="cover"
          style={StyleSheet.absoluteFill}
        />
        {/* <Image
          source={require('./images/1.jpeg')}
        /> */}
        {/* <ScrollView
          pagingEnabled
          horizontal
          scrollEventThrottle={100}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: { 
                  x: this.state.animatedScroll
                }
              }
            }
          ])
        }
        >
        {Images.map((image, i) => {
          return (
            <Moment
            key={i}
            { ...image }
            />
          )
        })}
        </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default ImageVideo;
