import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../assets/themes/colors";

const data = [
  {
    id: "1",
    title: "Welcome to the course",
    time: "5:35",
  },
  {
    id: "2",
    title: "Design Thinking - Intro",
    time: "19:04",
  },
  {
    id: "3",
    title: "Design Thinking - Process",
    time: "12:48",
  },
  {
    id: "4",
    title: "Customer Perspective",
    time: "37:54",
  },
];

const GroupCourse = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.numHead}>{"0" + item.id}</Text>
        <View style={styles.itemBody}>
          <Text style={styles.itemTime}>{item.time} mins</Text>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
        <View style={styles.itemPlayButton}>
          <Image
            style={{ width: 12, height: 12 }}
            source={require("../assets/images/play.png")}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ padding: 10 }}>
        <Text style={styles.heading}>Course Content</Text>
        {/* <ScrollView style={styles.list}>
          {data.map((item, i) => (
            <View style={styles.item} key={item.id}>
              <Text style={styles.numHead}>{"0" + item.id}</Text>
              <View style={styles.itemBody}>
                <Text style={styles.itemTime}>{item.time} mins</Text>
                <Text style={styles.itemTitle}>{item.title}</Text>
              </View>
              <View style={styles.itemPlayButton}>
                <Image
                  style={{ width: 12, height: 12 }}
                  source={require("../assets/images/play.png")}
                />
              </View>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bag}>
          <Image source={require("../assets/images/shopping-bag.png")} />
        </View>
        <TouchableOpacity style={styles.btnBuy}>
          <Text style={styles.titleBuy}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GroupCourse;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    flex: 1,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    paddingTop: 50,
    backgroundColor: "white",
  },
  list: {
    marginTop: 20,
  },
  item: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 20,
  },
  numHead: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.gray,
  },
  itemTime: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.gray,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.black,
  },
  itemPlayButton: {
    backgroundColor: Colors.green,
    width: 40,
    aspectRatio: 1,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.black,
  },
  bottomContainer: {
    // marginTop: 30,
    flexDirection: "row",
    padding: 10,
    // backgroundColor: "red",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  bag: {
    padding: 8,
    paddingHorizontal: 20,
    borderRadius: 40,
    backgroundColor: Colors.pink,
    alignItems: "center",
    justifyContent: "center",
  },
  btnBuy: {
    backgroundColor: Colors.blue,
    flex: 1,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  titleBuy: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },
});
