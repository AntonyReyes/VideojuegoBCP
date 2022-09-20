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
      <div id="prin">

        <div id="containerUno">
          {
            user[0].genero === 'M' ?
              <h1 className='welcome' >{`Bienvenido ${user[0].name},a este juego de educación financiera`}</h1>
              :
              <h1 className='welcome' >{`Bienvenida ${user[0].name}, este juego de educación financiera`}</h1>

          }

          <h3>{` ${user[0].user}`}</h3>
          <h3>{`Saldo disponible: s/${user[0].dinner}`}</h3>

        </div>

       
        <div id="panel">
          <div id="contPanel1">

          </div>
          <div id="contPanel2" className='caja'>

          </div>
          <div id="contPanel3" className='caja1'>

          </div>
          <div id="contPanel4" className='caja2'>

          </div>
          <div id="contPanel5" className='caja3'>

          </div>

          
        
        </div>
      </div>
      
      
    )

  } else {
    return navigate('/login')
  }

}

export default Perfil