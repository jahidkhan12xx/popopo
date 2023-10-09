import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch("services.json")
        .then(response => response.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className=" mt-10 mb-80 container mx-auto"> 
            <div className="text-center flex justify-center flex-col items-center mb-20">
            <h2 className="  md:text-6xl text-4xl font-bold mb-2  text-white font-gilroy  ">Services</h2>
            <hr className=" md:h-2 h-1 md:w-[20%] w-[50%] bg-white " />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-28 text-white">
                {
                    services.map((service,idx) => <ServiceCard key={idx} service={service}></ServiceCard> )
                }
            </div>
        </div>
    );
};

export default Services;