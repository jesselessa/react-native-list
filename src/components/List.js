import { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import CountryCard from "./CountryCard";

export default function List() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((response) => {
        setCountries(response);
        // console.log(response);
        setLoading((prevState) => !prevState);
      });
  }, []);

  return (
    <View>
      {loading ? (
        <Text>Content is loading...</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={countries}
          renderItem={(data) => <CountryCard country={data.item} />}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.border}></View>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  list: { margin: "auto" },
  border: {
    borderBottomWidth: 1,
  },
});
