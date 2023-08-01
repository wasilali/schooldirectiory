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
import { useNavigate, useParams } from "react-router-dom";
import MetData from "../layout/MetData";
import { clearErrors,getProductDetails, updateProduct } from "../../actions/productAction";
import Sidebar from "./Sidebar";
import { UPDATE_PRODUCT_RESET } from "../../constants/productConstants";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ContactsIcon from '@mui/icons-material/Contacts';
const UpdateProduct = () => {
  const dispatch = useDispatch();
  const params=useParams();
  const nav = useNavigate();
  const alert = useAlert();

  const { loading, error:updateError, isUpdated } = useSelector((state) => state.product);
  const {product,error}=useSelector(state=>state.productDetails)

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState();
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
const id=params.id
  useEffect(() => {
    if (product&&product._id !==id) {
        dispatch(getProductDetails(id));
    } else {
      setName(product.name);
      setDescription(product.discription);
      setContact(product.contact);
      setLocation(product.location);
      setOldImages(product.images);
    }
    if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
      if (updateError) {
        alert.error(updateError);
        dispatch(clearErrors());
      }
  
      if (isUpdated) {
        alert.success("Product Updated Successfully");
        nav("/admin/products");
        dispatch({ type: UPDATE_PRODUCT_RESET });
      }
    }, [
      dispatch,
      alert,
      error,
      isUpdated,
      product,
      updateError,
    ]);

  const updateProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("contact", contact);
    myForm.set("discription", description);
    myForm.set("location", location);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(updateProduct(id,myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([])

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetData title="Create Product" />
      <div className="dashboard">
        <Sidebar/>
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={updateProductSubmitHandler}
          >
            <h1>Create School</h1>

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
              <ContactsIcon />
              <input
                type="text"
                placeholder="School Contact"
                required
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div>
              <AddLocationAltIcon />
              <input
                type="text"
                placeholder="School Location"
                required
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />
            </div>

            <div id="createProductFormImage">
              {oldImages&&oldImages.map((image, index) => (
                <img key={index} src={image.url} alt="Old Product Preview" />
              ))}
            </div>

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>

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
  );
};

export default UpdateProduct;