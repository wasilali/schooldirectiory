import React, { Fragment, useEffect, useState } from "react";
import "./newproduct.css";
import { useSelector, useDispatch } from "react-redux";
// import { clearErrors, createProduct } from "../../actions/productAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { useNavigate } from "react-router-dom";
import MetData from "../layout/MetData";
import { clearErrors, newProduct } from "../../actions/productAction";
import Sidebar from "./Sidebar";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { createReport } from "../../actions/reportAction";
import { CREATE_REPORT_RESET } from "../../constants/reportConstant";
import Loading from "../layout/loading/Loader";
const NewVideos = () => {
  const dispatch = useDispatch();
  const nav = useNavigate()
  const alert = useAlert();

  const { loading, error, message } = useSelector((state) => state.report);

  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [videoId, setVideoId] = useState("");
  const [classes, setClasses] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert.success("Video Link Created Successfully");
      nav("/admin/dashboard");
      dispatch({ type: CREATE_REPORT_RESET });
    }
  }, [dispatch, alert, error, message]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("link", link);
    myForm.set("classes", classes);
    dispatch(createReport(myForm));
    nav("/admin/dashboard");
    alert.success("Video Link Created Successfully");
  };

  const handleLinkChange = (event) => {
    const inputValue = event.target.value;
    setVideoId(inputValue);

    // Extract video ID using regex
    const match = inputValue.match(/(?:\?|&)v=([^&]+)/);
    if (match) {
      setLink(match[1]);
    } else {
      setLink(""); // Clear video ID if URL format is not recognized
    }
  };
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
            <h1>Add Youtube video lecture</h1>

            <div>
              <YouTubeIcon />
              <input
                type="text"
                placeholder="Add video link"
                required
                value={videoId}
                onChange={handleLinkChange}
              />
            </div>
            <div>
              <YouTubeIcon />
              <input
                type="text"
                placeholder="Add video name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <YouTubeIcon />
              <input
                type="number"
                placeholder="Add video class Number"
                required
                value={classes}
                onChange={(e) => setClasses(e.target.value)}
              />
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Add
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
    }
    </>
    
  );
};

export default NewVideos;