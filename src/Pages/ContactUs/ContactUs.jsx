import video from "/video.webm"
import { FaFacebook,FaYoutube,FaTwitter } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className=" relative">
            <video src={video} loop muted autoPlay></video>
            <div className=" text-3xl font-semibold text-white absolute left-[40vw] top-[28vh]">
            <div class=" grid  w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl  bg-clip-border text-center text-gray-700">
  <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div class="relative p-6 py-14 px-6 md:px-12">
    <h2 class="mb-6 block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased">
    We're here to assist you with any questions, inquiries, or feedback you may have. Your input is important to us, and we're eager to help in any way we can to ensure your experience with AnimeFest is exceptional.Please don't hesitate to reach out to us through any of the following methods:
    </h2>
    <h5 class="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
      Funimation ltd.
    </h5>
    <div className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center">
        
      <FaFacebook className=" text-7xl text-blue-800"></FaFacebook>
      </div>
      <div className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center">
        
      <FaYoutube className=" text-7xl text-blue-800 p-2"></FaYoutube>
      </div>
      <div className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center">
        
      <FaTwitter className=" text-center text-7xl text-blue-800 p-2"></FaTwitter>
      </div>
    
  </div>
</div>
            </div>
        </div>
    );
};

export default ContactUs;