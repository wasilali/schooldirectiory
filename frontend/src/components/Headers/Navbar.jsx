import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu, MenuItem, IconButton } from '@mui/material';
import { AccountCircle, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../../actions/userAction';
import store from '../../store';
import DashboardIcon from '@mui/icons-material/Dashboard';
const Navbar = () => {
  const nav=useNavigate()
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleUserMenuClose() {
    setAnchorEl(null);
    
  }
  const gotToPRofile = () => {
    nav("/account")
    setAnchorEl(null);
  };
  function logoutUser() {
    
    store.dispatch(logout())
    alert.success("logout Successfully...")
    setAnchorEl(null);
     
 }
 function adminPath() {
  nav("/admin/dashboard")
  setAnchorEl(null);
 }
  return (
    <>
      <div className="container-fluid">
        <header>
          <div className={`${open ? "bg-black w-full" : "w-full bg-[#009688]"}`}>
            <div className="banner ">
              <div className="logo px-2 mt-2 lg:mt-[1.6rem]">Kidz<span className="text-[yellow]">First</span></div>
              <nav className="hidden lg:flex">
                <ul>
                  <li><Link to={"/"} className="a">Home</Link></li>
                  <li><Link to="/school-directory" className="a">School Directory</Link></li>
                  <li><Link to={"/educational-resources"} className="a">Educational Resources</Link></li>
                  <li><Link to={"/news-and-updates"} className="a">News and Update</Link></li>
                  <li><Link to={"/contact"} className="a">Contact Us</Link></li>
                  {!isAuthenticated && <li><Link to={"/login"} className="button text-secondary">Sign In</Link></li>}
                </ul>
                <div className='p-[.8rem]'>
                  {isAuthenticated && (
                    <IconButton
                      onClick={handleUserMenuOpen}
                      size="large"
                      color="inherit"
                      edge="end"
                      aria-label="user account"
                    >
                      <img src={user.avatar ? user.avatar.url : ""} alt="" className='h-10 rounded-full' />
                    </IconButton>
                  )}
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleUserMenuClose}
                  >
                    {user&&user.role==="admin" &&<MenuItem onClick={adminPath}><DashboardIcon /> Dashboart</MenuItem>}
                    <MenuItem onClick={gotToPRofile}><AccountBoxIcon /> Profile</MenuItem>
                    <MenuItem onClick={logoutUser}><LogoutIcon /> Logout</MenuItem>
                  </Menu>
                </div>
              </nav>
              <div className='flex flex-col lg:hidden'>
                <div>
                  {open ?
                    <CloseIcon
                      style={{
                        color: "white",
                        margin: ".1rem 1rem",
                        fontSize: "3rem",
                        marginLeft: open ? "10rem" : ""
                      }}
                      onClick={() => {
                        setOpen(!open)
                      }}
                    />
                    :
                    <MenuIcon
                      style={{
                        color: "white",
                        margin: ".1rem 1rem",
                        fontSize: "3rem",
                        marginLeft: open ? "10rem" : ""
                      }}
                      onClick={() => {
                        setOpen(!open)
                      }}
                    />
                  }

                </div>
                <div className='z-50'>
                  {open && <ul className='lg:hidden flex flex-col bg-[black] rounded-[2rem] px-10 mt-[1rem] -ml-16'>
                    <li className='mt-[.5rem]'><Link to={"/"} className="a text-white">Home</Link></li>
                    <li className='mt-[.5rem]'><Link to={"/school-directory"} className="a text-white">School Directory</Link></li>
                    <li className='mt-[.5rem]'><Link to={"/educational-resources"} className="a text-white">Educational Resources</Link></li>
                    <li className='mt-[.5rem]'><Link to={"/news-and-updates"} className="a text-white">News and Update</Link></li>
                    <li className='mt-[.5rem]'><Link to={"/contact"} className="a text-white">Contact Us</Link></li>
                    <li className='mt-[1rem] mb-6'><Link to={"/login"} className="button cursor-pointer">Sign In</Link></li>
                  </ul>}
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
