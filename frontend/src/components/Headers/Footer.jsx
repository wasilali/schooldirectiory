import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <>
    <footer className="bg-[#40a399] text-white mt-[5rem]  ">
  <div className="container mx-auto py-8 px-4 lg:flex lg:justify-between">
    <div className="mb-8 lg:mb-0">
      <h2 className="text-xl font-bold">Follow Us</h2>
      <div className="flex mt-4">
        <a href="#" className="mr-4 hover:text-primary">
          <FacebookIcon/>
        </a>
        <a href="#" className="mr-4 hover:text-primary">
          <GoogleIcon/>
        </a>
        <a href="#" className="hover:text-primary">
          <InstagramIcon/>
        </a>
      </div>
    </div>
    <div>
      <h2 className="text-xl font-bold">Contact Us</h2>
      <p className="mt-4">123 Main Street</p>
      <p>City, State, Zip</p>
      <p className="mt-4">Phone: 123-456-7890</p>
      <p>Email: info@example.com</p>
    </div>
  </div>
  <div className="bg-primary py-4">
    <div className="container mx-auto text-center">
      <p className="text-white">© 2023 School Web App. All rights reserved.</p>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer