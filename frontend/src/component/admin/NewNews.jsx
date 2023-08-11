import React, { Fragment, useEffect, useState } from "react";
import "./newproduct.css";
import { useSelector, useDispatch } from "react-redux";
// import { clearErrors, createProduct } from "../../actions/productAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import { useNavigate } from "react-router-dom";
import MetData from "../layout/MetData";
import { clearErrors, createNews } from "../../actions/newsAction";
import Sidebar from "./Sidebar";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Loading from "../layout/loading/Loader";
const NewNews = () => {
  const dispatch = useDispatch();
  const nav = useNavigate()
  const alert = useAlert();

  const { loading, error,success } = useSelector((state) => state.newNews);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [avatar, setImages] = useState("");
  const [imagesPreview, setImagesPreview] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Product Created Successfully");
      nav("/admin/dashboard");
      dispatch({ type: "NEW_PRODUCT_RESET" });
    }
  }, [dispatch, alert, error, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("to", to);
    myForm.set("description", description);
    myForm.set("from", from);
    myForm.set("avatar", avatar);

    dispatch(createNews(myForm));
  };

  const registerDataChange=(e)=>{
    const reader=new FileReader()
    reader.onload=()=>{
    if(reader.readyState===2){
      setImagesPreview(reader.result)
        setImages(reader.result)
    }
    }
    const file=e.target.files[0]
    
    reader.readAsDataURL(file)

    }

  return (
    <>
    {
      loading?<Loading/>:<Fragment>
      <MetData title="Create Product" />
      <div className="dashboard">
        <Sidebar/>
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Add News or Event</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="School Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="School Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            <div>
        <CalendarMonthIcon />
        <input
          selected={to}
          onChange={(e)=>setTo(e.target.value)}
          placeholderText="From"
          type="date"
          required
        />
      </div>
      <div>
        <CalendarMonthIcon />
        <input
          selected={from}
          onChange={e=>setFrom(e.target.value)}
          placeholderText="To"
          type="date"
          required
        />
      </div>
            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={registerDataChange}
              />
            </div>
            {imagesPreview&&<div id="createProductFormImage">
                <img src={imagesPreview} alt="Product Preview" />
            </div>}

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
    }
    </>
    
  );
};

export default NewNews;