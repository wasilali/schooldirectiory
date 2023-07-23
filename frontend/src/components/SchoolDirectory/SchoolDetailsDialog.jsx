import { Dialog, DialogTitle, DialogContent, DialogActions, Button,  } from '@mui/material';
import Slider from './Slider'
import BadgeIcon from '@mui/icons-material/Badge';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { Rating } from "@mui/material";
// import { useState } from "react";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
// import LaunchIcon from '@mui/icons-material/Launch';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
const SchoolDetailsDialog =  ({ open, onClose }) => {
  const [reviewOpen,setReviewOpen]=useState(false)
const handleCloseAndReviewBox=()=>{
  setReviewOpen(true)
  onClose()
}

const handleReviewClose=()=>{
  setReviewOpen(false)
}

const [rating, setRating] = useState(0);
const [reviewText, setReviewText] = useState('');

console.log(rating);

const handleRatingChange = (event, value) => {
  setRating(value);
};

const handleReviewChange = (event) => {
  setReviewText(event.target.value);
};

const handleReviewSubmit = (event) => {
  event.preventDefault();
  // Process review submission
  console.log('Rating:', rating);
  console.log('Review Text:', reviewText);
  // Reset form fields
  setRating(0);
  setReviewText('');
};


  return (
    <>
    <Dialog open={open} onClose={onClose}>
      <DialogTitle style={{color:"#009688",display:"flex",justifyContent:"space-between"}}> <div> School Details </div> <IconButton style={{color:"black",fontSize:"2rem"}}>
      <CloseIcon onClick={handleCloseAndReviewBox} />
        </IconButton></DialogTitle>
      <DialogContent className="flex flex-col gap-4 px-6">
        <Slider/>
        <h2 className="font-bold">
            <BadgeIcon style={{color:"#009688",fontSize:"1.5rem",marginTop:'-.5rem'}}/> <span className="font-bold">Usama Bin Zaid School</span>
          </h2>
<div className='font-bold text-lg'>
Description: <span className='font-light text-[1rem]'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, consectetur, animi nemo aliquid, mollitia amet dolorem alias officiis incidunt nihil optio earum eaque? Minus ex incidunt aut tenetur facere architecto.</span>
</div>
<div className='  justify-between'>
        <p className="font-bold">
            <LocationOnIcon style={{color:"#009688",fontSize:"1rem"}}/> <span className="font-[100] text-[.8rem]">Faisalabad Pakistan</span>
          </p>

          <p className="font-bold">
            <AddIcCallIcon style={{color:"#009688",fontSize:"1rem"}}/> <span className="font-[100] text-[.8rem]">03-0166178022</span>
          </p>
</div>
      </DialogContent>
      <DialogActions>
        <Button color='success'>Contact through Mail</Button>
        <Button onClick={handleCloseAndReviewBox} color='warning'>Cancel</Button>
      </DialogActions>
    </Dialog>
    <Dialog open={reviewOpen} onClose={handleReviewClose}>
      <DialogTitle style={{color:"#009688",display:"flex",justifyContent:"space-between"}}> <div>Leave a Review</div> <IconButton style={{color:"black",fontSize:"2rem"}}>
      <CloseIcon onClick={handleCloseAndReviewBox} />
        </IconButton></DialogTitle>
      <DialogContent className="">
      <div className=" px-6">
      <form onSubmit={handleReviewSubmit}>
        <div className="mb-4">
          <label className="block text-[#4d847e] text-sm font-bold mb-2" htmlFor="rating">
            Rating
          </label>
          <Rating
            name="rating"
            value={rating}
            onChange={handleRatingChange}
            size="large"
            precision={0.5}
            className="text-yellow-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#4d847e] text-sm font-bold mb-2" htmlFor="review">
            Review
          </label>
          <textarea
            className="border border-gray-300 rounded-lg p-2 w-full h-32 resize-none"
            id="review"
            value={reviewText}
            onChange={handleReviewChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#009688] hover:bg-[#4d847e] text-white py-2 px-4 rounded"
        >
          Submit Review
        </button>
      </form>
    </div>

      </DialogContent>
      <DialogActions>
        <Button color='success'>Submit Riview</Button>
        <Button color='warning'>Cancel</Button>
      </DialogActions>
    </Dialog>
    </>
  );
};

export default SchoolDetailsDialog;
