import React,{useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MetData from '../layout/MetData'
import {useSelector} from 'react-redux'
import Loader from '../../components/Headers/Loading'
import "./Profile.css"


const Profile = () => {
    const nav= useNavigate();
    const {loading,isAuthenticated,user}=useSelector(state=>state.user)
    useEffect(()=>{
        if (isAuthenticated===false) {
            nav("/login")
        }
        
        
    },[isAuthenticated])
  return (
        <>
        {loading?<Loader/>:(
            <>
            <MetData title={`${user.name}s Profile`}/>
            <h1>.</h1>
            <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 sm:p-5">
            <h1 className="text-2xl font-semibold mb-4">My Profile</h1>
            <div className="flex items-center justify-center mb-4">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src={user.avatar ? user.avatar.url : ''}
                alt={user.name}
              />
            </div>
            <Link
              to="/me/update"
              className="inline-block text-center bg-[#009688] hover:bg-[#48a39a] text-white px-4 py-2 rounded-lg mb-4"
            >
              Edit Profile
            </Link>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-5">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>
              <div className="col-span-2">
                <Link
                  to="/password/update"
                  className="inline-block text-center bg-[#009688] hover:bg-[#48a39a] text-white px-4 py-2 rounded-lg"
                >
                  Change Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
            </>
        )}
        </>
  )
}

export default Profile