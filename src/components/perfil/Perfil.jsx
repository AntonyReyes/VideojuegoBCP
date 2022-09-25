import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PagoDeServicios from './pago de servicios/PagoDeServicios';
import PlanAhorro from './plan de ahorro/PlanAhorro';
import { Presupuesto } from './presupuesto/Presupuesto';
import './styles/perfil.css'
import './styles/images.css'
import casa1 from './images/Casas/level1.png'
import casa2 from './images/Casas/level2.jpg'
import casa3 from './images/Casas/level3.jpg'
import casa4 from './images/Casas/level4.jpg'
import carro1 from './images/Autos/level1.png'
import carro2 from './images/Autos/level2.jpg'
import carro3 from './images/Autos/level3.png'
import carro4 from './images/Autos/level4.png'
import telefono1 from './images/Telefono/level1.png'
import telefono2 from './images/Telefono/level2.jpg'
import telefono3 from './images/Telefono/level3.jpg'
import telefono4 from './images/Telefono/level4.png'
import tienda1 from './images/Tiendas/level1.jpg'
import tienda2 from './images/Tiendas/level2.jpg'
import tienda3 from './images/Tiendas/level3.jpg'
import tienda4 from './images/Tiendas/level4.jpg'

import Time from './timer/Time';
import audio1 from './audios/a1.mp3'


