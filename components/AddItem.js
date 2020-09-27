import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import uuid from 'uuid-random';

const AddItem = ({addLift}) => {
  const [lift, setLift] = useState('');
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder="lift"
        style={styles.input}
        name="lift"
        onChangeText={(e) => setLift(e)}
      />
      <TextInput
        placeholder="sets"
        name="Sets"
        style={styles.input}
        onChangeText={(e) => setSets(e)}
      />
      <TextInput
        placeholder="reps"
        name="Reps"
        style={styles.input}
        onChangeText={(e) => setReps(e)}
      />
      <TextInput
        placeholder="weight"
        name="Weight"
        style={styles.input}
        onChangeText={(e) => setWeight(e)}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={(e) => addLift(lift, sets, reps, weight)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  input: {
    height: 60,
    width: 50,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
