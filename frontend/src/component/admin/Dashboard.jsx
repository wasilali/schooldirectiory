import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import './dashboard.css'
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { getAdminProduct } from '../../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrder } from '../../actions/orderAction';
import { getAllUsers } from '../../actions/userAction';
import { getAllReport } from '../../actions/reportAction';
const Dashboard = () => {
  const dispatch = useDispatch();
  const {products}=useSelector(state=>state.products);

  const {orders}=useSelector(st=>st.allOrders);

  const { error, users } = useSelector((state) => state.allUsers);
  const { reports } = useSelector((state) => state.report);


  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllReport())

    dispatch(getAllOrder())

    dispatch(getAllUsers());
  }, [dispatch]);

  let outOfStock=0;

  products&&
  products.forEach(items=>{
    if (items.stock===0){
      outOfStock +=1
    }
  })

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });



  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length-outOfStock],
      },
    ],
  };


  return (
    <div className='dashboard'>
        <Sidebar/>
        <div className="grid grid-cols-2 gap-5 p-16">
      {/* Users */}
      <div className="bg-blue-500 p-4 h-[10rem] text-white text-center">
        <h2 className="text-xl font-bold">Number of Users</h2>
        <p className="text-4xl mt-5">{users&&users.length || 'Loading...'}</p>
      </div>

      {/* Schools */}
      <div className="bg-green-500 h-[10rem] p-4 text-white text-center">
        <h2 className="text-xl font-bold">Number of Schools</h2>
        <p className="text-4xl mt-5">{products&&products.length || 'Loading...'}</p>
      </div>

      {/* News */}
      <div className="bg-yellow-500 h-[10rem] p-4 text-white text-center">
        <h2 className="text-xl font-bold">Number of News</h2>
        <p className="text-4xl mt-5">{0 || 'Loading...'}</p>
      </div>

      {/* Videos */}
      <div className="bg-red-500 h-[10rem] p-4 text-white text-center">
        <h2 className="text-xl font-bold">Number of Videos</h2>
        <p className="text-4xl mt-5">{0 || 'Loading...'}</p>
      </div>
    </div>
    </div>
  )
}

export default Dashboard