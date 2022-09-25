import React, { useEffect } from 'react'
import './pagoServicios.css'

const PagoDeServicios = ({setnum_pagoServicios}) => {

  useEffect(() => {
    setnum_pagoServicios(true)
  }, [])

  return (
    <div className='pagoServicios'>
        <h3 className='title_pago_servicios'>Pago de servicios</h3>
        <ul>
            <li>Pago de agua: <b>s/50</b></li>
            <li>Pago de Luz <b>s/120</b></li>
            <li>Pago de internet <b>s/60</b></li>
            <li>Pago de linea de telefono <b>s/35</b></li>
        </ul>
        <button>pagar de servicios basicos</button>
    </div>
  )
}

export default PagoDeServicios