import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleEmailer = () => {
    const recipient = 'wasilsohail123456@gmail.com'; // Change this to the admin's email
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional logic for form submission if needed
    handleEmailer(); // Call the email function
  };
  return (
    
    <>
     <div>
      <section className="text-gray-700 body-font lg:py-16 md:py-12 py-6">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#009688]">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label  className="leading-7 text-sm text-[#009688]">
                    Name
                  </label>
                  <input
                    type="text"
                    onChange={handleChange}
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#009688] text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    className="leading-7 text-sm text-[#009688]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    onChange={handleChange}
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#009688] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    className="leading-7 text-sm text-[#009688]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#009688] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button onClick={handleSubmit} className="flex mx-auto text-white bg-[#009688] border-0 py-2 px-8 focus:outline-none hover:bg-[#4d847e] rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default ContactUs