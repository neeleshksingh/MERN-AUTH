import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const nav = useNavigate();
  return (
    <div className='bg-slate-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <h1 className='font-bold cursor-pointer' onClick={() => nav('/')}>Auth</h1>
            <ul className='flex gap-4'>
                <li className='cursor-pointer' onClick={() => nav('/')}>Home</li>
                <li className='cursor-pointer' onClick={() => nav('/about')}>About</li>
                <li className='cursor-pointer' onClick={() => nav('/sign-in')}>SignIn</li>
            </ul>
        </div>
    </div>
  )
}

export default Header
