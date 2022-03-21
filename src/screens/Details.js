import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../assets/themes/colors";
import GroupCourse from "../components/GroupCourse";

const w = Dimensions.get("window").width;

const Details = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require("../assets/images/uxdesign.png")}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.icon}
              source={require("../assets/images/arrow-left.png")}
            />
          </TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../assets/images/more-vertical.png")}
          />
        </View>
        <View style={styles.innerContainer}>
          <ImageBackground
            style={styles.rect}
            source={require("../assets/images/rect.png")}
          >
            <Text>BESTSELLER</Text>
          </ImageBackground>
          <View>
            <Text style={styles.heading}>Design Thinking</Text>
            <View style={styles.wrapperBody}>
              <View style={styles.iconText}>
                <Image
                  style={styles.icon}
                  source={require("../assets/images/people.png")}
                />
                <Text>18k</Text>
              </View>
              <View style={styles.iconText}>
                <Image
                  style={styles.icon}
                  source={require("../assets/images/star.png")}
                />
                <Text>8k</Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.wrapperBody,
              styles.price,
              { alignItems: "flex-end" },
            ]}
          >
            <Text style={styles.money1}>$50</Text>
            <Text style={styles.money2}>$70</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.bottom}>
        <GroupCourse />
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: w * 0.75,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
  rect: {
    width: 100,
    height: 23,
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  innerContainer: {
    padding: 20,
    marginTop: 20,
  },
  wrapperBody: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
    marginEnd: 20,
  },
  money1: {
    fontSize: 40,
    fontWeight: "bold",
  },
  money2: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.gray,
    marginStart: 20,
    textDecorationLine: "line-through",
  },
  bottom: {
    flex: 1,
  },
  price: {
    backgroundColor: "rgba(255,255,255,0.7)",
    width: w / 2,
    padding: 30,
    borderRadius: 30,
  },
});
