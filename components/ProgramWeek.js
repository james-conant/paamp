import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import Dashboard from './Dashboard';
import Header from './Header';
import LiftItem from './LiftItem';
import AddItem from './AddItem';
import LabelHeader from './LabelHeader';
import uuid from 'uuid-random';

const ProgramWeek = () => {
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

export default ProgramWeek;
