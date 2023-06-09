import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <form className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now <span className='text-emerald-400'>!!</span></h1>
                        <p className="py-6">If you want to explore more than you have to Login In !!!</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-success">Login</button>
                            </div>
                            <p><small>New to Ema-John?  <span className='underline text-emerald-400'><Link to='/signup'>
                                Create a New Account!</Link></span></small></p>
                        </div>

                    </div>
                </div>

            </form>
        </div>
    );
};

export default Login;