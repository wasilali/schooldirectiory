import VideoCard from "./VideoCard"

const Videos = ({allLinks}) => {
  return (
    <>
      <div className="w-full md:mt-10 px-5 xl:px-12 grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 grid-cols-1 gap-5 ">
        {
            allLinks&&allLinks.map((arr,i)=>{
                return <VideoCard key={arr._d} arr={arr} />
            })
        }
      </div>
    </>
  )
}

export default Videos