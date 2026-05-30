"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGithub, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import { IoBookOutline } from "react-icons/io5";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle login logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200/30 p-4">
            <div className="max-w-md w-full bg-base-100 rounded-2xl shadow-sm border border-base-300 p-8">
                
                <div className="flex flex-col items-center mb-8">
                    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-base-content mb-6">
                        <IoBookOutline className="text-[#09C82C] text-3xl" />
                        <span>SkillSphere</span>
                    </Link>
                    <h2 className="text-xl font-semibold text-base-content">Welcome back</h2>
                    <p className="text-sm text-base-content/60 mt-1">Please enter your details to log in.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="form-control w-full">
                        <label className="label py-1">
                            <span className="label-text font-medium text-base-content/80">Email</span>
                        </label>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className={`input input-bordered w-full focus:outline-none focus:border-[#09C82C] ${errors.email ? 'input-error' : ''}`}
                            {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" } })}
                        />
                        {errors.email && <span className="text-error text-xs mt-1">{errors.email.message}</span>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label py-1">
                            <span className="label-text font-medium text-base-content/80">Password</span>
                            <Link href="#" className="label-text-alt text-[#09C82C] hover:underline">Forgot password?</Link>
                        </label>
                        <div className="relative">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="••••••••" 
                                className={`input input-bordered w-full focus:outline-none focus:border-[#09C82C] pr-10 ${errors.password ? 'input-error' : ''}`}
                                {...register("password", { required: "Password is required" })}
                            />
                            <button 
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-base-content/40 hover:text-base-content"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {errors.password && <span className="text-error text-xs mt-1">{errors.password.message}</span>}
                    </div>

                    <div className="form-control mt-2">
                        <label className="cursor-pointer flex items-center gap-2">
                            <input type="checkbox" className="checkbox checkbox-sm rounded border-base-300 checked:border-[#09C82C] checked:bg-[#09C82C]" />
                            <span className="text-sm text-base-content/70">Remember me</span>
                        </label>
                    </div>

                    <button type="submit" className="btn bg-[#09C82C] text-white border-none hover:bg-[#08a323] w-full mt-2 font-medium">
                        Log In
                    </button>
                </form>

                <div className="divider text-base-content/40 text-xs my-6">OR</div>

                <div className="">
                    <button className="btn btn-outline w-full border-base-300 hover:bg-base-200 hover:text-base-content flex-1 text-base-content font-medium text-sm">
                        <FaGoogle className="text-red-500 text-lg" />
                        Google
                    </button>
                </div>

                <p className="text-center text-sm text-base-content/60 mt-8">
                    Dont have an account? <Link href="/signup" className="text-[#09C82C] hover:underline font-medium">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;