import React from 'react'
import './header.scss';

const goToPortal = () => {
    window.location.href = '/portal';
}

export const Header = () => {
    return (
        <header className="Portal-header">
            <div onClick={goToPortal} className='logo_background'>
                a
            </div>
        </header>
    )
}