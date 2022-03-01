import { StyleSheet, View, Text, Image } from "react-native";

export default function CountryCard(props) {
  return (
    <View>
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
        <Image uri={props.country.flags.png} style={styles.img} />
      ) : (
        <Text>No flag</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: { fontSize: 18 },
  innerText: {
    fontWeight: "bold",
  },
  img: {
    width: 200,
    height: "auto",
  },
});
