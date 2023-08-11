import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./ProductList.css";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MetData from "../layout/MetData";
import Sidebar from "./Sidebar";
import { DELETE_ORDER_RESET } from "../../constants/orderConstants";
import { getAllReport,clearErrors, deleteReport } from "../../actions/reportAction";
import { DELETE_REPORT_RESET } from "../../constants/reportConstant";
import { deleteNews, getAllNews } from "../../actions/newsAction";


const NewsList = () => {
  const dispatch = useDispatch();
const nav = useNavigate()
  const alert = useAlert();


  const {error,news}=useSelector(st=>st.news)
  const {error:deleteError ,message} = useSelector(st=>st.deleteNews)
  const {user,isAuthenticated}=useSelector(sta=>sta.user)
  const [allLink,setAllLinks]=useState(null)

  const deleteOrderHandler = (id) => {
    console.log("id",id);
    dispatch(deleteNews(id));
  };

  useEffect(() => {

dispatch(getAllNews())
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }
    if (news && user) {
      const filteredLinks = news.filter(link => link.user === user._id);
      setAllLinks(filteredLinks);
    }
    if (message) {
      alert.success(message);

      dispatch({ type: "DELETE_NEWS_RESET" });
    }

  }, [dispatch,deleteError,message]);

  const columns = [
    {
        field: "name",
        headerName: "name",
        type: "text",
        minWidth: 150,
        flex:0,
      },
      {
        field: "from",
        headerName: "from",
        type: "date",
        minWidth: 150,
        flex: 0.2,
        valueFormatter: (params) => {
            const date = new Date(params.value);
            return date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
          },
        cellClassName: (params) => {
            return "redColor";
          },
      },
      {
        field: "to",
        headerName: "to",
        type: "date",
        minWidth: 150,
        flex: 0.2,
        valueFormatter: (params) => {
            const date = new Date(params.value);
            return date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
          },
        cellClassName: (params) => {
            return "redColor";
          },
      },
    {
      field: "Discription",
      headerName: "Description",
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
  news&&news &&
  news&&news.forEach((item) => {
      rows.push({
        id:item._id,
        name: item.name,
        from: item.from,
        to: item.to,
        Discription: item.description,
      });
    });
}else{
  allLink&&allLink &&
  allLink&&allLink.forEach((item) => {
      rows.push({
        id:item._id,
        name: item.name,
        from: item.from,
        to: item.to,
        Discription: item.description,
      });
    });
}


  return (
    <>
      <MetData title={`ALL orders - Admin`} />

      <div className="dashboard">
        <Sidebar/>
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>

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

export default NewsList;