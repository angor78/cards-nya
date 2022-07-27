import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
export const Header = () => {

  return(
    <div>
      <div className={s.navLinks}>
        <NavLink className={({ isActive }) => (isActive ? s.active : 'inactive')} to={'/login'}>Login</NavLink>
        <NavLink className={({ isActive }) => (isActive ? s.active : 'inactive')} to={'/register'}>Register</NavLink>
        <NavLink className={({ isActive }) => (isActive ? s.active : 'inactive')} to={'/profile'}>Profile</NavLink>
        <NavLink className={({ isActive }) => (isActive ? s.active : 'inactive')} to={'/restore-password'}>Restore password</NavLink>
        <NavLink className={({ isActive }) => (isActive ? s.active : 'inactive')} to={'/enter-new-password'}>New password</NavLink>
        <NavLink className={({ isActive }) => (isActive ? s.active : 'inactive')} to={'/test'}>Test</NavLink>
      </div>
    </div>
  )
}