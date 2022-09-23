import React, { useEffect, useState } from 'react'
import './styles/planAhorros.css'

const PlanAhorro = ({ name, lastname }) => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setCounter(counter+1)
        if(counter === 1){
            speechSynthesis.speak(new SpeechSynthesisUtterance(`Excelente!!  ${name} ${lastname} 
            crear  un  plan  de  ahorros  es  un  paso  muy  importante  
            para  mejorar tu  situación  financiera`));
             console.log(counter);
        }

        if(counter ==5){
            setCounter(0)
        }
      }, [])

  return (
    <div className='container-planAhorros'>
    <h3 className='title'>{`Plan de ahorro  de ${name} ${lastname}`}</h3>

    <table className='table_plan_Ahorros'>
      <tr>
        <th>Metas de Ahorro</th>
        <th> Monto total a ahorrar</th>
        <th>Número de meses para ahorrar</th>
        <th>Cuanto ahorrará por mes</th>
      </tr>
      <tr>
        <td className='td'>
          <div className='planAhorros_label'>
            <p>Metas de corto plazo</p>
            <input type="text" placeholder='Ej: Zapatos' />
          </div>
        </td>
        <td className='td'>
          <div className='planAhorros_label'>
            <input type="number" placeholder='Ej: s/300' />
          </div>
        </td>
        <td className='td'>
          <div className='planAhorros_label'>
            <input type="number" placeholder='Ej: 6 meses' />
          </div>
        </td>
        <td className='td'>
          <div className='planAhorros_label'>
            <input type="number" placeholder='Ej: S/50' />
          </div>
        </td>
      </tr>
      <tr>
        <td className='td'>
          <div className='planAhorros_label'>
            <p>Metas de mediano plazo</p>
            <input type="text" placeholder='Ej: Computadora' />
          </div>
        </td>
        <td className='td'>
          <div className='planAhorros_label'>
            <input type="number" placeholder='Ej: s/2000' />
          </div>
        </td>
        <td className='td'>
          <div className='planAhorros_label'>
            <input type="number" placeholder='Ej: 18 meses' />
          </div>
        </td>
        <td className='td'>
          <div className='planAhorros_label'>
            <input type="number" placeholder='Ej: S/112' />
          </div>
        </td>
      </tr>
      <tr>
        <td className='td'>
          <div className='planAhorros_label'>
            <p>Metas de largo plazo</p>
            <input type="text" placeholder='Ej: Titulo universitario' />
          </div>
        </td>
        <td className='td'>
          <div className='planAhorros_label'>
            <input type="number" placeholder='Ej: s/3000' />
          </div>
        </td>
        <td>
          <div className='planAhorros_label'>
            <input type="number" placeholder='Ej: 50 meses' />
          </div>
        </td>
        <td className='td'>
          <div className='planAhorros_label'>
            <input type="number" placeholder='Ej: S/70' />
          </div>
        </td>
      </tr>

      <tr>
        <td className='td'>
          <div className='planAhorros_label'>
            <p>Fondo de emergencia</p>
          </div>
        </td>
        <td className='td'>
          <div className='planAhorros_label'>
            <input type="number" placeholder='Ej: s/3000' />
          </div>
        </td>
        <td className='td'>
          <div className='planAhorros_label'>
            <input type="number" placeholder='Ej: 30 meses' />
          </div>
        </td>
        <td className='td'>
          <div className='planAhorros_label'>
            <input type="number" placeholder='Ej: S/100' />
          </div>
        </td>
      </tr>

      <tr>
        <td className='td_null'></td>
        <td className='td'>
          <div className='planAhorros_label'>
            <p>Total de ahorros requeridos</p>
            <input type="number" placeholder='Ej: $9.300' />
          </div>
        </td>
        <td className='td_null'></td>
        <td className='td'>
          <div className='planAhorros_label'>
            <p>Total de ahorro cada mes</p>
            <input type="number" placeholder='Ej: 332' />
          </div>
        </td>
      </tr>

    </table>
  </div>
  )
}

export default PlanAhorro