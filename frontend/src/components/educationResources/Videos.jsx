import VideoCard from "./VideoCard"

const Videos = () => {
    const arry=[1,23,3,45,3,6,78,8]
  return (
    <>
      <div className="w-full md:mt-10 px-5 xl:px-12 grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 grid-cols-1 gap-5 ">
        {
            arry.map((arr,i)=>{
                return <VideoCard key={i} />
            })
        }
      </div>
    </>
  )
}

export default Videos