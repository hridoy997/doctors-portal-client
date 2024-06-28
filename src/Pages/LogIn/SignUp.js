import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';

const SignUp = () => {

    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit,} = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    let signInError ;

    if(loading || gLoading || updating){
        return <Loading/>
    }

    if(error || gError || updateError){
        signInError = <p className='text-red-500'>
            <small>{error?.message || gError?.message || updateError?.message}</small>
        </p>
    }

    if(user || gUser){
        console.log(user || gUser);
    }

    const onSubmit = async data => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('Updated profile');
        navigate('/appointment');
    }

    return (
        <div className='flex justify-center items-centet'>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className=" text-2xl font-bold text-center">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-5">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs bg-white"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required"
                                    }
                                })}
                            />
                            <div className="label">
                                {errors.name?.type === "required" && (<span className="label-text-alt text-red-500">{errors.name.message}</span>)}
                            </div>
                        </label>

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

                        {/* <input type="submit" className="btn w-full max-w-xs" value="Sign Up"/> */}
                        <input
                            type="submit"
                            className="btn w-full max-w-xs px-4 py-2 font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300" 
                            value="Sign Up" 
                        />
                    </form>

                    <div><small>Already have an Account? <Link className="text-primary" to="/login">Please Login</Link></small></div>

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

export default SignUp;