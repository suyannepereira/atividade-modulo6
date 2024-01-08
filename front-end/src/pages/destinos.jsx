import { CardDestino } from '@/components'
import { destinosLista } from '@/constants/data'
import React from 'react'

const destinos = () => {
  return (
    <main>
       <div className="container mt-5">
      <div className="row">
        {destinosLista.map((destino,i)=>(
          <CardDestino key={i} destino={destino}/>
        ))}
          
            
      </div>
      </div>
    </main>
    )
}

export default destinos