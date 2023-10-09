import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const SignUp = () => {

  const [error,setError] = useState("");
  const {signUp} = useContext(AuthContext);
  const navigate = useNavigate();
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    const name = (e.target.name.value);
    const email = (e.target.email.value);
    const password = (e.target.password.value);
    console.log(name,email,password);

    setError("");

    if(password.length<6){
      setError("Password Must be at least six character");
      
      return;
    }
    else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[0-9]).{8,}$/.test(password)){
      setError("Please add a special character,small letter, capital letter");
      
      return;
    }

    else{

      signUp(email,password)
      .then(result=>{
        console.log(result.user);
        navigate("/");
        
      })
      .catch(err=>{
        setError(err.message);
      })
    }
  }
    return (
        <div>
            <div className="hero min-h-screen text-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">Sign Up to get all kind of service e provide.. If you dont have any account then you should create one</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" id="name" name="name" className="input input-bordered text-blue-800 " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" id="email" name="email" className="input input-bordered text-blue-800" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" id="password" name="password" className="input input-bordered text-blue-800" required />
          <label className="label flex flex-col">
            <p  className="label-text-alt text-lg ">Already Have account ? <Link to="/login"><span className=" text-blue-600">SignIn</span></Link> </p>
            <p className=" text-sm font-semibold text-red-800">{error}</p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
          
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;