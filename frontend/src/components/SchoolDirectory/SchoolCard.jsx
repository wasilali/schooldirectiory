import { Rating } from "@mui/material";
import img from "../../image/kenny-eliason-zFSo6bnZJTw-unsplash.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import LaunchIcon from '@mui/icons-material/Launch';
import IconButton from '@mui/material/IconButton';
import BadgeIcon from '@mui/icons-material/Badge';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolDetailsDialog from './SchoolDetailsDialog.jsx';
const SchoolCard = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  const [value, setValue] = useState(5);
  return (
    <>
      <div className="image-cardd">
        <div className="image-containerr">
          <img src={img} alt="Image" />
          <span className="view-icon">
            58 <VisibilityIcon />
          </span>
        </div>
        <div className="card-contentt">
          <h2 className="font-bold">
            <BadgeIcon style={{color:"#009688",fontSize:"1rem"}}/> <span className="font-light">Usama Bin Zaid School</span>
          </h2>

          <p className="font-bold">
            <LocationOnIcon style={{color:"#009688",fontSize:"1rem"}}/> <span className="font-[100] text-[.8rem]">Faisalabad Pakistan</span>
          </p>

          <div className="flex justify-between mt-2">
            <div className="flex flex-row">
            <Rating name="read-only" value={value} readOnly />
            <span className=" mt-1 ml-1 text-[#009688]">{"(5)"}</span>

            </div>
            <IconButton onClick={handleOpenDialog} color="info"><LaunchIcon/></IconButton>
            <SchoolDetailsDialog open={dialogOpen} onClose={handleCloseDialog} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolCard;
