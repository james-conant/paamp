import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AppButton from './AppButton';

const Dashboard = () => {
  const button = () => {};
  return (
    <View style={styles.container}>
      <AppButton onPress={button} title="Continue Workout"></AppButton>
      <AppButton onPress={button} title="My Workouts"></AppButton>

      <AppButton onPress={button} title="Start New Program"></AppButton>

      <AppButton onPress={button} title="Check Out Friends"></AppButton>

      <AppButton onPress={button} title="Find Friends"></AppButton>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    marginHorizontal: 16,
  },
});

export default Dashboard;
