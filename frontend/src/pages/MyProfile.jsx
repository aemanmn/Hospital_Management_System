import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyProfile = () => {

    const [isEdit, setIsEdit] = useState(false)

    const [image, setImage] = useState(false)

    const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)

    // Function to update user profile data using API
    const updateUserProfileData = async () => {

        try {

            const formData = new FormData();

            formData.append('name', userData.name)
            formData.append('phone', userData.phone)
            formData.append('address', JSON.stringify(userData.address))
            formData.append('gender', userData.gender)
            formData.append('dob', userData.dob)

            image && formData.append('image', image)

            const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                await loadUserProfileData()
                setIsEdit(false)
                setImage(false)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    return userData ? (
        <div className='max-w-lg flex flex-col gap-2 text-sm pt-5 mx-auto'>

            {isEdit
                ? <label htmlFor='image' >
                    <div className='inline-block relative cursor-pointer group'>
                        <img className='w-36 h-36 object-cover rounded-full opacity-75 ring-4 ring-teal-100 group-hover:opacity-60 transition-opacity' src={image ? URL.createObjectURL(image) : userData.image} alt="" />
                        <img className='w-10 absolute bottom-12 right-12' src={image ? '' : assets.upload_icon} alt="" />
                    </div>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
                </label>
                : <img className='w-36 h-36 object-cover rounded-full ring-4 ring-teal-100' src={userData.image} alt="" />
            }

            {isEdit
                ? <input className='bg-teal-50 border border-teal-200 rounded-md px-2 py-1 text-3xl font-medium max-w-60 mt-4 focus:outline-none focus:ring-2 focus:ring-teal-400' type="text" onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} value={userData.name} />
                : <p className='font-medium text-3xl text-[#262626] mt-4'>{userData.name}</p>
            }

            <hr className='bg-teal-100 h-[1px] border-none my-2' />

            <div className='bg-white rounded-xl p-4 shadow-sm border border-gray-100'>
                <p className='text-teal-700 font-semibold tracking-wide text-xs'>CONTACT INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-[#363636]'>
                    <p className='font-medium'>Email id:</p>
                    <p className='text-teal-600'>{userData.email}</p>
                    <p className='font-medium'>Phone:</p>

                    {isEdit
                        ? <input className='bg-teal-50 border border-teal-200 rounded px-2 max-w-52 focus:outline-none focus:ring-2 focus:ring-teal-400' type="text" onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} value={userData.phone} />
                        : <p className='text-teal-600'>{userData.phone}</p>
                    }

                    <p className='font-medium'>Address:</p>

                    {isEdit
                        ? <p>
                            <input className='bg-teal-50 border border-teal-200 rounded px-2 mb-1 focus:outline-none focus:ring-2 focus:ring-teal-400' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} />
                            <br />
                            <input className='bg-teal-50 border border-teal-200 rounded px-2 focus:outline-none focus:ring-2 focus:ring-teal-400' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} /></p>
                        : <p className='text-gray-500'>{userData.address.line1} <br /> {userData.address.line2}</p>
                    }

                </div>
            </div>
            <div className='bg-white rounded-xl p-4 shadow-sm border border-gray-100 mt-2'>
                <p className='text-teal-700 font-semibold tracking-wide text-xs'>BASIC INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-gray-600'>
                    <p className='font-medium'>Gender:</p>

                    {isEdit
                        ? <select className='max-w-20 bg-teal-50 border border-teal-200 rounded px-1 focus:outline-none focus:ring-2 focus:ring-teal-400' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender} >
                            <option value="Not Selected">Not Selected</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        : <p className='text-gray-500'>{userData.gender}</p>
                    }

                    <p className='font-medium'>Birthday:</p>

                    {isEdit
                        ? <input className='max-w-28 bg-teal-50 border border-teal-200 rounded px-1 focus:outline-none focus:ring-2 focus:ring-teal-400' type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
                        : <p className='text-gray-500'>{userData.dob}</p>
                    }

                </div>
            </div>
            <div className='mt-8 flex justify-center sm:justify-start'>

                {isEdit
                    ? <button onClick={updateUserProfileData} className='bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-10 py-2.5 rounded-full hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5 transition-all duration-300'>Save information</button>
                    : <button onClick={() => setIsEdit(true)} className='border border-teal-600 text-teal-700 px-10 py-2.5 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300'>Edit</button>
                }

            </div>
        </div>
    ) : null
}

export default MyProfile