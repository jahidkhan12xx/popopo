import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const NavBar = () => {

  const {user,logOut} = useContext(AuthContext);

  const handleSignOut = () =>{
    logOut()
    .then()
    .catch()
  }

    const list = <>
    <li className="ml-3 "><NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold bg-blue-800  text-xl text-white" : " font-semibold text-xl hover:bg-blue-800 bg-transparent  text-white  hover:font-medium hover:text-white "
  }
>
  Home
</NavLink></li>
<li className=" ml-3 "><NavLink
  to="/contact"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold bg-blue-800  text-xl text-white" : " font-semibold text-xl hover:bg-blue-800 bg-transparent  text-white hover:font-medium hover:text-white "
  }
>
  Contact Us
</NavLink></li>
<li className=" ml-3 "><NavLink
  to="/tickets"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold bg-blue-800  text-xl text-white" : " font-semibold text-xl hover:bg-blue-800 bg-transparent  text-white  hover:font-medium hover:text-white "
  }
>
  Tickets
</NavLink></li>

    
    </>
    return (
        <div  className=" container mx-auto">
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow   w-52">
        {list}
      </ul>
    </div>
    <h2 className=" md:text-5xl text-2xl font-bold font-gilroy text-white">Funimation <span className=" text-red-800">.</span></h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {list}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? <div className=" md:flex justify-center items-center gap-3">
        
        <div className="avatar online">
  <div className="w-12 rounded-full">
    {
      user?.photoURL ? <img src={user.photoURL} alt="" /> : <img src="https://images.unsplash.com/photo-1696289186765-e1dd0559c921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
    }
  </div>
</div>
<div className=" text-red-800 font-semibold font-gilroy">{user?.displayName ? user.displayName : user.email}</div>
        <Link to="/login"><button onClick={handleSignOut} className=" btn bg-transparent hover:bg-blue-800 hover:text-white border-blue-800 text-white">Sign Out</button></Link>
      </div>
      :
      <div>
        <Link to="/login"><button className=" btn bg-transparent hover:bg-blue-800 hover:text-white border-blue-800 text-white">Sign In</button></Link>
      </div>
    }
  </div>
</div>
        </div>
    );
};

export default NavBar;