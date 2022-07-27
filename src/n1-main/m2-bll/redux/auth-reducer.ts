const ANY = 'ANY'

const initialState={}
export const authReducer = (state=initialState, action: any) => {
  switch (action.type) {
    case ANY :
      return state
    default:
      return state
  }
}