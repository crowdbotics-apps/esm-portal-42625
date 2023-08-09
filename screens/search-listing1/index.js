import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Image, ScrollView, TextInput, SafeAreaView } from "react-native";

const SearchListingScreen = () => {
  const [addresses, setAddresses] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    setAddresses([{
      id: 1,
      name: "Address 1",
      date: "17 June 2022",
      time: "12:00 AM",
      image: {
        uri: "https://tinyurl.com/42evm3m3"
      }
    }, {
      id: 2,
      name: "Address 2",
      date: "17 May 2022",
      time: "02:00 AM",
      image: {
        uri: "https://tinyurl.com/42evm3m3"
      }
    }, {
      id: 3,
      name: "Address 3",
      date: "17 April 2022",
      time: "12:00 AM",
      image: {
        uri: "https://tinyurl.com/42evm3m3"
      }
    }, {
      id: 4,
      name: "Address 4",
      date: "17 March 2022",
      time: "12:00 AM",
      image: {
        uri: "https://tinyurl.com/42evm3m3"
      }
    }, {
      id: 5,
      name: "Address 5",
      date: "17 March 2022",
      time: "12:00 AM",
      image: {
        uri: "https://tinyurl.com/42evm3m3"
      }
    }, {
      id: 6,
      name: "Address 6",
      date: "17 March 2022",
      time: "12:00 AM",
      image: {
        uri: "https://tinyurl.com/42evm3m3"
      }
    }, {
      id: 7,
      name: "Address 7",
      date: "17 March 2022",
      time: "12:00 AM",
      image: {
        uri: "https://tinyurl.com/42evm3m3"
      }
    }]);
  }, []);
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>{"Search Listings"}</Text>
          <TextInput style={styles.input} onChangeText={text => setSearchText(text)} value={searchText} placeholder="Enter" placeholderTextColor="#9B9B9B" autoCapitalize="none" autoCorrect={false} />
        </View>
      </View>
      <Text style={styles.headerText}>Search results</Text>
      <ScrollView style={styles.list}>
        {addresses.map((item, index) => <Address item={item} key={index} />)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 20
  },
  headerText: {
    fontSize: 16,
    padding: 2,
    marginHorizontal: 20
  },
  list: {
    paddingTop: 0,
    marginHorizontal: 20,
    backgroundColor: "#f1f1f1"
  },
  inputContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 5
  },
  inputText: {
    fontSize: 16,
    marginLeft: 20,
    color: "#111112"
  },
  input: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    marginVertical: 10,
    width: "100%",
    height: 50
  }
});
export default SearchListingScreen;

const Address = ({
  item
}) => {
  return <View style={addressStyles.addressContainer}>
      <View style={addressStyles.imgContainer}>
        <Image source={item.image} style={addressStyles.img} />
      </View>
      <View style={addressStyles.desContainer}>
        <Text>{item.name}</Text>
        <View style={addressStyles.timings}>
          <Text style={addressStyles.timingText}>{item.date}</Text>
          <Text style={addressStyles.timingText}>,</Text>
          <Text style={addressStyles.timingText}>{item.time}</Text>
        </View>
      </View>
    </View>;
};

const addressStyles = StyleSheet.create({
  addressContainer: {
    backgroundColor: "#fff",
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#e6e6e6"
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#ddd",
    height: 80,
    width: 80
  },
  desContainer: {
    width: "70%",
    justifyContent: "space-between",
    height: "60%",
    alignItems: "flex-start"
  },
  timings: {
    flexDirection: "row"
  },
  timingText: {
    color: "grey"
  }
});