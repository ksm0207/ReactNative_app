import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";

export default class extends React.Component {
  getLocation = async () => {
    state = {
      isLoading: true
    };
    try {
      await Location.requestPermissionsAsync(); // 퍼미션요청
      const {
        coords: { latitude, longitude }
        // latitude , longitude를 가져왔을때 잠시 setState를 진행
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false });
      // Send to API and get Weather !!
    } catch (error) {
      Alert.alert("False");
    }
  };
  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    // 만약 isLoading이 있으면 <Loading>/ 을 리턴하고 아니면 null을 리턴
    return isLoading ? <Loading></Loading> : null;
  }
}
