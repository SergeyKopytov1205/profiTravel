const ADD_PHONE_NUMBER = 'ADD_PHONE_NUMBER'

const initialState = {
   phoneNumbers: [
      9991112233,
      9992223344,
      9993334455,
      9228374628,
      9474632222,
      9303837633,
      9372728292,
      9752526272,
      9373625262,
      9272624262
   ]
}

export default function phoneNumbersReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_PHONE_NUMBER:
         const arrayNumbers = state.phoneNumbers
         arrayNumbers.push(action.payload)
         console.log(arrayNumbers);
         return { ...state, phoneNumbers: arrayNumbers }
      default:
         return state
   }
}

export const addPhoneNumber = (number) => ({ type: ADD_PHONE_NUMBER, payload: number })