const Perfil = () => {

  const navigate = useNavigate()

  const user = useSelector(state => state.personal)


  const [planAhorro, setPlanAhorro] = useState(false)

  const [pagoServicios, setPagoServicios] = useState(false)

  const [presupuesto, setPresupuesto] = useState(false)

  const [num_infijo, setNum_infijo] = useState(false)

  const [num_planAhorro, setnum_planAhorro] = useState(false)

  const [num_pagoServicios, setnum_pagoServicios] = useState(false)

  useEffect( () => {
    if(num_infijo == true){
      speechSynthesis.speak(new SpeechSynthesisUtterance(`tus  ingresos  fijos  son  aquellos  que  
      percibes  regularmente  como  por  ejemplo  
      la  renta  de  tus  propiedades
      Tus  ingresos  fijos  son  aquellos  que  
      percibes  regularmente  como  por  ejemplo  
      la  renta  de  tus  propiedades`))
    }

    if(num_planAhorro == true){
      speechSynthesis.speak(new SpeechSynthesisUtterance(`Aquí  pagarás  tus  servicios  de  agua,  luz,  internet,  cable.  Recuerda  que  cuanto  más  nivel  tenga  tu  propiedad  estos  gastos  seran  mayores  también
      Tambien  pagarás  tus  servicios  de  agua,  luz,  internet,  cable.  Recuerda  que  cuanto  más  nivel  tenga  tu  propiedad  estos  gastos  seran  mayores  también`))
    }

    if(num_pagoServicios == true){
      speechSynthesis.speak(new SpeechSynthesisUtterance(`pago de servicios`))
    }

},[num_infijo, num_planAhorro, num_pagoServicios])
  
console.log(num_infijo);
  

  const abrirPlanAhorro = () => {
    setPlanAhorro(!planAhorro)
    if (pagoServicios === true) {
      setPagoServicios(false)
    } else if (presupuesto === true) {
      setPresupuesto(false)
    }
  }


  const abrirPagoServicios = () => {
    setPagoServicios(!pagoServicios)
    if (planAhorro === true) {
      setPlanAhorro(false)
    } else if (presupuesto === true) {
      setPresupuesto(false)
    }
  }

  const abrirPresupuesto = () => {
    setPresupuesto(!presupuesto)
    if (planAhorro === true) {
      setPresupuesto(false)
    } else if (pagoServicios === true) {
      setPagoServicios(false)
    }
  }


  if (user[0] !== undefined) {
    return (
      <div id="prin">

        {/* <video width="350" height="280" controls='' autoplay loop>
          <source src={audio1} type="video/mp4" />
        </video> */}

        <embed src={audio1} autoSave ={true} loop={true} onVolumeChange={50} width={0} height={0}/>

        <div id="containerUno">
          {
            user[0].genero === 'M' ?
              <h2 className='welcome' >{`Bienvenido ${user[0].name} a este juego de educación financiera`}</h2>
              :
              <h2 className='welcome' >{`Bienvenida ${user[0].name} este juego de educación financiera`}</h2>

          }

          <h3 className='welcome1'>{` ${user[0].user}`}</h3>
          <h3 className='welcome1'>{`Saldo disponible: s/${user[0].dinner}`}</h3>

          {
            user[0].genero === 'M' ?
              <img className='img_perfil' src="https://img.freepik.com/vector-premium/icono-usuario-hombre-traje-negocios_454641-453.jpg?w=2000" alt="" />
              :
              <img className='img_perfil' src="https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_960_720.png" alt="" />
          }

        </div>

        <hr className='hr_perfil' />

        <div className='container_btn_perfil'>
          <button onClick={abrirPlanAhorro} className='clasBtn'>Plan de ahoroo</button>

          <button onClick={abrirPagoServicios} className='clasBtn'>Pago de servicios</button>


          <button onClick={abrirPresupuesto} className='clasBtn'>Presupuesto</button>
          <div className='caja1'></div>
        </div>

        <div>
          <div>
            {
              planAhorro ?
                <PlanAhorro 
                setnum_planAhorro = {setnum_planAhorro}
                name={`${user[0].name}`} lastname={`${user[0].lastName}`} />
                :
                ''
            }
          </div>

          <div>
            {
              pagoServicios ?
                <PagoDeServicios
                setnum_pagoServicios = {setnum_pagoServicios}
                name={`${user[0].name}`} lastname={`${user[0].lastName}`} />
                :
                ''
            }
          </div>
          <div>
            {
              presupuesto ?
                <Presupuesto 
                setNum_infijo = {setNum_infijo}
                name={`${user[0].name}`} lastname={`${user[0].lastName}`} />
                :
                ''
            }
          </div>
        </div>

        <h2 className='tienda_title'>Tienda de compras</h2>
        <div className='casas_general'>
          <div className='continer_casas'>
            <img className='casita' src={casa1} alt="" />
            <button className='btn_casa'>Comprar s/ 10 000</button>
          </div>
          <div className='continer_casas'>
            <img className='casita' src={casa2} alt="" />
            <button className='btn_casa'>Comprar s/ 20 000</button>
          </div>
          <div className='continer_casas'>
            <img className='casita' src={casa3} alt="" />
            <button className='btn_casa'>Comprar s/ 50 000</button>
          </div>
          <div className='continer_casas'>
            <img className='casita' src={casa4} alt="" />
            <button className='btn_casa'>Comprar s/ 100 000</button>
          </div>
        </div>

        <h2 className='tienda_title'>Tienda de autos</h2>
        <div className='casas_general'>
          <div className='continer_casas'>
            <img className='casita' src={carro1} alt="" />
            <button className='btn_casa'>Comprar s/ 20 000</button>
          </div>
          <div className='continer_casas'>
            <img className='casita' src={carro2} alt="" />
            <button className='btn_casa'>Comprar s/ 80 000</button>
          </div>
          <div className='continer_casas'>
            <img className='casita' src={carro3} alt="" />
            <button className='btn_casa'>Comprar s/ 100 000</button>
          </div>
          <div className='continer_casas'>
            <img className='casita' src={carro4} alt="" />
            <button className='btn_casa'>Comprar s/ 1 000 000</button>
          </div>
        </div>

        <h2 className='tienda_title'>Tienda de teléfonos</h2>
        <div className='casas_general'>
          <div className='continer_casas'>
            <img className='casita' src={telefono1} alt="" />
            <button className='btn_casa'>Comprar s/ 10 000</button>
          </div>
          <div className='continer_casas'>
            <img className='casita' src={telefono2} alt="" />
            <button className='btn_casa'>Comprar s/ 20 000</button>
          </div>
          <div className='continer_casas'>
            <img className='casita' src={telefono3} alt="" />
            <button className='btn_casa'>Comprar s/ 50 000</button>
          </div>
          <div className='continer_casas'>
            <img className='casita' src={telefono4} alt="" />
            <button className='btn_casa'>Comprar s/ 100 000</button>
          </div>
        </div>

        <h2 className='tienda_title'>Tienda de teléfonos</h2>
        <div className='casas_general'>
          <div className='continer_casas'>
            <img className='casita' src={tienda1} alt="" />
            <button className='btn_casa'>Comprar s/ 10 000</button>
          </div>
          <div className='continer_casas'>
            <img className='casita' src={tienda2} alt="" />
            <button className='btn_casa'>Comprar s/ 20 000</button>
          </div>
          <div className='continer_casas'>
            <img className='casita' src={tienda3} alt="" />
            <button className='btn_casa'>Comprar s/ 50 000</button>
          </div>
          <div className='continer_casas'>
            <img className='casita' src={tienda4} alt="" />
            <button className='btn_casa'>Comprar s/ 100 000</button>
          </div>
        </div>

        <div>
          <Time />
        </div>

      </div>


    )

  } else {
    return navigate('/login')
  }

}

export default Perfil