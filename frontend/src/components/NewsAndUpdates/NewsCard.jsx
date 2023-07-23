import PropTypes from 'prop-types';

const NewsCard = ({ key, news }) => {
  return (
    <div key={key} className="max-w-sm h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-16">
      <a href="#">
        <img className="rounded-t-lg" src={news.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#009688] dark:text-white">
            {news.heading}
          </h5>
        </a>
        <a href="#">
          <h5 className="mb-2 text-sm font-light tracking-tight text-gray-700 dark:text-white">
            {news.date}
          </h5>
        </a>
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
