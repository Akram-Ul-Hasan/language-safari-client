import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const SocialLogin = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { googleLogin } = useContext(AuthContext);

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true });

        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    return (
        <div>
           <div className="divider mx-8">OR</div>
           <div className='text-center mb-10'>
           <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
            <FaGoogle></FaGoogle>
           </button>
           </div>
        </div>
    );
};

export default SocialLogin;