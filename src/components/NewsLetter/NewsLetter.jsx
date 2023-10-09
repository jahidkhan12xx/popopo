import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const NewsLetter = () => {
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" >
            <div  className="text-center flex justify-center flex-col items-center my-20">
            <h2 className="  md:text-6xl text-4xl font-bold mb-2  text-white font-gilroy  ">NewsLetter</h2>
            <hr className=" md:h-2 h-1 md:w-[20%] w-[50%] bg-white " />
            </div>
            <div className="hero min-h-[80vh] text-white bg-logo">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Subscribe now!</h1>
      <p className="py-6">Subscribe now, then you will receive all our event notification</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="number" placeholder="phone number" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default NewsLetter;