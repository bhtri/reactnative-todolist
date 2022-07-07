import { Text, View, Alert, ScrollView } from 'react-native';
import Task from './components/Task';
import Form from './components/Form';
import styles from './App.components.style';
import { useState } from 'react';

export default function App() {
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (task) => {
    // Add task
    setTaskList([...taskList, task]);
  }

  const handleDeleteTask = (index) => {
    Alert.alert(
      'Thong Bao !!!',
      'Ban co muon xoa',
      [
        {
          text: 'OK', onPress: () => {
            let taskListTemp = [...taskList];
            taskListTemp.splice(index, 1);
            setTaskList(taskListTemp);
          }
        },
        {
          text: 'Cancel',
          onPress: () => { },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item, index) => {
              return <Task
                key={index}
                title={item}
                number={index + 1}
                onDeleteTask={() => handleDeleteTask(index)} />
            })
          }
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}

