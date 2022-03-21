import React from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../assets/themes/colors";

const w = Dimensions.get("window").width;

const data = [
  {
    id: "1",
    title: "Marketing",
    num: 17,
    image: require("../assets/images/marketing.png"),
  },
  {
    id: "2",
    title: "UX Design",
    num: 25,
    image: require("../assets/images/uxdesign.png"),
  },
  {
    id: "3",
    title: "Photography",
    num: 13,
    image: require("../assets/images/photography.png"),
  },
  {
    id: "4",
    title: "Business",
    num: 20,
    image: require("../assets/images/business.png"),
  },
];

const ListCourse = ({ onPress }) => {
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity style={styles.itemBtn} onPress={onPress}>
          <ImageBackground source={item.image} style={styles.imageBtn}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDesc}>{item.num}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.more}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        // contentContainerStyle={}
      />
    </View>
  );
};

export default ListCourse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  more: {
    fontWeight: "500",
    color: Colors.blue,
  },
  imageBtn: {
    flex: 1,
    borderRadius: 20,
    padding: 20,
  },
  containerList: {
    flexDirection: "row",
  },
  item: {
    width: (w - 20) / 2,
    padding: 10,
  },
  itemBtn: {
    minHeight: w / 2,
    backgroundColor: "gray",
    borderRadius: 20,
    overflow: "hidden",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemDesc: {
    color: Colors.gray,
    marginTop: 8,
    backgroundColor: Colors.pink,
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 50,
  },
});
