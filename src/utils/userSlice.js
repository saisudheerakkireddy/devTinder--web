import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name : 'user',
    initialState : null,
    reducers : { //in appstore it is reducer and here it is reducers
        addUser : (state,action) => {
            return action.payload;
        },
        removeUser : (state,action) => {
            return null;
        }
    }
})

export const {addUser,removeUser} = userSlice.actions
 
export default userSlice.reducer;