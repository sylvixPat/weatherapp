import React from 'react'

export const Header = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='relative inline-flex items-center justify-center'>
                <img src={require('../image/logowather.png')} alt="Logo" width="82px" />
            </div>
        </div>
    )
}
