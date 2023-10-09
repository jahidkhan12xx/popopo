import { useContext, useState } from "react";
import { Link, NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaFacebook,FaGoogle } from 'react-icons/fa';


const SignIn = ({}) => {

  const {signIn,facebookLogin,googleLogin} = useContext(AuthContext);
  const [error,setError] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();



  const handleFacebook = () =>{
    facebookLogin()
    .then(result=>{
      console.log(result);
      navigate(location?.state ? location.state : "/")
    })
    .catch(err=>{
      setError(err.message);
    })
  }
  const handleGoogle = () =>{
    googleLogin()
    .then(result=>{
      console.log(result);
      navigate(location?.state ? location.state : "/")
    })
    .catch(err=>{
      setError(err.message);
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    const email = (e.target.email.value);
    const password = (e.target.password.value);
    console.log(name,email,password);

    signIn(email,password)
    .then(result=>{
      console.log(result.user);
      navigate(location?.state ? location.state : "/")
    })
    .catch(err=>{
      setError(err.message);
    })
  }
    return (
        <div>
            <div className="hero min-h-screen text-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Just login thats all needed to get awesome events </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" id="email" className="input input-bordered text-blue-800" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" id="password" className="input input-bordered text-blue-800" required />
          <label className="label flex flex-col">
            <p  className="label-text-alt text-base ">Don't have account ? <NavLink to="/register"><span className=" text-blue-600">SignUp</span></NavLink> </p>
            <p className=" text-red-800 text-xs">{error}</p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <hr />
          <p className=" text-lg text-black text-center">Or Login with</p>
         <div className=" flex gap-5">
         <list onClick={handleFacebook} className=" hover:bg-red-900 hover:cursor-pointer transition-all duration-500 hover:text-white bg-transparent border-2 text-center  p-4 rounded-xl w-[50%] text-black flex gap-2"> <FaFacebook className=" text-2xl"/> <span>Facebook</span></list>
          <list onClick={handleGoogle} className=" hover:bg-red-900 hover:cursor-pointer transition-all duration-500 hover:text-white bg-transparent border-2 text-center  p-4 rounded-xl w-[40%] text-black flex gap-2"><FaGoogle className=" text-2xl"/> <span>Google</span></list>
         </div>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;