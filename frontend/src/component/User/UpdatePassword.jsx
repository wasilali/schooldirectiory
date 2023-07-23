import React,{useState,useEffect} from 'react'
import './UpdatePassword.css'
import Loader from '../../components/Headers/Loading'

import {useDispatch,useSelector} from 'react-redux'
import {clearErrors,updatePassword} from '../../actions/userAction'
import {useAlert} from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { UPDATE_PASSWORD_RESET } from '../../constants/userConstants'
import MetData from '../layout/MetData'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import LockIcon from '@material-ui/icons/Lock'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import {TiTickOutline} from  'react-icons/ti'

const UpdatePassword = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const alert=useAlert()  
    const {error,isUpdated,loading}=useSelector((state)=>state.profile)
   
     const [oldPassword, setOldPassword] = useState("")
     const [newPassword, setNewPassword] = useState("")
     const [confirmPassword, setConfirmPassword] = useState("")

    const updatePasswordSubmit=(e)=>{
        e.preventDefault()
        const myForm=new FormData()
        myForm.set("oldPassword",oldPassword)
        myForm.set("newPassword",newPassword)
        myForm.set("confirmPassword",confirmPassword)
       dispatch(updatePassword(myForm))

    }

        useEffect(() => {
          
          if(error){
            alert.error(error)
            dispatch(clearErrors())
            
          }
          if(isUpdated){
            alert.success("password Update Successfully")
            navigate("/account")
           dispatch({
            type:UPDATE_PASSWORD_RESET,
           })
        }
        }, [dispatch,error,alert,isUpdated])
        
  return (
    <>
    {loading ? <Loader/> :  (
        <>
        <MetData title="Change Password"/>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:flex items-start justify-between space-x-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">Update Password</h2>
            <h4>Password must contain</h4>
            <ul className="list-disc list-inside">
              <li>At least 8 characters</li>
              <li>At least 1 lowercase letter (a-z)</li>
              <li>At least 1 uppercase letter (A-Z)</li>
              <li>At least 1 number (0-9)</li>
            </ul>
          </div>
          <form
            className="w-full md:w-auto flex flex-col space-y-4"
            encType="multipart/form-data"
            onSubmit={updatePasswordSubmit}
          >
            <div className="flex items-center border rounded-lg p-2">
              <VpnKeyIcon className="mr-2" />
              <input
                type="password"
                placeholder="Old Password"
                required
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full focus:outline-none"
              />
            </div>
            <div className="flex items-center border rounded-lg p-2">
              <LockOpenIcon className="mr-2" />
              <input
                type="password"
                placeholder="New Password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full focus:outline-none"
              />
            </div>
            <div className="flex items-center border rounded-lg p-2">
              <LockIcon className="mr-2" />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full focus:outline-none"
              />
            </div>
            <div className="text-center md:text-right">
              <button
                type="submit"
                className="bg-[#009688] hover:bg-[#48948c] text-white px-4 py-2 rounded-lg"
              >
                Change
              </button>
            </div>
          </form>
        </div>
      </div>
        </>
   )}
   </>
  )
}

export default UpdatePassword