import { createSlice, combineReducers } from '@reduxjs/toolkit';

/**
 * userSlices for our redux store
 * @component react
 * @returns {Functions} 
 */

const userFormSlice = createSlice({
  name: 'formUser',
  initialState: [
  ],
  reducers: {
    getInfos :(state, payload) => {
      const newUser = {
        id : Date.now(),
        userInfo: payload,
      }
      state.push(newUser)
    },
  },
})

export const { getInfos, getBirthdate, getBlur } = userFormSlice.actions

// export default userFormSlice.reducer


const userDate = createSlice({
  name: 'dateUser',
  initialState: {birthdate : null,
  startdate: null},
  reducers: {
    getBirthDate :(state, payload) => {
      state.birthdate = payload
    },
    getStartDate :(state, payload) => {
      state.startdate = payload
    },
  },
})

export const { getBirthDate, getStartDate } = userDate.actions

export default combineReducers({
  userDateReduce: userDate.reducer,
  userFormReduce: userFormSlice.reducer
});