import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CreateUser from './CreateUser'
import FormLogin from './FormLogin'
import './styles/login.css'



const Login = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

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
        <CreateUser
          // getAllUser={getAllUser}
          // updateInfoUser={updateInfoUser}
          // setUpdateInfoUser={setUpdateInfoUser}
          handleCloseForm={handleCloseForm}
        />
      </div>

    </div>
  )
}

export default Login