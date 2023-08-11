import PropTypes from 'prop-types';
const VideoCard = ({key,arr}) => {
  return (
    <>
    <div key={key} className="max-w-md rounded overflow-hidden shadow-lg" >
  <div className="embed-responsive aspect-ratio-16/9">
    <iframe src={`https://www.youtube.com/embed/${arr.link}`} className="w-full h-full"></iframe>
  </div>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{arr.name}</div>
    <p className="text-gray-700 text-base">class number {arr.classes}</p>
  </div>
</div>
    </>
  )
}
VideoCard.propTypes = {
  key:PropTypes.number.isRequired,
}

export default VideoCard