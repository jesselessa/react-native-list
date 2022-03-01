import { StyleSheet, View, Text, Image } from "react-native";

export default function CountryCard(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.innerText}>Pays : </Text>
        {props.country.name.common}
      </Text>
      {props.country.capital ? (
        <Text style={styles.baseText}>
          <Text style={styles.innerText}>Capitale : </Text>
          {props.country.capital}
        </Text>
      ) : (
        <Text style={styles.baseText}>
          <Text style={styles.innerText}>Capitale : </Text> Undefined
        </Text>
      )}
      {props.country.flags.png ? (
        <Image source={{ uri: props.country.flags.png }} style={styles.img} />
      ) : (
        <Text style={{ fontWeight: "bold" }}>No flag</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  baseText: { fontSize: 18, margin: 5 },
  innerText: {
    fontWeight: "bold",
  },
  img: {
    width: 200,
    height: 130,
    margin: 15,
  },
});
