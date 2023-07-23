import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  { useDispatch,useSelector } from "react-redux"
import img from '../../image/5920-1.jpg'
import { clearErrors,register } from '../../actions/userAction'
import { toast } from "react-toastify";
import Loading from "../Headers/Loading";
export default function Regsiter() {
  const dispatch=useDispatch()
  const nav= useNavigate()
const {error,loading,isAuthenticated}=useSelector(state=>state.user)

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setavatar(URL.createObjectURL(file));
  //   }
  // };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
// for register
const registerTab=useRef(null)

const [user,setUser]=useState({
  name:"",
  email:"",
  password:"",
  password2:""
})
const {name,email,password,password2}=user
console.log(password,password,password2);
const [avatar,setAvatar]=useState(null)
const [avatarPreview,setAvatarPreview]=useState(img)
  const registerSubmit=(e)=>{
    e.preventDefault()
    // if (password===password2) {
        
    
    const myForm=new FormData()
    myForm.set("name",name)
    myForm.set("email",email)
    myForm.set("password",password)
    myForm.set("avatar",avatar)
    dispatch(register(myForm))
    if(isAuthenticated===true){
        nav("/")
        }

    // }else{
        // alert.error("password not match")
    // }
}
const registerDataChange=(e)=>{
if(e.target.name==="avatar"){
const reader=new FileReader()
reader.onload=()=>{
if(reader.readyState===2){
    setAvatarPreview(reader.result)
    setAvatar(reader.result)
}
}
const file=e.target.files[0]

reader.readAsDataURL(file)

}else{
setUser({...user,[e.target.name]:e.target.value})
}
}

useEffect(()=>{
if (error) {
    toast.error(error);
    dispatch(clearErrors())
}
if(isAuthenticated===true){
    nav("/")
    toast.success("User Register Successfully")
}
},[dispatch,error,isAuthenticated])
  return (
    <>
    {loading?<Loading/>:
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100 h-screen mt-[5rem]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Kidz <span className="text-[#009688]">First</span>
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" ref={registerTab}
          encType="multipart/form-data"
          onSubmit={registerSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-[#009688]"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  required
             value={name}
             onChange={registerDataChange}
                  className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-[#009688]"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="email"
                  required
                  value={email}
           onChange={registerDataChange}
                  className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-[#009688]"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
           value={password}
           onChange={registerDataChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500 cursor-pointer"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3c-2.385 0-4.723.95-6.464 2.687A20.264 20.264 0 0 0 1 10c0 .876.067 1.748.198 2.606C1.692 15.054 3.346 16 5.5 16c1.853 0 3.148-1.034 3.996-1.978a8.487 8.487 0 0 0 2.008-.948A2.5 2.5 0 0 1 10 12H9.8A3.2 3.2 0 0 1 6 10c0-.667.333-1.333 1-2 .667-.667 1.333-1 2-1 .354 0 .677.074.969.222.291.148.532.353.722.615C10.065 8.804 9.663 9 9.2 9H9a1 1 0 0 1 0-2h.2c.463 0 .865.196 1.171.585.307.39.468.842.483 1.355 0 .202-.028.383-.083.542a1.729 1.729 0 0 1-.275.516c-.117.151-.266.292-.448.424C10.153 10.916 9.314 11 9 11H8a2 2 0 1 1 0-4h1zM5.5 5C4.122 5 3 6.122 3 7.5S4.122 10 5.5 10 8 8.878 8 7.5 6.878 5 5.5 5zm0 1C5.776 6 6 6.224 6 6.5S5.776 7 5.5 7 5 6.776 5 6.5 5.224 6 5.5 6zm9.072 9.072a.5.5 0 0 0-.707 0l-1.414 1.414a.5.5 0 1 0 .707.707l1.414-1.414a.5.5 0 0 0 0-.707zM15.5 10C16.878 10 18 8.878 18 7.5S16.878 5 15.5 5 13 6.122 13 7.5 14.122 10 15.5 10zm0-1C15.776 9 16 9.224 16 9.5S15.776 10 15.5 10 15 9.776 15 9.5 15.224 9 15.5 9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500 cursor-pointer"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3c-2.385 0-4.723.95-6.464 2.687A20.264 20.264 0 0 0 1 10c0 .876.067 1.748.198 2.606C1.692 15.054 3.346 16 5.5 16c1.853 0 3.148-1.034 3.996-1.978a8.487 8.487 0 0 0 2.008-.948A2.5 2.5 0 0 1 10 12H9.8A3.2 3.2 0 0 1 6 10c0-.667.333-1.333 1-2 .667-.667 1.333-1 2-1 .354 0 .677.074.969.222.291.148.532.353.722.615C10.065 8.804 9.663 9 9.2 9H9a1 1 0 0 1 0-2h.2c.463 0 .865.196 1.171.585.307.39.468.842.483 1.355 0 .202-.028.383-.083.542a1.729 1.729 0 0 1-.275.516c-.117.151-.266.292-.448.424C10.153 10.916 9.314 11 9 11H8a2 2 0 1 1 0-4h1zM5.5 5C4.122 5 3 6.122 3 7.5S4.122 10 5.5 10 8 8.878 8 7.5 6.878 5 5.5 5zm0 1C5.776 6 6 6.224 6 6.5S5.776 7 5.5 7 5 6.776 5 6.5 5.224 6 5.5 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="relative">
              <label htmlFor="file-upload" className="hidden">
                Choose File
              </label>
              <input
                id="file-upload"
                type="file"
            name="avatar"
            accept="image/*"
             onChange={registerDataChange}
              />
              <div
                className={` flex bg-gray-100 p-2 rounded-md ${
                  avatarPreview ? "mt-2" : "mt-2"
                }`}
              >
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt="Preview"
                    className="w-[3rem] h-[3rem] object-contain mr-2 rounded-full"
                  />
                ) : (
                  <img
                    src={'/preview.png'}
                    alt="Preview"
                    className="w-[3rem] h-[3rem] object-contain mr-2 rounded-full"
                  />
                )}
                <button
                  className={`flex cursor-pointer w-full justify-center rounded-md bg-[#009688] px-3 py-2 px-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#4d847e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                    avatarPreview ? "mt-2" : "mt-2"
                  }`}
                  onClick={() => {
                    document.getElementById("file-upload").click();
                  }}
                >
                  Choose File
                </button>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex cursor-pointer w-full justify-center rounded-md bg-[#009688] px-3 py-2 px-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#4d847e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            you already have an accont please login?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              login
            </Link>
          </p>
        </div>
      </div>
}
    </>
  );
}
