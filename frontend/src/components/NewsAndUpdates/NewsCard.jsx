import PropTypes from 'prop-types';

const NewsCard = ({ key, news }) => {
  return (
    <div key={key} className="max-w-sm h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-16">
      <a href="#">
        <img className="rounded-t-lg h-64 object-cover" src={news.avatar?news.avatar.url:''} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#009688] dark:text-white">
            {news.name}
          </h5>
        </a>
        <div className=''>
        <a href="#">
          <h5 className="mb-2 text-sm font-light tracking-tight text-gray-700 dark:text-white">
           from: {String(news.from).substr(0, 10)}
          </h5>
        </a>
        <a href="#">
          <h5 className="mb-2 text-sm font-light tracking-tight text-gray-700 dark:text-white">
           to: {String(news.to).substr(0, 10)}
          </h5>
        </a>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {news.description}
        </p>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  key:PropTypes.number.isRequired,
}

// NewsCard.propTypes = {
//   news: PropTypes.any.isRequired,
//   key:PropTypes.number.isRequired,
// }

export default NewsCard;
