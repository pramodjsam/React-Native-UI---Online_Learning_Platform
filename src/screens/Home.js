import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../assets/themes/colors";
import ListCourse from "../components/ListCourse";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.icon}
          source={require("../assets/images/menu.png")}
        />
        <Image
          style={styles.avatar}
          source={require("../assets/images/avatar.png")}
        />
      </View>
      <View>
        <Text style={styles.heading}>Hey Alex, </Text>
        <Text style={styles.description}>Find a course you want to learn</Text>

        <View style={styles.searchContainer}>
          <Image
            style={styles.icon}
            source={require("../assets/images/search.png")}
          />
          <TextInput style={styles.input} placeholder="Search for anything" />
        </View>
      </View>
      <ListCourse onPress={() => navigation.navigate("Details")} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFF",
  },
  avatar: {
    width: 50,
    height: 50,
  },
  icon: {
    width: 20,
    height: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "500",
  },
  description: {
    fontSize: 15,
    marginVertical: 10,
  },
  searchContainer: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: Colors.silver,
    borderRadius: 20,
  },
  input: {
    marginLeft: 10,
  },
});
