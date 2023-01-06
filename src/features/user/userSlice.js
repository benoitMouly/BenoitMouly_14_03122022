import { createSlice, combineReducers } from '@reduxjs/toolkit';

/**
 * userSlices for our redux store
 * @component react
 * @returns {Functions} 
 */


// initialize userToken from local storage




// const initialState = {
//   firstname: false,
//   lastname: null,
//   id: null,
//   dateOfBirth: null,
//   startDate: false,
//   street: false,
//   city: false,
//   state: false,
//   zipCode: false,
//   department: false,
//   userInfo : false
// }

const userFormSlice = createSlice({
  name: 'formUser',
  initialState: [
    //     firstname: false,
    // lastname: null,
    // id: null,
    // dateOfBirth: null,
    // startDate: false,
    // street: false,
    // city: false,
    // state: false,
    // zipCode: false,
    // department: false,
    // userInfo : false
  ],
  reducers: {
    getInfos :(state, payload) => {
      const newUser = {
        id : Date.now(),
        userInfo: payload,
        // birthdate: getBirthdate(state, payload)
      }
      state.push(newUser)


    },
    // getBirthdate: (state, payload) => {
    //   state.userInfo.dateOfBirth = payload
    // },

  },
  extraReducers: {


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

// export default getDate.reducer

// export const {userDateReduce} = userDate.reducer
// export const {userFormReduce} = userFormSlice.reducer
// export default userDate.reducer

export default combineReducers({
  userDateReduce: userDate.reducer,
  userFormReduce: userFormSlice.reducer
});