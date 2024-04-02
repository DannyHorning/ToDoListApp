import React from 'react';
import {
  SafeAreaView, Button,
} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

function HomeScreen({navigation}) {

  const [tasks, setTasks] = React.useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };
    return(
      <MainLayout>
        <SafeAreaView>
          <ToDoForm addTask={addTask} />
          <ToDoList tasks={tasks} />
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
          />
        </SafeAreaView>
      </MainLayout>
    );
}

export default HomeScreen;