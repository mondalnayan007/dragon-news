import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Components/AuthProvider';

const Register = () => {
    const {createUser,setUser,user} = use(AuthContext)

    const handleRegister =(e)=>{
           e.preventDefault();
           console.log(e.target)

           const name = e.target.name.value;
           const email = e.target.email.value;
           const password = e.target.password.value;
           const photo = e.target.photo.value;
           console.log(name,email)
           createUser(email,password)
           .then(result =>{
               const user = result.user;
               alert("Register successful..")
              
               setUser(user);
           })
           .catch(error=>{
            console.log(error)
           })

    }
    return (
        <>
            
            {
                user ? 'register successfull' : <div className='flex justify-center'>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5 px-3">
                        <h2 className='text-2xl font-bold text-center'>Register your account</h2>
                        <hr className='h-0 text-gray-300 w-[80%] mx-auto mt-8'/>
                        <form onSubmit={handleRegister} className="card-body">
                            <fieldset className="fieldset">
                                  {/* Name  */}
                                <label className="label font-bold text-black py-1 text-base">Your Name</label>
                                <input type="text" required name='name' className="input" placeholder="Your Name" />
                                 {/* Photo url  */}
                                <label className="label font-bold text-black py-1 text-base">Photo URL</label>
                                <input type="text" required name='photo' className="input" placeholder="Your Photo URL" />
                                {/* email  */}
                                <label className="label font-bold text-black py-1 text-base">Email</label>
                                <input name='email' required type="email" className="input" placeholder="Email" />
                                {/* password  */}
                                <label className="label font-bold text-black py-1 text-base">Password</label>
                                <input type="password" required name='password' className="input" placeholder="Password" />
                                <div className='flex gap-2 my-2'><input type="checkbox" name="" id="" /><p>Accept Terms & Conditions</p></div>
                                <button  type='submit' className="btn btn-neutral mt-4">Register</button>
                                <p className='font-semibold  mt-5 text-center'>Already Have An Account? <Link to={'/auth/login'} className='text-secondary'>Login</Link> </p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            }
        

                </>
    );
};

export default Register;