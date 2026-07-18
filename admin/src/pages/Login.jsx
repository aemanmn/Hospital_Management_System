import axios from 'axios'
import React, { useContext, useState } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'

const Login = () => {

  const [state, setState] = useState('Admin')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const { setDToken } = useContext(DoctorContext)
  const { setAToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === 'Admin') {

      const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
      if (data.success) {
        setAToken(data.token)
        localStorage.setItem('aToken', data.token)
      } else {
        toast.error(data.message)
      }

    } else {

      const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password })
      if (data.success) {
        setDToken(data.token)
        localStorage.setItem('dToken', data.token)
      } else {
        toast.error(data.message)
      }

    }

  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center bg-gradient-to-br from-teal-50 via-white to-emerald-50'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-teal-100 rounded-2xl text-[#5E5E5E] text-sm shadow-xl bg-white'>
        <p className='text-2xl font-semibold m-auto text-gray-800'><span className='text-teal-600'>{state}</span> Login</p>
        <div className='w-full '>
          <p className='text-gray-600'>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-gray-200 rounded-lg w-full p-2.5 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all' type="email" required />
        </div>
        <div className='w-full '>
          <p className='text-gray-600'>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-gray-200 rounded-lg w-full p-2.5 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all' type="password" required />
        </div>
        <button className='bg-gradient-to-r from-teal-600 to-emerald-600 text-white w-full py-2.5 my-2 rounded-lg text-base hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5 transition-all duration-300'>Login</button>
        {
          state === 'Admin'
            ? <p>Doctor Login? <span onClick={() => setState('Doctor')} className='text-teal-600 underline cursor-pointer hover:text-teal-700'>Click here</span></p>
            : <p>Admin Login? <span onClick={() => setState('Admin')} className='text-teal-600 underline cursor-pointer hover:text-teal-700'>Click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login