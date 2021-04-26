import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#2b5876", "#4e4376"],
    title: "Thunderstorm",
    subtitle: "It's dangerous out of the house.",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#000C40", "#F0F2F0"],
    title: "Drizzle",
    subtitle: "It rains little by little.",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#182848", "#4b6cb7"],
    title: "Raining",
    subtitle: "The window is crying.",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#91EAE4", "#86A8E7"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman?",
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#C5796D", "#DBE6F6"],
    title: "Atmosphere",
    subtitle: "",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#6DD5FA", "#6DD5FA"],
    title: "Suuny Day",
    subtitle: "A hot day at the top of my head.",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#525252", "#3d72b4"],
    title: "Clouds",
    subtitle: "Today is the gray city.",
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Haze",
    subtitle: "Just stay home.",
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Mist",
    subtitle: "It's like Spray.",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#DECBA4", "#3E5151"],
    title: "Dusty",
    subtitle: "My throat feels stuffy.",
  },
};
// condition에 없는 날씨 있으면 에러가 날 것임.

export default function Weather({ temp, condition, name }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      {/* statusbar는 dark-content가 기본설정임 상단바 스타일 변경 */}
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp} ˚</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        {/* ..., ... 길어질 경우 두개 오브젝트함께쓰는 es6방식 */}
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
  },
  textContainer: {
    paddingHorizontal: 40,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
