"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import { IoBookOutline } from "react-icons/io5";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle registration logic here
    };

    const password = watch("password");

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200/30 p-4">
            <div className="max-w-md w-full bg-base-100 rounded-2xl shadow-sm border border-base-300 p-8">
                
                <div className="flex flex-col items-center mb-8">
                    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-base-content mb-6">
                        <IoBookOutline className="text-[#09C82C] text-3xl" />
                        <span>SkillSphere</span>
                    </Link>
                    <h2 className="text-xl font-semibold text-base-content">Create an account</h2>
                    <p className="text-sm text-base-content/60 mt-1">Enter your details to get started.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex gap-3">
                        <div className="form-control w-full">
                            <label className="label py-1">
                                <span className="label-text font-medium text-base-content/80">First Name</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="First name" 
                                className={`input input-bordered w-full focus:outline-none focus:border-[#09C82C] ${errors.firstName ? 'input-error' : ''}`}
                                {...register("firstName", { required: "Required" })}
                            />
                            {errors.firstName && <span className="text-error text-xs mt-1">{errors.firstName.message}</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label py-1">
                                <span className="label-text font-medium text-base-content/80">Last Name</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="Last name" 
                                className={`input input-bordered w-full focus:outline-none focus:border-[#09C82C] ${errors.lastName ? 'input-error' : ''}`}
                                {...register("lastName", { required: "Required" })}
                            />
                            {errors.lastName && <span className="text-error text-xs mt-1">{errors.lastName.message}</span>}
                        </div>
                    </div>

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
                        </label>
                        <div className="relative">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="••••••••" 
                                className={`input input-bordered w-full focus:outline-none focus:border-[#09C82C] pr-10 ${errors.password ? 'input-error' : ''}`}
                                {...register("password", { 
                                    required: "Password is required",
                                    minLength: { value: 8, message: "Min 8 characters" }
                                })}
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

                    <button type="submit" className="btn bg-[#09C82C] text-white border-none hover:bg-[#08a323] w-full mt-4 font-medium">
                        Create Account
                    </button>
                </form>

                <div className="divider text-base-content/40 text-xs my-6">OR</div>

                <button className="btn btn-outline border-base-300 hover:bg-base-200 hover:text-base-content w-full text-base-content font-medium text-sm flex gap-2">
                    <FaGoogle className="text-red-500 text-lg" />
                    Sign up with Google
                </button>

                <p className="text-center text-sm text-base-content/60 mt-8">
                    Already have an account? <Link href="/signin" className="text-[#09C82C] hover:underline font-medium">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;