
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";



const ServiceDetails = () => {
    const [service,setService] =useState({})

    const services = useLoaderData();
    
    const {id} = useParams();
   

    useEffect(()=>{

        const filData = services.find(fd => fd.id==id);
        setService(filData);
    },[])

    

    console.log(service,id,service.title,service.id);
    const {title,description,price,image} = service
    
    return (
        <div className=" my-24 pb-14 mx-auto container">
            <div className="hero min-h-[60vh] bg-logo text-white mb-16">
  <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
    <img  src={image} className="max-w-3xl rounded-lg shadow-2xl h-full" />
    <div>
      <h1 className="text-5xl font-bold">{title}!</h1>
      <p className="py-6">{description}</p>
      <button className="btn btn-primary mb-32">Get Started with {price}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceDetails;