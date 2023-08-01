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
import { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import {useDispatch,useSelector} from 'react-redux';
import {useAlert} from 'react-alert'
import { getProductDetails,clearErrors, newReview } from '../../actions/productAction'
import { NEW_REVIEW_RESET } from '../../constants/productConstants';
const SchoolDetailsDialog =  ({ items, idd, open, onClose }) => {
  console.log("itttt",items);
  const alert=useAlert()
  
  const dispatch=useDispatch()
 
  const {product,loading,error}=useSelector(state=>state.productDetails)
  const {success,error:reviewError}=useSelector(state=>state.newReview)
  useEffect(() => {
    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }
    if(reviewError){
      alert.error(reviewError)
      dispatch(clearErrors())
    }
    
    if (success) {
      alert.success("review submit successFully kindly refresh first")
      dispatch({type:NEW_REVIEW_RESET})
    }
 dispatch(getProductDetails(idd))
  }, [dispatch,error,success,reviewError])
  console.log("product",product);
  const [reviewOpen,setReviewOpen]=useState(false)
const handleCloseAndReviewBox=()=>{
  setReviewOpen(true)
  onClose()
}

const handleReviewClose=()=>{
  setReviewOpen(false)
}

const [rating, setRating] = useState();
const [reviewText, setReviewText] = useState('');


const handleRatingChange = (event, value) => {
  setRating(value);
};

const handleReviewChange = (event) => {
  setReviewText(event.target.value);
};

const reviewSubmitHandler= ()=>{
  const myForm = new FormData();

  myForm.set("rating", rating);
  myForm.set("comment", reviewText);
  myForm.set("productId", idd);

  dispatch(newReview(myForm))


  setReviewOpen(false)
}
const handleEmailer=()=>{
    const recipient = items&&items.user&&items.user.email;
    const subject = '';
    const body = '';

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
}

  return (
    <>
    <Dialog open={open} onClose={onClose}>
      <DialogTitle style={{color:"#009688",display:"flex",justifyContent:"space-between"}}> <div> School Details </div> <IconButton style={{color:"black",fontSize:"2rem"}}>
      <CloseIcon onClick={handleCloseAndReviewBox} />
        </IconButton></DialogTitle>
      <DialogContent className="flex flex-col gap-4 px-6">
        <Slider images={product&&product.images&&product.images} />
        <h2 className="font-bold">
            <BadgeIcon style={{color:"#009688",fontSize:"1.5rem",marginTop:'-.5rem'}}/> <span className="font-bold">{product&&product.name}</span>
          </h2>
<div className='font-bold text-lg'>
Description: <span className='font-light text-[1rem]'> {product&&product.discription}</span>
</div>
<div className='  justify-between'>
        <p className="font-bold">
            <LocationOnIcon style={{color:"#009688",fontSize:"1rem"}}/> <span className="font-[100] text-[.8rem]">{product&&product.location}</span>
          </p>

          <p className="font-bold">
            <AddIcCallIcon style={{color:"#009688",fontSize:"1rem"}}/> <span className="font-[100] text-[.8rem]">{product&&product.contact}</span>
          </p>
</div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleEmailer} color='success'>Contact through Mail</Button>
        <Button onClick={handleCloseAndReviewBox} color='warning'>Cancel</Button>
      </DialogActions>
    </Dialog>
    <Dialog open={reviewOpen} onClose={handleReviewClose}>
      <DialogTitle style={{color:"#009688",display:"flex",justifyContent:"space-between"}}> <div>Leave a Review</div> <IconButton style={{color:"black",fontSize:"2rem"}}>
      <CloseIcon onClick={handleCloseAndReviewBox} />
        </IconButton></DialogTitle>
      <DialogContent className="">
      <div className=" px-6">
      <form onSubmit={reviewSubmitHandler}>
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
    </Dialog>
    </>
  );
};

export default SchoolDetailsDialog;
