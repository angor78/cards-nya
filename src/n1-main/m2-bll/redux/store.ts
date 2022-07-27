import {combineReducers, legacy_createStore} from "redux";
import {authReducer} from "./auth-reducer";
import {testReducer} from "./test-reducer";
import {profileReducer} from "./profile-reducer";


let rootReducer = combineReducers({
  profile: profileReducer,
  auth: authReducer,
  test: testReducer
})
// export type AppStateType = ReturnType<typeof rootReducer>

let store = legacy_createStore(rootReducer)

export default store