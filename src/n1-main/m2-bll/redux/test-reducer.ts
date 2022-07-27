const ANY = 'ANY'


const initialState={}
export const testReducer = (state=initialState, action: any) => {
  switch (action.type) {
    case ANY :
      return state
    default:
      return state
  }
}