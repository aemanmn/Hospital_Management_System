import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b border-teal-100 bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-30'>
      <div className='flex items-center gap-3 text-xs'>
        <img onClick={() => navigate('/')} className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
        <p className='border border-teal-300 px-2.5 py-0.5 rounded-full text-teal-700 bg-teal-50 font-medium'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={() => logout()} className='bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-sm px-10 py-2 rounded-full hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5 transition-all duration-300'>Logout</button>
    </div>
  )
}

export default Navbar