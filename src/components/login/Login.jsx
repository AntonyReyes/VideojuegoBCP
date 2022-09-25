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

  const [probarURL, setProbarURL] = useState('')

  const getAllUser = (URL) => {
    axios.get(URL)
      .then(res => dispatch(setUser(res.data)))
      .catch(err => setProbarURL('error'))
  }


  useEffect(() => {

    if(!probarURL){
      URL = 'https://sheet.best/api/sheets/3735a2c9-d84e-4ebe-a564-3e1be5135b12'
      getAllUser(URL)
    }
    else if (!probarURL) {
      URL = 'https://sheet.best/api/sheets/1c2b350f-7cc5-49b3-8178-72196637e217'
      getAllUser(URL)
      setProbarURL('')
    }else if (!probarURL) {
      URL = 'https://sheet.best/api/sheets/98c8b1da-8eb8-4662-9b34-438dda900eaa'
      getAllUser(URL)
      setProbarURL('')
    }else if (!probarURL) {
      URL = 'https://sheet.best/api/sheets/d5400b2e-4b88-4727-8da9-4c943af1e431'
      getAllUser(URL)
      setProbarURL('')
    }else if (!probarURL) {
      URL = 'https://sheet.best/api/sheets/7a87d41d-7625-4ff5-b61e-8f62180f6bb1'
      getAllUser(URL)
      setProbarURL('')
    }else if (!probarURL) {
      URL = 'https://sheet.best/api/sheets/dfe1da45-127b-4365-834d-1b2689c15760'
      getAllUser(URL)
      setProbarURL('')
    }else if (!probarURL) {
      URL = 'https://sheet.best/api/sheets/90858d00-4332-4751-aa74-51d7ead633ee'
      getAllUser(URL)
      setProbarURL('')
    }else if (!probarURL) {
      URL = 'https://sheet.best/api/sheets/6601bb6a-4361-4ad9-9345-a4ccb60fd3b6'
      getAllUser(URL)
      setProbarURL('')
    }
    else if (!probarURL) {
      URL = 'https://sheet.best/api/sheets/6bc4e13f-3887-47d5-bab2-434ef763aca2'
      getAllUser(URL)
      setProbarURL('')
    }
    else if (!probarURL) {
      URL = 'https://sheet.best/api/sheets/ac380ec2-ea7d-4c23-82b6-8b14d4f0be5c'
      getAllUser(URL)
      setProbarURL('')
    }
    else if (!probarURL) {
      URL = 'https://sheet.best/api/sheets/89e7297b-3764-493f-b2d8-ceaf0b2bd21d'
      getAllUser(URL)
      setProbarURL('')
    }
    else if (!probarURL) {
      URL = 'https://sheet.best/api/sheets/fc28cb83-5244-4504-9a6c-0960bb65aad6'
      getAllUser(URL)
      setProbarURL('')
    }
    

  }, [])

  const users = useSelector(state => state.user)


  const [isFormOpen, setIsFormOpen] = useState()

  const handleOpenForm = () => setIsFormOpen(true)

  const handleCloseForm = () => setIsFormOpen(false)

  return (
    <div className='card_login'>
      <div className='card_login_1-1'>
        <FormLogin />
        <p className='p_aun_no_registrado'>Aun no esta registrado? <span
          onClick={handleOpenForm}
          className='card_open_form'>Crear cuenta</span></p>
      </div>

      <div className={isFormOpen ? 'form-container' : 'form-none'}>
        <CreateUser handleCloseForm={handleCloseForm} getAllUser={getAllUser} />
      </div>

    </div>
  )
}

export default Login