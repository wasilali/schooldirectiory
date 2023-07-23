import img from '../../image/kenny-eliason-zFSo6bnZJTw-unsplash.jpg';
import NewsCard from './NewsCard.jsx';

const News = () => {
  const newsData = [
    {
      id: 1,
      image: img,
      heading: 'News 1',
      date: 'June 27, 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      image: img,
      heading: 'News 2',
      date: 'June 27, 2023',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      image: img,
      heading: 'News 3',
      date: 'June 27, 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 4,
      image: img,
      heading: 'News 4',
      date: 'June 27, 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 5,
      image: img,
      heading: 'News 5',
      date: 'June 27, 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 6,
      image: img,
      heading: 'News 6',
      date: 'June 27, 2023',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    // Add more news data objects here...
  ];

  return (
    <>
      <div className="md:mt-10 px-5 xl:px-12 grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 grid-cols-1 gap-5 bg-gray-100">
        {newsData.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </>
  );
};

export default News;
