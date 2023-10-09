import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
    return (
        <div  className="">
            <div className="hero min-h-screen bg-itachi" >
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-3xl">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5 text-3xl font-semibold"><span className=" text-blue-700">Welcome to Funimation.</span> <br /> <span className=" ">You can book any show,premeires now.</span></p>
      <button className="btn btn-primary bg-yellow-600 border-0">Book Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;