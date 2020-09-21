import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import uuid from 'uuid-random';

const LiftItem = ({item, removeLift}) => {
  //   const [repInput, setRepInput] = useState([
  //     {id: uuid(), individualRep: 5},
  //     {id: uuid(), individualRep: 6},
  //   ]);

  //   let eachSet = [];
  //   for (let i = 0; i < item.sets; i++) {
  //     console.log(repInput[i]);

  //     eachSet.push(<TextInput>{repInput}</TextInput>);
  //   }
  return (
    <TouchableOpacity style={styles.liftItem}>
      <View style={styles.listItemView}>
        <Text style={(styles.text, styles.lift)}>{item.lift}</Text>
        <Text style={(styles.text, styles.sets)}>{item.sets}</Text>
        <Text>X</Text>
        <Text style={(styles.text, styles.reps)}>{item.reps}</Text>
        <Text style={(styles.text, styles.weight)}>{item.weight}</Text>
        {/* {eachSet} */}

        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => removeLift(item.id)}
        />
      </View>
    </TouchableOpacity>
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
  text: {justifyContent: 'flex-start'},
  lift: {width: 50},
  sets: {width: 20},
  reps: {width: 20},
  weight: {width: 35},
});

export default LiftItem;
