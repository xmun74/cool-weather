import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "d892b91002eabd160955c7e8ede6566d";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
        name,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
      name: name,
    });
  };
  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync(); //사용자에게 허가요청
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync(); //현재위치 얻기
      //Send to API and get Weather
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition, name } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} name={name} />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   yellowView: {
//     flex: 1,
//     backgroundColor: "yellow",
//   },
//   blueView: {
//     flex: 1,
//     backgroundColor: "blue",
//   },
// });
//부모 컨테이너 flex:1 은 모든 공간 사용가능하다는 것
// flexDirextion: column이 기본설정/ flex로 화면비율 설정해라.
