import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { render } from "react-native-web";

export default function App() {

  const initalState = {
    name: "",
    number: "",
    age: "",
  };
  const [user, setUser] = useState();
  const view = async () => {
    try {
      const documentSnapshot = await db
        .collection("Amir'sData")
        .doc(state.name)
        .get();

      const userData = documentSnapshot.data();
      setUser(userData);
    } catch {
    }
  };
  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const [state, setState] = useState(initalState);
  const insertUser = async () => {
    

      db.collection("Amir'sData")
      .doc(state.name)
      .set({
        name: state.name,
        number: state.number,
        age: state.age,
      })
    alert("data inserted");
    

  };
  const updateUser = async () => {
    

    db.collection("Amir'sData")
    .doc(state.name)
    .update({
      number: state.number,
    })
  alert("number updated");

};
  const deleteByName = () => {
    db.collection("Amir'sData")
      .doc(state.name)
      .delete()
      .then((res) => {
        alert("Deleted Sucessfully")
      })
      .catch((error) => {
        console.error("Failed to Delete: ", error);
      });
  };


  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Crud App</Text>
      </View>
      <View style={{ marginHorizontal: 19 }}>
        <ScrollView>
          <TextInput
            style={styles.input}
            placeholder="name"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
          />
          <TextInput
            style={styles.input}
            placeholder="number"
          onChangeText={(value) => handleChangeText(value, "number")}
          value={state.number}
          />
          <TextInput
            style={styles.input}
            placeholder="age"
          onChangeText={(value) => handleChangeText(value, "age")}
          value={state.age}
          />
        </ScrollView>
      </View>
      <View>
        <TouchableOpacity onPress={insertUser} style={styles.button}>
          <Text>Insert</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={updateUser} style={styles.updateButton}>
          <Text>Updates</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="name"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
        />

        <TextInput
            style={styles.input}
            placeholder="enter Number To Update"
          onChangeText={(value) => handleChangeText(value, "number")}
          value={state.number}
          />

        <TouchableOpacity onPress={deleteByName} style={styles.deleteButton}>
          <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={view} style={styles.viewButton}>
          <Text>View</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fetch}>
      <Text  style={styles.fetch}>This is your requested data</Text>
      </View>
      <View style={styles.get}>
      <Text  style={styles.get}>name : {user && user?.name}</Text>
      <Text style={styles.get}>number : {user && user?.number}</Text>
      <Text style={styles.get}>age : {user && user?.age}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    padding: 10,
    marginLeft: 60,
    marginRight: 60,
    backgroundColor: "green"
  },
  updateButton:{
    alignItems:"center",
    marginLeft: 60,
    marginRight: 60,
    backgroundColor: "yellow",
    marginTop: 5,
    padding: 10
  },
  deleteButton:{
    alignItems:"center",
    backgroundColor: "red",
    marginLeft: 60,
    marginRight: 60,
    padding: 10
  },
  viewButton:{
    alignItems:"center",
    backgroundColor: "pink",
    marginLeft: 60,
    marginRight: 60,
    marginTop: 5,
    padding: 10
  },
  fetch:{
    fontSize :  25,
    marginLeft: 10,
    color : "blue"
      },
      get:{
        fontSize :  15,
        marginTop: 5,
        marginLeft: 10,
        color : "red"
          },

});