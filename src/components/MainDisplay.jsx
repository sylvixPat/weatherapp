import React from 'react'
import { Header } from './Header'
import Weather from './Weather';

export const MainDisplay = () => {
    return (
        <div className='container mx-auto xl bg-black p-5'>
            <Header />
            <Weather />
        </div>
    )
}
