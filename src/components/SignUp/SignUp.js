import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <form className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl font-bold">SignUp now <span className='text-emerald-400'>!!</span></h2>
                        <p className="py-6">If you want to explore more than Please SignUp !!!</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="Confirm-password">Confirm Password</span>
                                </label>
                                <input type="password" name='confirm-password' placeholder="confirm password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-success">SignUp</button>
                            </div>
                            <p><small>Already have an Account?  <span className='underline text-emerald-400'><Link to='/login'>
                                Login</Link></span></small></p>
                        </div>

                    </div>
                </div>

            </form>
        </div>
    );
};

export default SignUp;