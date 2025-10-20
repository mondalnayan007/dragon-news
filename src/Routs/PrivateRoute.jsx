import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    console.log(user)

    const location = useLocation()
    console.log(location)

    if(loading){
        return <Loading></Loading>;
    }

    if(user && user.email){
        return children;
    }
    else{
        return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>;
    }

   
};

export default PrivateRoute;