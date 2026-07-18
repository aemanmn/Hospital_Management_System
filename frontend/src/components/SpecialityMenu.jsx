import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
            <h1 className='text-3xl font-medium'>Find by <span className='text-teal-600'>Speciality</span></h1>
            <p className='sm:w-1/3 text-center text-sm text-gray-500'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            <div className='flex sm:justify-center gap-6 pt-5 w-full overflow-scroll scrollbar-hide'>
                {specialityData.map((item, index) => (
                    <Link to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)} className='group flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:-translate-y-2 transition-all duration-300' key={index}>
                        <div className='w-16 sm:w-24 aspect-square mb-2 rounded-full bg-teal-50 border border-transparent group-hover:border-teal-300 group-hover:shadow-md group-hover:shadow-teal-100 flex items-center justify-center overflow-hidden transition-all duration-300'>
                            <img className='w-full h-full object-contain p-2' src={item.image} alt="" />
                        </div>
                        <p className='group-hover:text-teal-600 font-medium transition-colors'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu