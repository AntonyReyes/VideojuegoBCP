import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setPersonal } from '../store/slices/personal.slice'

const valueDefaulInicio = {
  user: '',
  password: ''
}

const FormLogin = () => {

  

  // useEffect(() => {
  //   URL = 'https://sheet.best/api/sheets/451ba931-12de-4557-8249-2264fb78c2ae'
  //   axios.get(URL)
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err))
  // }, [])


  // const data = {
  //   id: 1,
  //   name:'Carlos jose',
  //   lastName: 'Villanueva Medina',
  //   user: 'Carlos',
  //   password: '12345',
  //   email: 'carlos@gmail.com',
  // }



  // console.log(data);

  //   useEffect(() => {
  //     URL = 'https://sheet.best/api/sheets/451ba931-12de-4557-8249-2264fb78c2ae'
  //     axios.post(URL, data)
  //         .then(res => {
  //             console.log(res.data);
  //         })
  //         .catch(err => console.log(err))
  // }, [])

  // useEffect(() => {
  //     URL = 'https://sheet.best/api/sheets/451ba931-12de-4557-8249-2264fb78c2ae'
  //     axios.post(URL, data)
  //         .then(res => {
  //             console.log(res.data);
  //         })
  //         .catch(err => console.log(err))
  // }, [])

  const dispatch = useDispatch()

  const navigate = useNavigate()





  const buscar = (array = [], obj = {}) => {
    return array.filter((a = {}) => a.user === obj.user && a.password === obj.password)
  }


  const { register, handleSubmit, reset } = useForm()

  const users = useSelector(state => state.user)

  const submit = data => {

    const aux = buscar(users, data)


    console.log(data);
    console.log(users);
    console.log(aux);
    const boleano = aux.length === 1 ? true : false
    console.log(boleano);

    if (boleano) {
      dispatch(setPersonal(aux))
      navigate('/perfil')
      aux[0].genero === 'M'?
    speechSynthesis.speak(new SpeechSynthesisUtterance(`Bienvenido, ${aux[0].name},a este juego de ,educación financiera. Su   saldo actualmente  es, ${aux[0].dinner} soles`))
    :
    speechSynthesis.speak(new SpeechSynthesisUtterance(`Bienvenida, ${aux[0].name}, a este juego de ,educación financiera. Su   saldo actualmente  es, ${aux[0].dinner} soles`))
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
        <label className='login__label' htmlFor="password">Contraseña</label>
        <input {...register('password')}
          type="password"
          className='login__input'
          id="password"
          autoComplete='contraseña'
          required />
      </div>
      <button className='login__btn'>Login</button>
    </form>
  )
}

export default FormLogin