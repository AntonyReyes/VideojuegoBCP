import React, { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './presupuesto.css'

export const Presupuesto = ({ setNum_infijo }) => {

  const [val, setVal] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()
    e.target.name.value.trim()
  }

  useEffect(() => {
    setNum_infijo(true)
  }, [])

  return (
    <form className='containerForm-Presupuesto' >
      <div className='c1'>
        <h3>Ingresos totales</h3>
        <p>Ingresos fijos</p>
        <input />
        <p>Ingresos variables</p>
        <input type="number" />
        <h3>{`Gastos totales: ${val}`}</h3>
      </div>
    </form>
  )
}
