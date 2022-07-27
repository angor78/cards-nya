import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import NewPassword from "./pages/NewPassword";
import Error404 from "./pages/Error404";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RestorePassword from "./pages/RestorePassword";
import Profile from "./pages/Profile";
import {Test} from "./pages/Test";

export const PATH = {
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  RESTORE_PASSWORD: '/restore-password',
  ENTER_NEW_PASSWORD: '/enter-new-password',
  TEST: '/test',
}

function Pages() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Navigate to={PATH.LOGIN}/>}/>
        <Route path={PATH.LOGIN} element={<Login/>}/>
        <Route path={PATH.REGISTER} element={<Register/>}/>
        <Route path={PATH.PROFILE} element={<Profile/>}/>
        <Route path={PATH.RESTORE_PASSWORD} element={<RestorePassword/>}/>
        <Route path={PATH.ENTER_NEW_PASSWORD} element={<NewPassword/>}/>
        <Route path={PATH.TEST} element={<Test/>}/>

        <Route path={'/*'} element={<Error404/>}/>
      </Routes>
    </div>
  )
}

export default Pages