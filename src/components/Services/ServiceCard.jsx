import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const ServiceCard = ({service}) => {
    console.log(service);

    const {id,title,image,price,description} = service;
    return (
        <div data-aos="flip-left"  className=" flex flex-col justify-center items-center px-6">
            <div className="card shadow-xl h-full w-full bg-logo">
  <div className="card-body">
    <h2 className="card-title text-xl font-bold text-purple-700">{title}</h2>
    <p className=" text-white font-medium text-lg">{description}</p>
  </div>
  <figure><img src={image} alt="Shoes" /></figure>
  <Link to={`/${id}`}>
<button className=" btn btn-primary my-7 absolute left-[40%] bg-transparent ">Details...</button>
</Link>
</div>

        </div>
    );
};

export default ServiceCard;