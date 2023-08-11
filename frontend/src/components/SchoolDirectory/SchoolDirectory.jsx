import "./directory.css";
import SchoolCard from "./SchoolCard.jsx";
import img from '../../image/addmission ads for school (1).png'
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useEffect } from "react";
import Loader from "../../component/layout/loading/Loader";
const SchoolDirectory = () => {
  const arry = [1, 3, 4, 5, 6, 7, 8, 9, 1];
  const alert=useAlert()
  const dispatch=useDispatch()
  const {loading,error,products}=useSelector(state=>state.products)
  console.log("products",products);
  useEffect(() => {
    if(error){
    alert.error(error)
      dispatch(clearErrors())
    }
   dispatch(getProduct())
  }, [dispatch,error,alert])

  return (
    <>
    {loading?(<Loader/>):(
    <>
    <div className="background-animation">
      <div className="overlayy"></div>
      <div className="search-containerr py-10 md:px-[10rem] px-12">
        <h1 className="text-[2rem] text-[yellow] font-[700] my-5">
          {" "}
          {"Let's Find! hu"}
        </h1>
        <p className="text-[1.2rem] text-[white] font-[100] my-5">
          Find the perfect school for your child
        </p>
        <input className="form-control mb-5" type="text" placeholder="Search" />
        <button className="bg-[#009688]  text-white hover:bg-[#4d847e]">
          Search
        </button>
      </div>
    </div>
    <div>
      <h1 className=" text-center text-primary md:text-[3rem] text-[2rem] font-bold my-[5rem]">
        {" All School's In City"}
      </h1>

      <div className="px-5 xl:px-12 flex justify-center flex-wrap gap-4">
{products&&products.map((items) => (
  <SchoolCard items={items} key={items._id} />
))}
</div>
    </div>

    <div className="poster my-[5rem]">
          <div className="poster-image">
            <img src={img} alt="Poster Image"/>
          </div>
          <div className="poster-content">
            <h2 className="poster-title text-[#009688x]">Movie Title</h2>
            <p className="poster-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="poster-button">Watch Trailer</a>
          </div>
        </div>
            
  </>
    )}
    </>

  );
};

export default SchoolDirectory;
