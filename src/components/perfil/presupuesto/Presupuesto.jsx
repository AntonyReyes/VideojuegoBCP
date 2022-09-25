import React, { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './presupuesto.css'

export const Presupuesto = ({ setNum_infijo }) => {

  const [val, setVal] = useState(0)

  const { handleSubmit, register } = useForm()

  const submit = data => {
    setVal(data)
    console.log(data);
  }

  useEffect(() => {
    setNum_infijo(true)
  }, [])

  return (
    <form onChange={handleSubmit(submit)} className='containerForm-Presupuesto' >

      <div className='c1'>
        <h3>Ingresos totales</h3>
        <label className='login__label' htmlFor="a1">Ingresos fijos</label>
        <input {...register('a1')} type="number" className='login__input' id="a1" required placeholder='ej: s/2000' />
        <label className='login__label' htmlFor="a2">Ingresos variables</label>
        <input {...register('a2')} type="number" className='login__input' id="a2" required placeholder='ej: s/500' />
        <h3>{`Gastos totales: `} <input {...register('gastosTotales')} className='login__input' value={((+val.a1 + +val.a2)) ?
          ((+val.a1 + +val.a2)) && (+val.a1 + +val.a2) :
          'Calculo automatico'} placeholder='Calculo automatico' /></h3>
      </div>

      <div className='c2'>
        <h3>Gastos fijos</h3>

        <div className='c1_1'>
          <div className='c1_1'>
            <label className='login__label' htmlFor="b1">Alquiler: </label>
            <input {...register('b1')} type="number" className='login__input' id="b1" placeholder='ej: 400  *opcional' />
          </div>

          <div className='c1_1'>
            <label className='login__label' htmlFor="b2">Servicio {`(luz, agua, gas)`}: </label>
            <input {...register('b2')} type="number" className='login__input' id="b2" required placeholder='ej: s/200' />
          </div>
        </div>

        <div className='c1_1'>
          <div className='c1_1'>
            <label className='login__label' htmlFor="b3">Transaporte: </label>
            <input {...register('b3')} type="number" className='login__input' id="b3" required placeholder='ej: s/200' />
          </div>

          <div className='c1_1'>
            <label className='login__label' htmlFor="b4">Alimentación: </label>
            <input {...register('b4')} type="number" className='login__input' id="b4" required placeholder='ej: s/400' />
          </div>
        </div>

        <div className='c1_1'>
          <div className='c1_1'>
            <label className='login__label' htmlFor="b5">Pago de deudas: </label>
            <input {...register('b5')} type="number" className='login__input' id="b5" placeholder='ej: s/300' />
          </div>

          <div className='c1_1'>
            <label className='login__label' htmlFor="b6">Educación: </label>
            <input {...register('b6')} type="number" className='login__input' id="b6" required placeholder='ej: s/250' />
          </div>
        </div>

        <div className='c1_1'>
          <label className='login__label' htmlFor="b7">Fondo de emergencia: </label>
          <input {...register('b7')} type="number" className='login__input' id="b7" required placeholder='ej: s/250' />
        </div>

        <div className='c1_1'>
          <h3>{`Gastos fijos: `} <input {...register('gastosFijos')} className='login__input' value={(+val.b1 + +val.b2 + +val.b3 + +val.b4 + +val.b5 + +val.b6 + +val.b7) ?
            (+val.b1 + +val.b2 + +val.b3 + +val.b4 + +val.b5 + +val.b6 + +val.b7) && (+val.b1 + +val.b2 + +val.b3 + +val.b4 + +val.b5 + +val.b6 + +val.b7)
            :
            'Calculo automatico'} placeholder='Calculo automatico' /></h3>
        </div>
      </div>


      <div className='c3'>
        <h3>Gastos variables</h3>
        <label className='login__label' htmlFor="c1">Vestimenta y calzado</label>
        <input {...register('c1')} type="number" className='login__input' id="c1" required placeholder='ej: s/200' />
        <label className='login__label' htmlFor="c2">Entretenimiento</label>
        <input {...register('c2')} type="number" className='login__input' id="c2" placeholder='ej: s/100  *opcional' />
        <label className='login__label' htmlFor="c3">Gastos hormiga {`(Gustitos inecesarios)`}</label>
        <input {...register('c3')} type="number" className='login__input' id="c3" placeholder='ej: s/100  *evitar estos gastos' />
        <h3>{`Gastos variables: `} <input {...register('gastosVariables')} className='login__input' value={(+val.c1 + +val.c2 + +val.c3)?
      ((+val.c1 + +val.c2 + +val.c3)) && (+val.c1 + +val.c2 + +val.c3)
      :
      'Calculo automatico'} placeholder='Calculo automatico' /></h3>
      </div>
      

      <div className='c4'>
        <h1>¿Cuanto puedo ahorrar?</h1>
        <img className='img_cuanto_puedo_ahorrar' src="https://figuro.la/wp-content/uploads/2022/01/Fondo-de-Emergencia.jpg" alt="cuanto puedo ahorrar?" />
        <h3>{`Ahorro: `} <input {...register('ahorro')} className='login__input' value={((+val.a1 + +val.a2) - (+val.c1 + +val.c2 + +val.c3) - (+val.b1 + +val.b2 + +val.b3 + +val.b4 + +val.b5 + +val.b6 + +val.b7)) ?
          ((+val.a1 + +val.a2) - (+val.c1 + +val.c2 + +val.c3) - (+val.b1 + +val.b2 + +val.b3 + +val.b4 + +val.b5 + +val.b6 + +val.b7))
          :
          'Calculo automatico'} placeholder='Calculo automatico' /></h3>


        <div className='nota_asas'>
          <b>Nota: Si tu ahorro sale negativo significa que no tienes un buen presupuesto, no puedes gastar mas de lo que tienes.</b>
        </div>
      <button className='btn1'>Guardar presupuesto </button>
      </div>

    </form>
  )
}
