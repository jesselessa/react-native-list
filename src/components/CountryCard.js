import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function CountryCard(props) {
  // Bonus 1 - Display flags

  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.baseText}>
  //       <Text style={styles.innerText}>Pays : </Text>
  //       {props.country.name.common}
  //     </Text>

  //     {props.country.capital ? (
  //       <Text style={styles.baseText}>
  //         <Text style={styles.innerText}>Capitale : </Text>
  //         {props.country.capital}
  //       </Text>
  //     ) : (
  //       <Text style={styles.baseText}>
  //         <Text style={styles.innerText}>Capitale : </Text> Undefined
  //       </Text>
  //     )}

  //     {props.country.flags.png ? (
  //       <Image source={{ uri: props.country.flags.png }} style={styles.img} />
  //     ) : (
  //       <Text style={{ fontWeight: "bold" }}>No flag</Text>
  //     )}
  //   </View>
  // );

  // Bonus 2 - Clickable flags displaying weather

  const [capitalData, setCapitalData] = useState(false);
  const [weather, setWeather] = useState([]);

  // API function call to get weather data
  const handlePress = (capital) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=759d5830049be93bf370837fa5147c7f`
      // `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.API_KEY}`
    )
      .then((response) => response.json())
      .then((response) => {
        setWeather(response);
        console.log(response);
        setCapitalData((prevState) => !prevState);
        // setLoading((prevState) => !prevState);
      })
      .catch(`Error - ${error}`);
  };

  return (
    <View style={styles.container}>
      {/* Country  */}
      <Text style={styles.baseText}>
        <Text style={styles.innerText}>Pays : </Text>
        {props.country.name.common}
      </Text>
      {/*Clickable flag */}
      {props.country.flags.png ? (
        <TouchableOpacity onPress={() => handlePress(props.country.capital)}>
          <Image source={{ uri: props.country.flags.png }} style={styles.img} />
        </TouchableOpacity>
      ) : (
        <Text style={{ fontWeight: "bold" }}>No flag</Text>
      )}

      {/* Capital and weather when clicking on country flag */}
      {capitalData && (
        <View style={styles.container}>
          {/* Capital */}
          {props.country.capital ? (
            <Text style={styles.baseText}>
              <Text style={styles.innerText}>Capitale : </Text>
              {props.country.capital}
            </Text>
          ) : null}
          {/* Weather */}
          <Text style={styles.baseText}>
            <Text style={styles.innerText}>Température : </Text>
            {weather.main.temp}°C ({weather.weather[0].main})
          </Text>
        </View>
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
