import React from 'react'
import { useForm } from 'react-hook-form'

// const CreateUser = ({ getAllUser, updateInfoUser, setUpdateInfoUser,handleCloseForm}) => {
const CreateUser = ({handleCloseForm }) => {

    const defaulltValueUser = {
        name: '',
        genre: '',
        duration: '',
        release_date: '',
        password: ''
    }

    const { register, handleSubmit, reset } = useForm()

    // useEffect(() => {
    //     if (updateInfoUser) {
    //         reset(updateInfoUser)
    //     }
    // }, [updateInfoUser])

    // const createNewUser = data => {
    //     const URL = 'http://144.126.218.162:8000/movies/'
    //     axios.post(URL, data)
    //         .then(res => {
    //             console.log(res.data);
    //             getAllUser()
    //         })
    //         .catch(err => console.log(err))
    // }

    // const updateUser = data => {
    //     const URL = `http://144.126.218.162:8000/movies/${updateInfoUser.id}/`
    //     axios.patch(URL,data)
    //         .then(res => {
    //             console.log(res.data);
    //             getAllUser()
    //         })
    //         .catch(err => console.log(err))
    // }

    // const submit = data => {
    //     if (updateInfoUser) {
    //         updateUser(data)
    //         setUpdateInfoUser()
    //     } else {
    //         createNewUser(data)
    //         reset(defaulltValueUser)
    //     }

    //     reset(defaulltValueUser)
    //     handleCloseForm()
    // }

    const closeForm = () => {
        handleCloseForm()
        // setUpdateInfoUser()
        reset(defaulltValueUser)
    }



    return (

        <form className='form'>
            <div onClick={closeForm} className='form_x'>X</div>
            <h2 className='form__title'>
                {/* {updateInfoUser ? 'Update User' : 'Create new user'} */}
                Crear cuenta
            </h2>
            <ul className='form__list'>
                <li className='form__item'>
                    <label htmlFor="name">Nombre</label>
                    <input {...register('name')} type="text" id='name' placeholder='Carlos Erick' required />
                </li>
                <li className='form__item'>
                    <label htmlFor="last_name">Apellidos</label>
                    <input {...register('genre')} type="text" id='last_name' placeholder='Reyes Pérez' required />
                </li>
                <li className='form__item'>
                    <label htmlFor="email">Correo Electronico</label>
                    <input {...register('duration')} type="email" id='email' placeholder='example@gmail.com' required />
                </li>

                <li className='form__item'>
                    <label htmlFor="last_name">Nombre de usuario</label>
                    <input {...register('genre')} type="text" id='last_name' placeholder='Reyes Pérez' required />
                </li>
                
                <li className='form__item'>
                    <label htmlFor="password">Contra</label>
                    <input {...register('release_date')} type="password" id='password' placeholder='password' required />
                </li>
                <li className='form__item'>
                    <label htmlFor="birthday">Birthday</label>
                    <input {...register('release_date')} type="date" id='birthday' required />
                </li>
            </ul>
            <button className='form__btn'>
                {/* {updateInfoUser ? 'Update' : 'Create'} */}
                Create
            </button>
        </form>






        //     <form onSubmit={handleSubmit(submit)} className='form'>
        //     <div onClick={closeForm} className='form_x'>X</div>
        //     <h2 className='form__title'>
        //         {updateInfoUser ? 'Update User' : 'Create new user'}
        //     </h2>
        //     <ul className='form__list'>
        //         <li className='form__item'>
        //             <label htmlFor="name">First name</label>
        //             <input {...register('name')} type="text" id='name' placeholder='first name' required />
        //         </li>
        //         <li className='form__item'>
        //             <label htmlFor="last_name"> Last Name</label>
        //             <input {...register('genre')} type="text" id='last_name' placeholder='last name' required/>
        //         </li>
        //         <li className='form__item'>
        //             <label htmlFor="email">Email</label>
        //             <input {...register('duration')} type="email" id='email' placeholder='example@academlo.com' required/>
        //         </li>
        //         <li className='form__item'>
        //             <label htmlFor="password">Password</label>
        //             <input {...register('release_date')} type="password" id='password' placeholder='password' required/>
        //         </li>
        //         <li className='form__item'>
        //             <label htmlFor="birthday">Birthday</label>
        //             <input {...register('release_date')} type="date" id='birthday'  required />
        //         </li>
        //     </ul>
        //     <button className='form__btn'>{updateInfoUser ? 'Update' : 'Create'}</button>
        // </form>
    )
}

export default CreateUser