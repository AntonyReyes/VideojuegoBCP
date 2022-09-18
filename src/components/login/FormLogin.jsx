import React from 'react'
import { useForm } from 'react-hook-form'

const FormLogin = () => {

  const {register, handleSubmit, reset} = useForm()


  const submit = data => {
   console.log(data);
  }


  return (
    <form onSubmit={handleSubmit(submit)}  className='login__form'>
      <h2 className='login__title'>Ingresar usuario y contraseña para continuar</h2>
      <div className='login__div'>
        <label className='login__label' htmlFor="email">Correo Electronico</label>
        <input 
          {...register('email')}
          className='login__input'
          type="email" 
          id="email" 
        />
      </div>
      <div className='login__div'>
        <label className='login__label' htmlFor="password">Contraseña</label>
        <input 
          {...register('password')} 
            className='login__input' 
            type="password" 
            id="password" 
        />
      </div>
      <button className='login__btn'>Login</button>
    </form>
  )
}

export default FormLogin