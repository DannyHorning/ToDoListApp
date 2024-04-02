import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({navigation})  {
  
    const appName = "To Do List App";
    const yourName = "Danny Horning";
    const currentDate = new Date().toLocaleDateString();

    return (
      <MainLayout>
      <View style={styles.container}>
        <Text style={styles.header}>About {appName}</Text>
        <Text>Created by: {yourName}</Text>
        <Text>Current Date: {currentDate}</Text>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
        />
      </View>
      </MainLayout>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default AboutScreen;