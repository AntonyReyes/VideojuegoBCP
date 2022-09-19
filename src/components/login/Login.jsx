import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../store/slices/user.slice'
import CreateUser from './CreateUser'
import FormLogin from './FormLogin'
import './styles/login.css'



const Login = () => {

  const dispatch = useDispatch()



  const getAllUser = () => {
    URL = 'https://sheet.best/api/sheets/358e08e4-076d-428f-a6d1-e341c5c18712'
    axios   .get(URL)
        .then( res => dispatch(setUser(res.data)))
        .catch(err => console.log(err))
  }

  useEffect(() => {
  getAllUser()
}, [])

const users = useSelector(state => state.user)




// console.log(createId);

  // const dispatch = useDispatch()

  // const navigate = useNavigate()

  // modal

  

  const [isFormOpen, setIsFormOpen] = useState()

  const handleOpenForm = () => setIsFormOpen(true)

  const handleCloseForm = () => setIsFormOpen(false)

  return (
    <div className='card_login'>
      <div className='card_login_1-1'>
      <FormLogin/>
        <p className='p_aun_no_registrado'>Aun no esta registrado? <span
        onClick={handleOpenForm} 
        className='card_open_form'>Crear cuenta</span></p>
      </div>

      <div className={isFormOpen ? 'form-container' : 'form-none'}>
        <CreateUser handleCloseForm={handleCloseForm} getAllUser={getAllUser}/>
      </div>

    </div>
  )
}

export default Login