import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./ProductList.css";
import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MetData from "../layout/MetData";
import Sidebar from "./Sidebar";
import { DELETE_ORDER_RESET } from "../../constants/orderConstants";
import { getAllReport,clearErrors, deleteReport } from "../../actions/reportAction";
import { DELETE_REPORT_RESET } from "../../constants/reportConstant";


const Reports = () => {
  const dispatch = useDispatch();
const nav = useNavigate()
  const alert = useAlert();


  const {error,loading,allLinks}=useSelector(st=>st.report)
  const {user,isAuthenticated}=useSelector(sta=>sta.user)

  const [allLink,setAllLinks]=useState(null)

  const {error:deleteError ,message} = useSelector(st=>st.deleteReport)


  const deleteOrderHandler = (id) => {
    console.log("iddddddd",id);
    dispatch(deleteReport(id));
  };

  useEffect(() => {

dispatch(getAllReport())
      if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }
    if (allLinks && user) {
      const filteredLinks = allLinks.filter(link => link.user === user._id);
      setAllLinks(filteredLinks);
    }
    if (message) {
      alert.success(message);

      dispatch({ type: DELETE_REPORT_RESET });
    }

  }, [dispatch,alert,error,deleteError,message]);



  const columns = [
    {
        field: "link",
        headerName: "link",
        type: "text",
        minWidth: 150,
        flex:0,
      },
      {
        field: "name",
        headerName: "name",
        type: "text",
        minWidth: 150,
        flex: 0.2,
        cellClassName: (params) => {
            return "redColor";
          },
      },
    {
      field: "classes",
      headerName: "Classes",
      minWidth: 100,
      flex: .8,
      cellClassName: (params) => {
        return "greenColor";
      },
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
            <Button
              onClick={() =>
                deleteOrderHandler(params.getValue(params.id, "id"))
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
  allLinks &&
  allLinks.forEach((item) => {
      rows.push({
        id:item._id,
        link: item.link,
        name: item.name,
        classes: item.classes,
      });
    });
}else{
  allLink &&
  allLink.forEach((item) => {
      rows.push({
        id:item._id,
        link: item.link,
        name: item.name,
        classes: item.classes,
      });
    });
}


  return (
    <>
      <MetData title={`ALL orders - Admin`} />

      <div className="dashboard">
        <Sidebar/>
        <div className="productListContainer">
          <h1 id="productListHeading">ALL Videos</h1>

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

export default Reports;