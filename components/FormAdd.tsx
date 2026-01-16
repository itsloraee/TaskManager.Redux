import { ajouter } from '@/app/(tabs)/store/slices/taskSlice'
import { styles } from '@/app/(tabs)/styles'
import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'

const FormAdd = () => {

    
    // Déclaration de la variable TextTache

    const [textTache, setTextTache] = useState('')
    const dispatch = useDispatch()

    // Fonction pour ajouter une tâche
    
    const addTodo = () => {
      
      // Formatage de la tache
    const newTodo = {
              id: Date.now().toString(),
              title: textTache,
              completed: false,
            };

            // Enregistrement de la tache dans le store
            dispatch(ajouter(newTodo));

            setTextTache('');

            // end addTodo
    } // End addTodo
    

   
      
    

    
    return (
     <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Ajouter une nouvelle tâche..."
              value={textTache}
              onChangeText={setTextTache}
              onSubmitEditing={addTodo}
            />
            <TouchableOpacity style={styles.addBtn} onPress={addTodo}>
              <Text style={styles.addBtnText}>+</Text>
            </TouchableOpacity>
          </View>
  )
}

export default FormAdd