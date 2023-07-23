import PropTypes from 'prop-types';
const VideoCard = ({key}) => {
  return (
    <>
    <div key={key} className="max-w-md rounded overflow-hidden shadow-lg" >
  <div className="embed-responsive aspect-ratio-16/9">
    <iframe src="https://www.youtube.com/embed/F9Uid9wrB7U" className="w-full h-full"></iframe>
  </div>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Video Title</div>
    <p className="text-gray-700 text-base">Video Description goes here...</p>
  </div>
</div>
    </>
  )
}
VideoCard.propTypes = {
  key:PropTypes.number.isRequired,
}

export default VideoCard