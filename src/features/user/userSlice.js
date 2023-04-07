import { createSlice, combineReducers } from '@reduxjs/toolkit';

/**
 * userSlices for our redux store
 * @component react
 * @returns {userFormSlice} 
 */

const userFormSlice = createSlice({
  name: 'formUser',
  initialState: [
  ],
  reducers: {
    getInfos: (state, payload) => {
      const newUser = {
        id: Date.now(),
        userInfo: payload,
      }
      state.push(newUser)
    },
  },
})

export const { getInfos, getBirthdate, getBlur } = userFormSlice.actions


export default combineReducers({
  userFormReduce: userFormSlice.reducer
});