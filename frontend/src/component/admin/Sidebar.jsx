import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import SchoolIcon from '@mui/icons-material/School';
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useSelector } from "react-redux";
const Sidebar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <div className="sidebar">

      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link to="/admin/product">
      <p>
              <AddIcon />
              Add-School
              </p>
            </Link>

            <Link to="/admin/products">
              <p>
              <SchoolIcon />
              Schools
              </p>
              </Link>
             {user&&user.allowUser&&user.allowUser===true&& <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>}
      <Link to="/admin/users">
        <p>
          <ListAltIcon />
          News-Update List
        </p>
      </Link>
      <Link to="/admin/create/news">
      <p>
              <AddIcon />
              News
              </p>
            </Link>
      <Link to="/admin/users">
        <p>
          <NewspaperIcon />
          News
        </p>
      </Link> 
     {user&&user.allowUser&&user.allowUser===true&& <Link to="/admin/create/videos">
      <p>
              <AddIcon />
              Add-video
              </p>
            </Link>}
    {user&&user.allowUser&&user.allowUser===true&& <Link to="/admin/users">
        <p>
          <YouTubeIcon />
          list videos
        </p>
      </Link> }
    </div>
  );
};

export default Sidebar;