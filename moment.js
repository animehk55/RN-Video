import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  Text,
  TouchableWithoutFeedback
} from "react-native";

const { width, height } = Dimensions.get("window");
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
class Moment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Animated.Image
          source={this.props.image}
          style={styles.image}
          resizeMode="cover"
        />
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
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    overflow: "hidden"
  },
  image: {
    flex: 1,
    width: null,
    height: null
  }
});

export default Moment;
