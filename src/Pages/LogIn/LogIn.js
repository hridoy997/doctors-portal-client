import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import useToken from '../../Hooks/useToken';

const LogIn = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { register, formState: { errors }, handleSubmit,} = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const token = useToken(user || gUser)
    let signInError ;

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if(user || gUser){
            if (token) {
                navigate(from, { replace: true });
            }
        }
    }, [token, navigate, from]);

    if(loading || gLoading){
        return <Loading/>
    }

    if(error || gError){
        signInError = <p className='text-red-500'>
            <small>{error?.message || gError?.message}</small>
        </p>
    }


    const onSubmit = (data) => {
        // console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className=" text-2xl font-bold text-center">LogIn</h2>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs bg-white"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <div className="label">
                                {errors.email?.type === "required" && (<span className="label-text-alt text-red-500">{errors.email.message}</span>)}
                                {errors.email?.type === "pattern" && (<span className="label-text-alt text-red-500">{errors.email.message}</span>)}
                            </div>
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs bg-white"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <div className="label">
                                {errors.password?.type === "required" && (<span className="label-text-alt text-red-500">{errors.password.message}</span>)}
                                {errors.password?.type === "minLength" && (<span className="label-text-alt text-red-500">{errors.password.message}</span>)}
                            </div>
                        </label>

                         {/* Display Sign-In Error Message */}
                        {signInError}

                        {/* <input type="submit" className="btn w-full max-w-xs" value="Login"/> */}
                        <input
                            type="submit"
                            className="btn w-full max-w-xs px-4 py-2 font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300" 
                            value="Login" 
                        />
                    </form>

                    <p><small>New to Doctors Portal? <Link className="text-primary" to="/signUp">Create new account</Link></small></p>

                    <div className="divider">OR</div>

                    <button 
                        onClick={() => signInWithGoogle()} 
                        className="btn btn-outline"
                        >CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;