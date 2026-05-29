"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const mentors = [
    {
        name: "John Doe",
        role: "Senior Full Stack Developer",
        rating: "4.9",
        students: "3200+ students",
        image: "https://i.pravatar.cc/150?img=11"
    },
    {
        name: "Emily Chen",
        role: "Data Scientist",
        rating: "4.9",
        students: "3000+ students",
        image: "https://i.pravatar.cc/150?img=5"
    },
    {
        name: "Sarah Khan",
        role: "Lead UI UX Designer",
        rating: "4.8",
        students: "2800+ students",
        image: "https://i.pravatar.cc/150?img=9"
    },
    {
        name: "Michael Lee",
        role: "Frontend Architect",
        rating: "4.8",
        students: "2700+ students",
        image: "https://i.pravatar.cc/150?img=13"
    },
    {
        name: "David Smith",
        role: "Mobile Developer",
        rating: "4.9",
        students: "2900+ students",
        image: "https://i.pravatar.cc/150?img=60"
    },
];

const Mentors = () => {
    const tickerItems = [...mentors, ...mentors];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20 overflow-hidden">
            <div className="mb-10">
                <span className="text-[#09ac6e] font-semibold uppercase tracking-wider text-sm block mb-3">
                    Top Instructors
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    Learn From Experts
                </h2>
            </div>
            
            <div className="relative w-full overflow-hidden py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
                <motion.div 
                    className="flex gap-6 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ 
                        repeat: Infinity, 
                        ease: "linear", 
                        duration: 25 
                    }}
                >
                    {tickerItems.map((mentor, index) => (
                        <div 
                            key={index} 
                            className="w-[280px] shrink-0 bg-white rounded-2xl border border-gray-100 p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
                        >
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-5 bg-gray-100">
                                <Image
                                    src={mentor.image}
                                    alt={mentor.name}
                                    width={96}
                                    height={96}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">
                                {mentor.name}
                            </h3>
                            <p className="text-slate-500 text-sm mb-6">
                                {mentor.role}
                            </p>
                            <div className="flex items-center justify-center gap-3 text-sm mt-auto">
                                <div className="bg-[#fff7e6] text-[#d49900] px-2 py-1 rounded font-bold text-xs">
                                    {mentor.rating}
                                </div>
                                <span className="text-slate-400 font-medium text-xs">
                                    {mentor.students}
                                </span>
                            </div>
                        </div>
                    ))}
                </motion.div>
                
                <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10 hidden sm:block"></div>
                <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 hidden sm:block"></div>
            </div>
        </section>
    );
};

export default Mentors;