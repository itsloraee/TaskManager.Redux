import { styles } from '@/app/(tabs)/styles'
import React from 'react'
import { Text } from 'react-native'

const NoTask = () => {
  return (
     <Text style={styles.emptyText}>Aucune tâche pour le moment</Text>
  )

  
}

export default NoTask