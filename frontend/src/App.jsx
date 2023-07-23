import "./App.css";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Loading from "./components/Headers/Loading.jsx"
import Home from "./components/Headers/Home";
import Navbar from "./components/Headers/Navbar";
import Footer from "./components/Headers/Footer";
import ContactUs from "./components/Headers/ContactUs"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTopButton from "./components/Headers/ScrollToTopButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchoolDirectory from "./components/SchoolDirectory/SchoolDirectory";
import News from "./components/NewsAndUpdates/News";
import Resources from "./components/educationResources/Resources"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { loardUser } from "./actions/userAction";
import store from './store'
import ProctedRout from "./components/ProctedRout/ProctedRout";
import Profile from "./component/User/Profile";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
const App = () => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user !==null) {
      store.dispatch(loardUser());
    }
  }, []);
  
  return (
    <>
    {loading?<Loading/>:
    <div className="bg-gray-100">
      <BrowserRouter>
        <Navbar />
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/school-directory" element={<SchoolDirectory />} />
          <Route path="/news-and-updates" element={<News/>} />
          <Route path="/educational-resources" element={<Resources/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route
                element={<ProctedRout isAunthenticated={isAuthenticated} />}
              >
          <Route path="/account" element={<Profile/>} />
          <Route path="/me/update" element={<UpdateProfile />} />
                <Route path="/password/update" element={<UpdatePassword />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      <ToastContainer />
    </div> 
    }
    </>
  );
};

export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Profile from './components/Headers/Profile'
// import "./App.css";
// import store from "./store";
// import { loardUser } from "./actions/userAction";
// import Loading from "./components/Headers/Loading";
// import Navbar from "./components/Headers/Navbar";
// import ProctedRout from "./components/ProctedRout/ProctedRout";
// import Login from "./components/Authentication/Login";
// import Register from "./components/Authentication/Register";
// import Home from "./components/Headers/Home";
// import Footer from "./components/Headers/Footer";
// import SchoolDirectory from "./components/SchoolDirectory/SchoolDirectory";
// import LoginSignup from "./LoginSignup";
// import News from "./components/NewsAndUpdates/News";
// import Resources from "./components/educationResources/Resources"
// import ContactUs from "./components/Headers/ContactUs"
// function App() {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (user !== null) {
//       dispatch(loardUser());
//     }
//   }, []);

//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <div className="bg-gray-100">
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route element={<ProctedRout isAuthenticated={isAuthenticated} />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/account" element={<Profile />} />
//           <Route path="/school-directory" element={<SchoolDirectory />} />
//          <Route path="/news-and-updates" element={<News/>} />
//           <Route path="/educational-resources" element={<Resources/>} />
//         <Route path="/contact" element={<ContactUs/>} />
//           </Route>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           {/* <Route path="/login" element={<LoginSignup />} /> */}
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;
