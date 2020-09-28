import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Header = () => {
  return (
    <View style={styles.header}>
      <Icon
        name="arrow-left"
        size={25}
        color="white"
        // onPress={() => removeLift(item.id)}
      />
      <Text style={styles.text}>Week 2 / Day 4</Text>
      <Icon
        name="comments"
        size={28}
        color="white"
        // onPress={() => removeLift(item.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {color: '#fff', fontSize: 23},
});

export default Header;
