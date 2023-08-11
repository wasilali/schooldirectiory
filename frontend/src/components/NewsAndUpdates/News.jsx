import { useEffect } from 'react';
import img from '../../image/kenny-eliason-zFSo6bnZJTw-unsplash.jpg';
import NewsCard from './NewsCard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../../actions/newsAction';
import Loading from '../Headers/Loading';

const News = () => {
  const dispatch = useDispatch();
  const { news,loading } = useSelector((state) => state.news);

  useEffect(() => {
    
    dispatch(getAllNews());

  }, [dispatch]);

  return (
    <>
    {loading?<Loading/>:(
    <>
    <div className="md:mt-10 px-5 xl:px-12 grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 grid-cols-1 gap-5 bg-gray-100">
      {news&&news.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  </>
    )}
    </>

  );
};

export default News;
