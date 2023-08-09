import React from "react";
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, SafeAreaView } from "react-native";

const TwoRows = () => {
  const handleViewListings = () => {// Add your logic for handling the View Listings action here
  };

  const handleBookServices = () => {// Add your logic for handling the Book Services action here
  };

  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.heading}>
          {"Welcome to Elephant Shoe Media!\n    Please select an option below"}
        </Text>
        <View style={styles.sectionContainer}>
          <TouchableOpacity style={styles.section} onPress={handleViewListings}>
            <Text style={styles.textHeading1}>View Listings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.section} onPress={handleBookServices}>
            <Text style={styles.textHeading1}>Book Services</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#fff"
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: "#333",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15
  },
  section: {
    flex: 1,
    backgroundColor: "#555",
    marginVertical: 5,
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  textHeading1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  }
});
export default TwoRows;