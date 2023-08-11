import img1 from '../../image/99708938.jpg'
import img2 from '../../image/sharAli.jpeg'
import img3 from '../../image/image (2).jpg'
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <>
    
<div className="hallo relative flex flex-col justify-center items-center mt-12 h-[90vh]">
      <h1 className="text-5xl font-bold text-center text-white">
        Kidz<span className="text-[yellow]">First</span>
      </h1>
      <p className="mt-4 text-lg font-[200] text-center px-4 lg:px-20 xl:px-40 text-white">
        KidzFirst is dedicated to providing individualized and personalized assistance with personal, educational, and vocational problems. We analyze all pertinent facts and seek solutions, often with the assistance of specialists, school and community resources, and personal interviews.
      </p>
    </div>

         <section className="bg-gray-100 pb-8 pt-0 h-auto w-full">
      <div className="container mx-auto md:px-12 px-4 py-16 ">
        <h2 className="text-center text-4xl font-bold mb-[5rem] mt-[5rem] text-[#009688]">Our School Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="icon-card bg-hero-pattern bg-cover bg-no-repeat bg-center z-10 h-[60vh] service-card bg-white rounded-md shadow-md p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mt-[3rem] text-[#002052]">School Directory</h3>
            <p className="text-gray-900 text-center -mt-12 ">You can find amaizing Schools hare</p>
            <Link to={"/school-directory"} className="bg-[#009688] p-2 rounded text-center -mt-12 ">watch schools</Link>

          </div>
          <div className="icon-card bg-hero-pattern bg-cover bg-no-repeat bg-center h-[60vh] z-10 service-card bg-white rounded-md shadow-md p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mt-[3rem] text-[#002052] ">Education Resource</h3>
            <p className=" text-center -mt-12">Find amaizing Education Videos</p>
            <Link to={"/educational-resources"} className="bg-[#009688] p-2 rounded text-center -mt-12 ">watch Videos</Link>
          </div>
          <div className="icon-card bg-hero-pattern bg-cover bg-no-repeat bg-center h-[60vh] z-10 service-card bg-white rounded-md shadow-md p-6 flex flex-col items-center">
            <h3 className="text-xl font-semibold mt-[3rem] text-[#002052] ">News and Events</h3>
            <p className=" text-center -mt-12">Find News Of Famous Schools</p>
            <Link to={"/news-and-updates"} className="bg-[#009688] p-2 rounded text-center -mt-12 ">News And Updates</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gray-100 text-neutral-700 dark:text-neutral-300 h-auto py-16 md:px-12 px-4">
    <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
      <h3 className="mb-6 text-3xl font-bold text-[#009688]">Reviews</h3>
      <p className="mb-6 pb-2 md:mb-12 md:pb-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam
        voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
    </div>
    {/*First Testimonial*/}
    <div className="grid gap-6 text-center md:grid-cols-3">
      <div>
        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
          <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]" />
          <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
          </div>
          <div className="p-6">
            <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
            <hr />
            <p className="mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
              elit.
            </p>
          </div>
        </div>
      </div>
      {/*Second Testimonial*/}
      <div>
        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
          <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]" />
          <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
          </div>
          <div className="p-6">
            <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
            <hr />
            <p className="mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              Neque cupiditate assumenda in maiores repudi mollitia architecto.
            </p>
          </div>
        </div>
      </div>
      {/*Third Testimonial*/}
      <div>
        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
          <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]" />
          <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
          </div>
          <div className="p-6">
            <h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
            <hr />
            <p className="mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              Delectus impedit saepe officiis ab aliquam repellat rem unde
              ducimus.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  </section>

    <div className="container1 bg-gray-100">
            <div className="heading">
                <h2>Meet Our Team Members</h2>
                <p>Creative Nerds</p>
            </div>
            <div className="main-box inner flex">
                <div className="team-wrap">
                    <div className="team-member text-center">
                        <div className="team-img">
                            <img src={img1} alt=""/>
                            <div className="overlay">
                                <div className="team-details text-center">
                                    <p>A Full Stack Developer And Also Founer Of this App</p>
                                    <div className="socials mt-20">
                                        <a href="#"><span className="fa fa-facebook"></span></a>
                                        <a href="#"><span className="fa fa-twitter"></span></a>
                                        <a href="#"><span className="fa fa-google-plus"></span></a>
                                        <a href="#"><span className="fa fa-envelope"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6 className="team-title">Muhammad Wasil</h6>
                    </div>
                </div>
                <div className="team-wrap">
                    <div className="team-member text-center">
                        <div className="team-img">
                            <img src={img2} alt=""/>
                            <div className="overlay">
                                <div className="team-details text-center">
                                    <p>A Full Stack Developer And Also Founer Of this App</p>
                                    <div className="socials mt-20">
                                        <a href="#"><span className="fa fa-facebook"></span></a>
                                        <a href="#"><span className="fa fa-twitter"></span></a>
                                        <a href="#"><span className="fa fa-google-plus"></span></a>
                                        <a href="#"><span className="fa fa-envelope"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6 className="team-title">Muhammad Shar Ali</h6>
                    </div>
                </div>
    
                <div className="team-wrap">
                    <div className="team-member text-center">
                        <div className="team-img">
                            <img src={img3} alt=""/>
                            <div className="overlay">
                                <div className="team-details text-center">
                                    <p>A Full Stack Developer And Also Founer Of this App</p>
                                    <div className="socials mt-20">
                                        <a href="#"><span className="fa fa-facebook"></span></a>
                                        <a href="#"><span className="fa fa-twitter"></span></a>
                                        <a href="#"><span className="fa fa-google-plus"></span></a>
                                        <a href="#"><span className="fa fa-envelope"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6 className="team-title">Muhammad Arslan</h6>
                    </div>
                </div>
              </div>
        </div>
        
    </>
  )
}

export default Home