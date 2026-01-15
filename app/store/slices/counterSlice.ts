import { createSlice } from '@reduxjs/toolkit';
// Iinitialisation du reducer counter
const initialState = {
    value : 0,
}

// Création du reducer counter
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) => {
            // Incrémentation de la valeur

            state.value += 1
        },
        decrement:(state)=>{
            state.value -= 1
            // Décrémentation de la valeur
        },
    }

})

export const { increment, decrement } = counterSlice.actions ;
export default counterSlice.reducer;