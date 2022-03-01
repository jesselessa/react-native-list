import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import List from "./src/components/List";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste</Text>
      <List />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e9e4dc",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    marginVertical: 40,
    fontWeight: "bold",
  },
});
