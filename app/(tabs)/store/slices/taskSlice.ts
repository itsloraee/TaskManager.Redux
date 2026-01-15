import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({

    name:'task',
    initialState : [],
    reducers : {
        ajouter:()=>{
            console.log('ajouter une tâche')
        
        },

        modifier:()=>{
            console.log('modifier une tâche')

        },
        supprimer:()=>{
            console.log('supprimer une tâche')
        },
    }
});

export const { ajouter, modifier, supprimer} = taskSlice.actions;
export default taskSlice.reducer