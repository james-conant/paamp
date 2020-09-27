import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const LiftItem = () => {
  return (
    <View style={styles.liftItem}>
      <View style={styles.listItemView}>
        <Text style={(styles.text, styles.lift)}>Lift</Text>
        <Text style={(styles.text, styles.sets)}>Sets</Text>
        <Text></Text>
        <Text style={(styles.text, styles.reps)}>Reps</Text>
        <Text style={(styles.text, styles.weight)}>Weight</Text>
        {/* {eachSet} */}

        <Icon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  liftItem: {
    padding: 18,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    justifyContent: 'flex-start',
    fontSize: 10,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
  lift: {width: 50, fontSize: 20, fontWeight: 'bold'},
  sets: {width: 44, fontSize: 20, fontWeight: 'bold'},
  reps: {width: 49, fontSize: 20, fontWeight: 'bold'},
  weight: {width: 67, fontSize: 20, fontWeight: 'bold'},
});

export default LiftItem;
