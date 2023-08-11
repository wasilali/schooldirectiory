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
import { getAllNews } from '../../actions/newsAction';
const Dashboard = () => {
  const dispatch = useDispatch();
  const {products}=useSelector(state=>state.products);
  const { error, users } = useSelector((state) => state.allUsers);
  const { allLinks } = useSelector((state) => state.report);
  const { news } = useSelector((state) => state.news);

console.log("news",news);

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllReport())

    dispatch(getAllOrder())

    dispatch(getAllUsers());
    dispatch(getAllNews());

  }, [dispatch]);



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
        <h2 className="text-xl font-bold">Number of News And Events</h2>
        <p className="text-4xl mt-5">{news&&news.length || 'Loading...'}</p>
      </div>

      {/* Videos */}
      <div className="bg-red-500 h-[10rem] p-4 text-white text-center">
        <h2 className="text-xl font-bold">Number of Videos</h2>
        <p className="text-4xl mt-5">{allLinks&&allLinks.length || 'Loading...'}</p>
      </div>
    </div>
    </div>
  )
}

export default Dashboard