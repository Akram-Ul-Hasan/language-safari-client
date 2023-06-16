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
            
            const saveUser = {
                name : loggedUser.displayName,
                email: loggedUser.email,
              }

            fetch("https://language-safari-server-jade.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then(() => {
                navigate(from, { replace: true });

              });


            
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