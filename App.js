import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import LiftItem from './components/LiftItem';
import AddItem from './components/AddItem';
import LabelHeader from './components/LabelHeader';
import uuid from 'uuid-random';

// Space out Lift text
// Add functionality to enter sets done

// posts for friends

const App = () => {
  const [theLift, setTheLift] = useState([
    {id: uuid(), lift: 'Squat', sets: 3, reps: 5, weight: 200},
    {id: uuid(), lift: 'Bench', sets: 3, reps: 5, weight: 200},
  ]);
  console.log(theLift);
  const addLift = (lift, sets, reps, weight) => {
    if (!lift || !sets || !reps || !weight) {
      Alert.alert('Alert', 'Enter Somethin', {text: 'OK'});
    } else {
      setTheLift((prevItems) => {
        return [
          ...prevItems,
          {id: uuid(), lift: lift, sets: sets, reps: reps, weight: weight},
        ];
      });
    }
  };

  const removeLift = (id) => {
    setTheLift((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={theLift}
        ListHeaderComponent={<LabelHeader />}
        ListFooterComponent={<AddItem style={styles.add} addLift={addLift} />}
        renderItem={({item}) => (
          <LiftItem item={item} removeLift={removeLift} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 60},
  add: {paddingBottom: 22},
});

export default App;
