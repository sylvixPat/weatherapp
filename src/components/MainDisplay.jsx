import React from 'react'
import { Header } from './Header'
import Weather from './Weather';

export const MainDisplay = () => {
    return (
        <div className='container mx-auto xl bg-black p-5'>
            <Header />
            <Weather />
            <div>Header (Buscador, logo y el C/F)</div>
            <div>Nombre de la ciudad, humedad, temperatura...</div>
            <div>Forecast del dia</div>
            <div>Forecast de la semana</div>
        </div>
    )
}
