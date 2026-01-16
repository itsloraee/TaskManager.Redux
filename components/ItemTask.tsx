import { modifier, supprimer } from '@/app/(tabs)/store/slices/taskSlice'
import { styles } from '@/app/(tabs)/styles'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'

const ItemTask = ({task}) => {

const dispatch = useDispatch() // pour écrire dans le store
  
const toggleTodo = (id) => {
   
  dispatch(modifier(id))
    
    console.log(id)


  } // end toggle todo

  
  const deleteTodo = (id) => {
    
    console.log('delete :' , id)
  
    dispatch(supprimer(id)) // supprimer la tache id dans le centre
  
  }// end delete
  
  
  return (
    <View style={styles.todoItem}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => toggleTodo(task.id)}
          >
            <View
              style={[
                styles.checkboxInner,
                task.completed && styles.checkboxChecked,
              ]}
            >
              {task.completed && <Text style={styles.checkmark}>✓</Text>}
            </View>
          </TouchableOpacity>
    
          <Text
            style={[
              styles.todoText,
              task.completed && styles.todoTextCompleted,
            ]}
          >
            {task.title}
          </Text>
    
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => deleteTodo(task.id)}
          >
            <Text style={styles.deleteText}>✕</Text>
          </TouchableOpacity>
        </View>
  )
}

export default ItemTask