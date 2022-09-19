import React, { useState } from 'react'
import './styles/home.css'
import logo from './Images/logo.png'

const Home = () => {
  const [count, setCount] = useState(0)
  const b_home = () => {
    if(count===2){
      speechSynthesis.speak(new SpeechSynthesisUtterance("No pongas tu interés en el dinero, pero pon tu dinero al interés"))
    }
    if(count>5){
      setCount(0)
    }else{
    setCount(count+1)
    }
  }
  return (
    <div className='home'>
      <h1 class="h1_bvb">Bienvenido a FINANZAS PARA EMPRENDEDORES</h1>
      <img class="logo_home" src={logo} alt="" />
      <p class="p_home">El juego FINANZAS PARA EMPRENDEDORES nos ayudará a usar los diferentes conceptos de 
        la educación financiera; el futuro económico, y no económico, de una persona lo determina más la buena o mala gestión del dinero que haga esa persona que los ingresos que llegue a tener a lo largo de su vida.
      </p>
      <b onMouseEnter={b_home} class="b_home">"No pongas tu interés en el dinero, pero pon tu dinero al interés"</b>
    </div>
  )
}

export default Home