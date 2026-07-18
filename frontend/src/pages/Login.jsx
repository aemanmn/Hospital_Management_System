import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === 'Sign Up') {

      const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }

    } else {

      const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }

    }

  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center bg-gradient-to-br from-teal-50 via-white to-emerald-50'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-teal-100 rounded-2xl text-[#5E5E5E] text-sm shadow-xl bg-white'>
        <p className='text-2xl font-semibold text-gray-800'>{state === 'Sign Up' ? 'Create ' : ''}{state === 'Sign Up' ? <span className='text-teal-600'>Account</span> : 'Login'}</p>
        <p className='text-gray-500'>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment</p>
        {state === 'Sign Up'
          ? <div className='w-full '>
            <p className='text-gray-600'>Full Name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='border border-gray-200 rounded-lg w-full p-2.5 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all' type="text" required />
          </div>
          : null
        }
        <div className='w-full '>
          <p className='text-gray-600'>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-gray-200 rounded-lg w-full p-2.5 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all' type="email" required />
        </div>
        <div className='w-full '>
          <p className='text-gray-600'>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-gray-200 rounded-lg w-full p-2.5 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all' type="password" required />
        </div>
        <button className='bg-gradient-to-r from-teal-600 to-emerald-600 text-white w-full py-2.5 my-2 rounded-lg text-base hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5 transition-all duration-300'>{state === 'Sign Up' ? 'Create account' : 'Login'}</button>
        {state === 'Sign Up'
          ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-teal-600 underline cursor-pointer hover:text-teal-700'>Login here</span></p>
          : <p>Create an new account? <span onClick={() => setState('Sign Up')} className='text-teal-600 underline cursor-pointer hover:text-teal-700'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login