import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import OAuth from '../components/OAuth';

function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const handlechange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      setLoading(true);
      const data = await axios.post('http://localhost:1517/api/auth/Signup', formData);
      if(data){
        setLoading(false);
        nav('/sign-in')
      }
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  }

  return (
    <div className='container flex justify-center mx-auto mt-10'>
      <div className='border h-[500px] w-[500px] rounded-md'>
        <form className='flex flex-col p-10'>
          <div className="flex flex-col text-center">
            <h1 className='text-2xl font-semibold'>Sign Up</h1>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <input type="text" name="username" id="username" placeholder='Username' className='bg-slate-100 rounded-lg p-3' onChange={handlechange}/>
            <input type="text" name="email" id="email" placeholder='Email' className='bg-slate-100 rounded-lg p-3' onChange={handlechange}/>
            <input type="password" name="password" id="password" placeholder='Password' className='bg-slate-100 rounded-lg p-3' onChange={handlechange}/>
            <button className='bg-blue-500 text-white rounded-lg p-3 hover:opacity-95 disabled:opacity-70' onClick={handleSubmit}>
              {loading ? 'Loading...' : 'Sign Up'}
            </button>
          </div>
          <OAuth/>
        </form>
        <div className='flex flex-col px-10'>
          <p>Have an account? <span className='text-blue-500 hover:cursor-pointer' onClick={() => nav('/sign-in')}>Sign In</span></p>
        </div>
        <div className='mt-4 px-10'>
          <p className='text-red-700 font-semibold'>{error}</p>
        </div>
      </div>
    </div>
  )
}

export default SignUp