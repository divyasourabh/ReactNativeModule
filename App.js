import React, { useEffect, useState } from "react";
import { NativeModules } from 'react-native';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, SafeAreaView } from "react-native";

const App = () => {

  const [title,setTitle] = useState("")

  const { ProductListTitleModule } = NativeModules;


  useEffect(async () => {
    const title = await ProductListTitleModule.getTitle();
    setTitle(title + " " + "JS");
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      {console.log("Hello---")}
      {console.log(ProductListTitleModule.getTitle() + "---")}
      {console.log(title)}
      { <Text style={styles.title}>{title}</Text> }
      {/* { <Text style={styles.title}>Product List</Text> } */}
      <ScrollView>
        <View style={styles.productListContainer}>

          <View style={[styles.productContainer,{backgroundColor:"red"}]}>
            <Text style={styles.productTitle}>Product 1</Text>
          </View>

          <View style={[styles.productContainer,{backgroundColor:"green"}]}>
            <Text style={styles.productTitle}>Product 2</Text>
          </View>

          <View style={[styles.productContainer,{backgroundColor:"orange"}]}>
            <Text style={styles.productTitle}>Product 3</Text>
          </View>

          <View style={[styles.productContainer,{backgroundColor:"powderblue"}]}>
            <Text style={styles.productTitle}>Product 4</Text>
          </View>

          <View style={[styles.productContainer,{backgroundColor:"pink"}]}>
            <Text style={styles.productTitle}>Product 5</Text>
          </View>

          <View style={[styles.productContainer,{backgroundColor:"blue"}]}>
            <Text style={styles.productTitle}>Product 6</Text>
          </View>

          <View style={[styles.productContainer,{backgroundColor:"cyan"}]}>
            <Text style={styles.productTitle}>Product 7</Text>
          </View>

          <View style={[styles.productContainer,{backgroundColor:"steelblue"}]}>
            <Text style={styles.productTitle}>Product 8</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

const screenwidth = Dimensions.get('window').width

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop:50,
  },
  title: {
    textAlign:"center",
    fontSize: 30,
    marginBottom:20,
    fontStyle: "normal",
  },
  productListContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  productContainer: {
    width: (screenwidth / 2) - 20,
    padding: 10,
    margin: 5,
    height: 300,
    alignContent: "center",
    justifyContent:"center"
  },
  productTitle: {
    alignItems: "center",
    textAlign: "center",
    borderColor: "red",
    fontStyle: "normal",
  }
})

export default App;