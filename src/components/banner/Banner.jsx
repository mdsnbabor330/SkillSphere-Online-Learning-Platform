import React from 'react';
import Image from 'next/image';
import { FaPlay, FaArrowRight, FaYoutube, FaStar } from 'react-icons/fa';
import { FiUsers, FiBookOpen, FiAward } from 'react-icons/fi';

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-white pt-24">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-200/50 rounded-full blur-[100px] -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 relative z-10">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-green-600 font-medium text-sm">New Courses Available</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl  font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                            Master New Skills <br />
                            <span className="text-green-500">Online Anytime,</span> <br />
                            Anywhere
                        </h1>

                        {/* Subheading */}
                        <p className="text-gray-500 text-lg sm:text-xl max-w-lg leading-relaxed">
                            Join over 50,000+ students learning from world-class mentors.
                            Transform your career with industry-leading courses.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30">
                                Start Learning
                                <FaArrowRight className="text-sm" />
                            </button>
                            <button className="w-full sm:w-auto justify-center inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-700 font-bold rounded-full hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm">
                                <FaYoutube className="text-red-500 text-xl" />
                                YouTube Channel
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-6">
                            <div className="flex items-center gap-3">
                                <div className="text-green-500 text-xl sm:text-2xl">
                                    <FiUsers />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-900 leading-tight text-sm sm:text-base">50K+ Students</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-green-500 text-xl sm:text-2xl">
                                    <FiBookOpen />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-900 leading-tight text-sm sm:text-base">80+ Courses</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-green-500 text-xl sm:text-2xl">
                                    <FiAward />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-900 leading-tight text-sm sm:text-base">4.9 Rating</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image/Graphic */}
                    <div className="relative mx-auto w-full max-w-lg lg:max-w-none mt-12 lg:mt-0 z-10">
                        {/* Main Image Container */}
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white bg-white">
                            <Image
                                src="/hero_image.png" 
                                alt="Student learning online" 
                                width={800}
                                height={800}
                                className="w-full h-auto object-cover aspect-[4/3] rounded-[1.5rem]"
                            />
                            
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/5 rounded-[1.5rem]">
                                <button className="w-20 h-20 bg-green-500/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-green-500 transition-all cursor-pointer ring-8 ring-white/50">
                                    <FaPlay className="ml-1 text-2xl" />
                                </button>
                            </div>
                        </div>

                        {/* Top Right Floating Card */}
                        <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-8 bg-white px-4 sm:px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="flex -space-x-3">
                                <Image width={50} height={50} src="https://i.pravatar.cc/150?img=1" alt="Student" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover" />
                                <Image width={50} height={50} src="https://i.pravatar.cc/150?img=2" alt="Student" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover" />
                                <Image width={50} height={50} src="https://i.pravatar.cc/150?img=3" alt="Student" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover" />
                            </div>
                            <div className="flex flex-col pr-2">
                                <span className="text-xs sm:text-sm font-bold text-gray-900">Join 50k+</span>
                                <span className="text-[10px] sm:text-xs text-gray-500 font-medium">Students</span>
                            </div>
                        </div>

                        {/* Bottom Left Floating Card */}
                        <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-8 bg-white px-5 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 border border-gray-100 animate-bounce" style={{ animationDuration: '4s' }}>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500 shrink-0">
                                <FiBookOpen className="text-xl sm:text-2xl" />
                            </div>
                            <div className="flex flex-col pr-2">
                                <span className="text-xs sm:text-sm font-bold text-gray-900">200+ Courses</span>
                                <span className="text-[10px] sm:text-xs text-gray-500 font-medium">Available Now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;