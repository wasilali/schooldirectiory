import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./ProductList.css";
import { useSelector, useDispatch } from "react-redux";
// import {
//   clearErrors,
//   getAdminProduct,
//   deleteProduct,
// } from "../../actions/productAction";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
// import SideBar from "./Sidebar";
import { clearErrors, delProduct, getAdminProduct } from "../../actions/productAction";
import MetData from "../layout/MetData";
import Sidebar from "./Sidebar";
import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";

const ProductList = () => {
  const dispatch = useDispatch();
const nav = useNavigate()
  const alert = useAlert();

  const {error,products}=useSelector(state=>state.products)


  const {user,isAuthenticated}=useSelector(sta=>sta.user)

  const [allLink,setAllLinks]=useState(null)

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );

  const deleteProductHandler = (id) => {
    dispatch(delProduct(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }


    dispatch(getAdminProduct());
    if (products && user) {
      const filteredLinks = products.filter(link => link.user === user._id);
      setAllLinks(filteredLinks);
    }
    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("School Deleted Successfully");
      nav("/admin/dashboard");

      dispatch({ type: DELETE_PRODUCT_RESET });
    }

  }, [dispatch, alert, error,deleteError,isDeleted]);

  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "contact",
      headerName: "contact",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "location",
      headerName: "location",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/product/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];
  if (user&&user.allowUser===true) {
    products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        contact: item.contact,
        location: item.location,
        name: item.name,
      });
    });

  }else{
    allLink &&
    allLink.forEach((item) => {
      rows.push({
        id: item._id,
        contact: item.contact,
        location: item.location,
        name: item.name,
      });
    });
  }

  return (
    <>
      <MetData title={`ALL PRODUCTS - Admin`} />

      <div className="dashboard">
        <Sidebar/>
        <div className="productListContainer">
          <h1 id="productListHeading">ALL schools</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </>
  );
};

export default ProductList;