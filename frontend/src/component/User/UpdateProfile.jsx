import React,{useState,useEffect} from 'react'
import "./UpdateProfile.css"
import Loader from '../../components/Headers/Loading'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import FaceIcon from '@material-ui/icons/Face'
import {useDispatch,useSelector} from 'react-redux'
import {clearErrors,loardUser,updateProfile} from '../../actions/userAction'
import {useAlert} from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { UPDATE_PROFILE_RESET } from '../../constants/userConstants'
import MetData from '../layout/MetData'

const UpdateProfile = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const alert=useAlert()
    const {user}=useSelector((state)=>state.user)
    const {error,isUpdated,loading}=useSelector((state)=>state.profile)
   
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [avatar,setAvatar]=useState("")
    const [avatarPreview,setAvatarPreview]=useState("/anny.png")

    const updateProfileSubmit=(e)=>{
        e.preventDefault()
        const myForm=new FormData()
        myForm.set("name",name)
        myForm.set("email",email)
        myForm.set("avatar",avatar)
       dispatch(updateProfile(myForm))

    }
    const updateProfileDataChange=(e)=>{
        
         const reader=new FileReader()
         reader.onload=()=>{
            if(reader.readyState===2){
                setAvatarPreview(reader.result)
                setAvatar(reader.result)
            }
         }
         const file=e.target.files[0]
        
           reader.readAsDataURL(file)
         
        }

        useEffect(() => {
            if(user){
                setName(user.name)
                setEmail(user.email)
                setAvatarPreview(user.avatar ?  user.avatar.url : "")
            }
          if(error){
            alert.error(error)
            dispatch(clearErrors())
            
          }
          if(isUpdated){
            alert.success("Profile Update Successfully")
            navigate("/account")
            dispatch(loardUser())
           dispatch({
            type:UPDATE_PROFILE_RESET,
           })
        }
        }, [dispatch,error,alert,user,isUpdated])
        

  return (
   <>
   {loading ? <Loader/> :  (
        <>
        <MetData title="Update Profile"/>
         <div className='updateProfileContainer'>
          <div className='updateProfileBox'>
      
            <h2 className='' >.</h2>
          <form
           className="updateProfileForm form"
           encType="multipart/form-data"
           onSubmit={updateProfileSubmit}
           >
               <div id="updateProfileImage">
           <img src={avatarPreview} alt="Avatar Preview" />
           <input
             type="file"
             name="avatar"
             accept="image/*"
              onChange={updateProfileDataChange}
           />
         </div>
         <div className='emailName'>
           <div className='updateProfileName'>
              <FaceIcon/>
              <input type="text"
              placeholder='Name'
              required
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}

              />
           </div>
           <div className='updateProfileEmail'>
            <MailOutlineIcon/>
            <input type="email" 
            placeholder='Email'
            required
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
           </div>
           <div>
           <input type="submit" 
           value="Update"
           className="updateProfileBtn"
           /> 
           </div>
      
           </div>
           </form>
          </div>
          </div>
        </>
   )}
   </>
  )
}

export default UpdateProfile