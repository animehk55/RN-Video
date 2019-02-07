import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  Animated,
  TouchableWithoutFeedback
} from "react-native";

// import Video from "react-native-video";
// import LightVideo from "./lights.mp4";
import Moment from "./moment";

const { width, height } = Dimensions.get("window");
const Images = [
  { image: require("./images/1.jpeg") },
  { image: require("./images/2.jpg") },
];
const Images1 = [
  { image: require("./images/1.jpeg") },
  { image: require("./images/2.jpg") },
  { image: require("./images/3.jpg") },
  { image: require("./images/4.jpg") },
  { image: require("./images/5.jpeg") }
];
const ButtonText = [
  { textValue: 'Ram' },
  { textValue: 'Shyam' },
  { textValue: 'Ramafd' },
  { textValue: 'Shyfafasdam' },
  { textValue: 'Rsdfasam' },
  { textValue: 'Shfefreyam' },
  { textValue: 'Ramawerqrfd' },
  { textValue: 'Shyfaffdasffdasdam' },
];

const data = [
  { id: "1", name: "Janet Perkins" },
  { id: "2", name: "Mary Johnson" },
  { id: "3", name: "Peter Carlsson" },
  { id: "4", name: "Anthony McDonald" },
  { id: "5", name: "Andrea Lucas" },
  { id: "6", name: "Beverly Peters" },
  { id: "7", name: "Willie Wheeler" },
  { id: "8", name: "Andrea Lucas" }
];

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animatedScroll: new Animated.Value(0)
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>navigation/newscreeddtation</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text> */}
        {/* <Video 
          source={{  uri : "https://player.vimeo.com/external/207277102.hd.mp4?s=6939b93ae3554679b57f5e7fa831eef712a74b3c&profile id=119&oauth2 token id=57447761" }}
          resizeMode="cover"
          style={StyleSheet.absoluteFill}
        /> */}
        {/* <Image
          source={require('./images/1.jpeg')}
        /> */}
        <ScrollView
          pagingEnabled
          horizontal
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: this.state.animatedScroll
                }
              }
            }
          ])}
        >
          {Images1.map((image,i) => {
            {/* let c = i+2
            if(c/2 === 0){
              Images.push(...Images1.slice(i, i+2))
            }
            console.log(Images); */}
            return <Moment key={i} {...image} />;
          })}
{/*           

<View style={{ position: "absolute" }}>
            <TouchableWithoutFeedback
            // onPress={onBtnPress}
            // onPress={() => onBtnPress(id)}
            >
              <View
                style={{
                  borderWidth: 1,
                  backgroundColor: "red",
                  height: 50,
                  width: 100,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "black"
                }}
              >
                {data.map(item => {
                  return (
                    <View key={item.id}>
                      <View>
                        <Text>
                          {item.name}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </TouchableWithoutFeedback>
          </View> */}

















          {/* {ButtonText.map((button, i) => {
            return <View key={i} {...textValue} />;
          })} */}
          {/* <View style={{ position: "absolute" }}>
            <TouchableWithoutFeedback
            // onPress={onBtnPress}
            // onPress={() => onBtnPress(id)}
            >
              <View
                style={{
                  borderWidth: 1,
                  backgroundColor: "red",
                  height: 50,
                  width: 100,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "black"
                }}
              >
                <Text>Hello</Text>
              </View>
            </TouchableWithoutFeedback>
          </View> */}
        </ScrollView>
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

export default App;
