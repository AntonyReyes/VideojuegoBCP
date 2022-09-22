import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setPersonal } from '../store/slices/personal.slice'

const valueDefaulInicio = {
  user: '',
  password: ''
}

const FormLogin = () => {


  const dispatch = useDispatch()

  const navigate = useNavigate()


  const [btnpassword, setBtnpassword] = useState(false)

  const btnContraseña = () => setBtnpassword(!btnpassword)


  const buscar = (array = [], obj = {}) => {
    return array.filter((a = {}) => a.user === obj.user && a.password === obj.password)
  }


  const { register, handleSubmit, reset } = useForm()

  const users = useSelector(state => state.user)

  const submit = data => {

    const aux = buscar(users, data)

    const boleano = aux.length === 1 ? true : false
    console.log(boleano);

    if (boleano) {
      dispatch(setPersonal(aux))
      navigate('/perfil')
      aux[0].genero === 'M'?
    speechSynthesis.speak(new SpeechSynthesisUtterance(`Bienvenido, ${aux[0].name},  a este juego de ,educación financiera. Su   saldo actualmente  es, ${aux[0].dinner} soles`))
    :
    speechSynthesis.speak(new SpeechSynthesisUtterance(`Bienvenida, ${aux[0].name},  a este juego de ,educación financiera. Su   saldo actualmente  es, ${aux[0].dinner} soles`))
    } else {
      speechSynthesis.speak(new SpeechSynthesisUtterance(`Contraseña incorrecta!!`));
    }

    reset(valueDefaulInicio)

  }

  const user = useSelector(state => state.personal)


  return (
    <form onSubmit={handleSubmit(submit)} className='login__form'>
      <h2 className='login__title'>Ingresar usuario y contraseña para continuar</h2>
      <div className='login__div'>
        <label className='login__label' htmlFor="txt">Usuario</label>
        <input {...register('user')} type="text" className='login__input' id="txt" required />
      </div>
      <div className='login__div'>
        <label className='login__label' htmlFor="password">Contraseña </label>
        <div className='btnHidenpassword'>
        <input {...register('password')}
          type={btnpassword?'password':'text'}
          className='login__input'
          id="password"
          autoComplete='contraseña'
          required /> <a className='btnMostrar' onClick={btnContraseña}>{btnpassword?'mostrar':'ocultar'}</a>
        </div>
      </div>
      <button className='login__btn'>Login</button>
    </form>
  )
}

export default FormLogin