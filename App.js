import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";

export default class extends React.Component {
  state ={
    isLoading: true
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync(); // 퍼미션요청
      const {coords:{latitude,longitude}
    } =  await Location.getCurrentPositionAsync();
    this.setState({isLoading:false});
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
