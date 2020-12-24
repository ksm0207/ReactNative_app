import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";

const API_KEY = "d31ea6055ce5d867a87f021705cca0ab";

export default class extends React.Component {
  state ={
    isLoading: true
  }
  getWeather = async(latitude,longitude)=>{
    const {data} = await axios.get(
      // URL
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
    );
    console.log(data);
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync(); // 퍼미션요청
      const {coords:{latitude,longitude}
    } =  await Location.getCurrentPositionAsync();
    this.setState({isLoading:false});
    this.getWeather(latitude,longitude);
      // API로 전송해서 날씨가져오기
    } catch (error) {
      Alert.alert("False");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state
    // 만약 isLoading이 있으면 <Loading>/ 을 리턴하고 아니면 null을 리턴
    return isLoading ? <Loading></Loading> : null;
  }
  
}
