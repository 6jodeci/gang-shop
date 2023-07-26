import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>Gang Shop</span>
            <ul className='nav'>
                <li>Магазин</li>
                <li>Контакты</li>
                <li>Про нас</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
