import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'

import styles from './style'

export default function Form() {
  const [task, setTask] = useState('')

  const handleAddTask = () => {
    if (task.length === 0) {
      alert('');
      return false;
    }
    alert(task);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={10}
      style={styles.addTask}
    >
      <TextInput
        onChangeText={(text) => setTask(text)}
        placeholder='Your Task'
        style={styles.input}
      />
      <TouchableOpacity
        onPress={handleAddTask}
      >
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}