import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const StatTask = () => {

    // Lecture des tâches dans le store 
    const todos = useSelector((state) => state.task)
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default StatTask