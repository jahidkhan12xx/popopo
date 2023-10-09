import { Children, useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <span className="loading loading-ring loading-lg"></span>;
    }

    if(user){
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to="/login"></Navigate>
        </div>
    );
};

export default ProtectedRoute;