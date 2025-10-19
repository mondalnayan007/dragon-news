import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Components/AuthProvider';


const Login = () => {

    const { user, logIn } = useContext(AuthContext)
    

    const handleLogIn = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email, password)
            .then(() => {
                alert("Login Successfull")
                e.target.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='flex justify-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 px-3">
                <h2 className='text-2xl font-bold text-center'>Login your account</h2>
                <hr className='h-0 text-gray-300 w-[80%] mx-auto mt-8' />
                <div className="card-body">
                    <form onSubmit={handleLogIn} className="fieldset">

                        <label className="label font-bold text-black py-1 text-base">Email</label>
                        <input type="email" className="input" name='email' placeholder="Email" />
                        <label className="label font-bold text-black py-1 text-base">Password</label>
                        <input type="password" className="input" name='password' placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className='btn btn-primary px-8 text-lg'>Login</button>
                        <p className='font-semibold  mt-5 text-center'>Don't Have An Account? <Link to={'/auth/register'} className='text-secondary'>Register</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;