import { Rating } from "@mui/material";
import img from "../../image/kenny-eliason-zFSo6bnZJTw-unsplash.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import LaunchIcon from '@mui/icons-material/Launch';
import IconButton from '@mui/material/IconButton';
import BadgeIcon from '@mui/icons-material/Badge';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolDetailsDialog from './SchoolDetailsDialog.jsx';
const SchoolCard = ({items}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [idd, setIdd] = useState();

  const handleOpenDialog = () => {
    setDialogOpen(true);
    setIdd(items._id)

  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  const [value, setValue] = useState(items.ratings);
  return (
    <>
      <div className="image-cardd">
        <div className="image-containerr">
          <img src={items.images&&items.images[0].url} alt="Image" />
          <span className="view-icon">
            {items.views.length} <VisibilityIcon />
          </span>
        </div>
        <div className="card-contentt">
          <h2 className="font-bold">
            <BadgeIcon style={{color:"#009688",fontSize:"1rem"}}/> <span className="font-light">{items.name}</span>
          </h2>

          <p className="font-bold">
            <LocationOnIcon style={{color:"#009688",fontSize:"1rem"}}/> <span className="font-[100] text-[.8rem]">{items.location}</span>
          </p>

          <div className="flex justify-between mt-2">
            <div className="flex flex-row">
            <Rating name="read-only" value={value} readOnly />
            <span className=" mt-1 ml-1 text-[#009688]">{items.numberOfReviews}</span>

            </div>
            <IconButton onClick={handleOpenDialog} color="info"><LaunchIcon/></IconButton>
            <SchoolDetailsDialog items={items} idd={items._id} open={dialogOpen} onClose={handleCloseDialog} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolCard;
