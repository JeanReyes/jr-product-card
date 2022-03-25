import React from 'react'
import './header.scss';

const goToPortal = () => {
    window.location.href = '/portal';
}

export const Header = () => {
    return (
        <header className="Portal-header">
            <div onClick={goToPortal} className='logo_background'>
                <img className="fala_logo" src="https://images.falabella.com/v3/assets/blt7c5c2f2f888a7cc3/blt9f6f7671ced09c38/6126b34e8e16ab655b346002/hr-1-logo-desktop.svg" />
            </div>
        </header>
    )
}