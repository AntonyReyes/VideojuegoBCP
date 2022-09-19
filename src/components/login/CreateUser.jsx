import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

// const CreateUser = ({ getAllUser, updateInfoUser, setUpdateInfoUser,handleCloseForm}) => {
const CreateUser = ({ handleCloseForm, getAllUser }) => {

    const defaulltValueUser = {
        name: '',
        lastName: '',
        user: '',
        password: '',
        email: '',
    }

    const { register, handleSubmit, reset } = useForm()




    // useEffect(() => {
    //     if (updateInfoUser) {
    //         reset(updateInfoUser)
    //     }
    // }, [updateInfoUser])



    const createNewUser = data => {
        URL = 'https://sheet.best/api/sheets/358e08e4-076d-428f-a6d1-e341c5c18712'
        axios.post(URL, data)
            .then(res => {
                console.log(res.data);
                getAllUser()
            })
            .catch(err => console.log(err))
    }

    const users = useSelector(state => state.user)

    // const updateUser = data => {
    //     const URL = `http://144.126.218.162:8000/movies/${updateInfoUser.id}/`
    //     axios.patch(URL,data)
    //         .then(res => {
    //             console.log(res.data);
    //             getAllUser()
    //         })
    //         .catch(err => console.log(err))
    // }

    const submit = data => {
        // if (updateInfoUser) {
        //     updateUser(data)
        //     setUpdateInfoUser()
        // } else {

        createNewUser(data)
        reset(defaulltValueUser)
        // }

        // reset(defaulltValueUser)
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
                        type="password"
                        id='password-create'
                        placeholder='ingresar contraseña'
                        required
                        autoComplete='contraseñ122a' />
                    <input {...register('dinner')} value={2000} type="number"  hidden={true}/>
                </li>
            </ul>
            <button className='form__btn'>Crear</button>

        </form>
    )
}

export default CreateUser