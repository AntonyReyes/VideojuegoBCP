import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles/perfil.css'

const Perfil = () => {
  
  const navigate = useNavigate()



  const user = useSelector(state => state.personal)

  console.log(user[0] === undefined);
  

  if (user[0] !== undefined) {
    return (
      <div >
  
        <div id="containerUno">
        {
          user[0].genero === 'M'?
          <h1 className='welcome' >{`Bienvenido ${user[0].name},a este juego de educación financiera`}</h1>
          :
          <h1 className='welcome' >{`Bienvenida ${user[0].name}, este juego de educación financiera`}</h1>
          
        }
        
        <h3>{` ${user[0].user}`}</h3>
        <h3>{`Saldo disponible: s/${user[0].dinner}`}</h3>

        </div>
  
        <hr />
        <h3>Datos de la cuenta</h3>
        <hr />
  
        <ul>
          <li>{`Nombre(s): ${user[0].name}`}</li>
          <li>{`Apellido(s): ${user[0].lastName}`}</li>
          <li>{`Nombre de usuario: ${user[0].user}`}</li>
          <li>{`Estado de cuenta: s/${user[0].dinner}`}</li>
        </ul>
  
        <hr />
      </div>
    )
  }else{
    return navigate('/login')
  }

}

export default Perfil