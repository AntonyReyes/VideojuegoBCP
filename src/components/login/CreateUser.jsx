import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

const CreateUser = ({ handleCloseForm, getAllUser }) => {

    const [probarURL, setProbarURL] = useState('')

    const [btnpassword, setBtnpassword] = useState(false)

    const btnContraseña = () => setBtnpassword(!btnpassword)

    const defaulltValueUser = {
        name: '',
        lastName: '',
        user: '',
        password: '',
        email: '',
    }

    const { register, handleSubmit, reset } = useForm()


    const createNewUser = (data, URL) => {

        const aux = buscar(users, data.user)

        if (!aux.length) {
            axios.post(URL, data)
                .then(res => {
                    getAllUser()
                    speechSynthesis.speak(new SpeechSynthesisUtterance(`La  cuenta  fue  creada  con  exito , ingrese  nombre  de  usuario  y contraseña  para  continuar`));
                })
                .catch(setProbarURL('error'))
        } else {
            speechSynthesis.speak(new SpeechSynthesisUtterance(`El  nombre  de  usuario  ya  existe , la  cuenta  no  se pudo  crear , intente  con otro nombre   de  usuario `));
        }
    }

    const users = useSelector(state => state.user)

    const buscar = (array = [], str = '') => {
        return array.filter((a = {}) => a.user === str)
    }

    const submit = data => {
        if (!probarURL) {
            URL = 'https://sheet.best/api/sheets/3735a2c9-d84e-4ebe-a564-3e1be5135b12'
            createNewUser(data, URL)
        }
        else if (!probarURL) {
            URL = 'https://sheet.best/api/sheets/1c2b350f-7cc5-49b3-8178-72196637e217'
            createNewUser(data, URL)
            reset(defaulltValueUser)
            handleCloseForm()
            setProbarURL('')
        } else if (!probarURL) {
            URL = 'https://sheet.best/api/sheets/98c8b1da-8eb8-4662-9b34-438dda900eaa'
            createNewUser(data, URL)
            reset(defaulltValueUser)
            handleCloseForm()
            setProbarURL('')
        } else if (!probarURL) {
            URL = 'https://sheet.best/api/sheets/d5400b2e-4b88-4727-8da9-4c943af1e431'
            createNewUser(data, URL)
            reset(defaulltValueUser)
            handleCloseForm()
            setProbarURL('')
        } else if (!probarURL) {
            URL = 'https://sheet.best/api/sheets/7a87d41d-7625-4ff5-b61e-8f62180f6bb1'
            createNewUser(data, URL)
            reset(defaulltValueUser)
            handleCloseForm()
            setProbarURL('')
        } else if (!probarURL) {
            URL = 'https://sheet.best/api/sheets/dfe1da45-127b-4365-834d-1b2689c15760'
            createNewUser(data, URL)
            reset(defaulltValueUser)
            handleCloseForm()
            setProbarURL('')
        } else if (!probarURL) {
            URL = 'https://sheet.best/api/sheets/2e30734c-7ab4-4450-9818-defe36ae5b41'
            createNewUser(data, URL)
            reset(defaulltValueUser)
            handleCloseForm()
            setProbarURL('')
        }
        reset(defaulltValueUser)
        handleCloseForm()

    }

    const closeForm = () => {
        handleCloseForm()
        // setUpdateInfoUser()
        // reset(defaulltValueUser)
    }
    return (

        <form onSubmit={handleSubmit(submit)} className='form'>

            <div onClick={closeForm} className='form_x'>X</div>
            <h2 className='form__title'>Crear cuenta</h2>
            <ul className='form__list'>
                <li className='form__item'>
                    <label htmlFor="name">Nombre</label>
                    <input {...register('name')} type="text" id='name' placeholder='Carlos Erick' required />
                </li>
                <li className='form__item'>
                    <label htmlFor="last_name">Apellidos</label>
                    <input {...register('lastName')} type="text" id='last_name' placeholder='Reyes Pérez' required />
                </li>

                <li className='form__item'>
                    <label htmlFor="last_genero">Genero: </label>
                    <div>
                        <div>
                            <label htmlFor="last_genero1">Masculino: </label>
                            <input {...register('genero')} type="radio" id='last_genero1' required value={'M'} />
                        </div>

                        <div>
                            <label htmlFor="last_genero2">Femenino: </label>
                            <input {...register('genero')} type="radio" id='last_genero2' required value={'F'} />
                        </div>
                    </div>

                </li>

                <li className='form__item'>
                    <label htmlFor="email-create">Correo Electronico</label>
                    <input {...register('email')} type="email" id='email-create' placeholder='example@gmail.com' required />
                </li>

                <li className='form__item'>
                    <label htmlFor="name_user">Nombre de usuario</label>
                    <input {...register('user')} type="text" id='name_user' placeholder='usuario123' required />
                </li>

                <li className='form__item'>
                    <label htmlFor="password-create">Contraseña</label>
                    <input {...register('password')}
                        type={btnpassword?'password':'text'}
                        id='password-create'
                        placeholder='ingresar contraseña'
                        required
                        autoComplete='contraseñ122a' /><a className='btnMostrar' onClick={btnContraseña}>{btnpassword?'mostrar contraseña':'ocultar contraseña'}</a>
                    <input {...register('dinner')} value={2000} type="number" hidden={true} />
                </li>
            </ul>
            <button className='form__btn'>Crear</button>

        </form>
    )
}

export default CreateUser