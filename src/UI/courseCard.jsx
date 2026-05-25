import React from 'react';
import { FiClock, FiUsers, FiArrowRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const getCategoryColor = (category) => {
    switch (category?.toLowerCase()) {
        case 'development': return 'bg-amber-500';
        case 'design': return 'bg-red-500';
        case 'data': return 'bg-cyan-500';
        case 'marketing': return 'bg-green-500';
        default: return 'bg-blue-500';
    }
};

const getPrice = (category) => {
    switch (category?.toLowerCase()) {
        case 'development': return '$49';
        case 'design': return '$79';
        case 'data': return '$129';
        case 'marketing': return '$69';
        default: return '$99';
    }
};

const courseCard = ({course}) => {
    return (
        <div>
            <div key={course.id} className='border border-gray-100 rounded-[22px] p-4 bg-white shadow-sm hover:shadow-md transition-shadow'>
                        {/* Image Container */}
                        <div className='relative rounded-2xl overflow-hidden h-62 mb-5 bg-gray-50'>
                            <Image 
                                src={course.image} 
                                alt={course.title} 
                                width={500}
                                height={500}
                                className='w-full h-full object-cover'
                            />
                            <span className={`absolute top-4 left-4 px-3 py-1 text-[11px] font-semibold text-white rounded-full ${getCategoryColor(course.category)}`}>
                                {course.category}
                            </span>
                        </div>
                        
                        {/* Card Content */}
                        <div className='flex flex-col gap-3 px-2'>
                            <h3 className='font-bold text-[18px] leading-snug text-gray-900 line-clamp-2'>
                                {course.title}
                            </h3>
                            
                            <div className='flex items-center gap-2 mb-1'>
                                <img 
                                    src={`https://ui-avatars.com/api/?name=${course.instructor}&background=random&size=32`} 
                                    alt={course.instructor}
                                    className='w-6 h-6 rounded-full' 
                                />
                                <span className='text-sm text-gray-500'>{course.instructor}</span>
                            </div>
                            
                            {/* Meta Data */}
                            <div className='flex items-center justify-between text-sm text-gray-500 pt-3 pb-3 border-b border-gray-100'>
                                <div className='flex items-center gap-1.5'>
                                    <FiClock className='text-gray-400 text-[15px]' /> 
                                    <span>{course.duration.replace(' hours', ' weeks')}</span>
                                </div>
                                <div className='flex items-center gap-1.5'>
                                    <FiUsers className='text-gray-400 text-[15px]' /> 
                                    <span>{course.enrolledStudents}</span>
                                </div>
                                <div className='flex items-center gap-1.5 font-medium'>
                                    <FaStar className='text-amber-400 text-[15px]' /> 
                                    <span className='text-gray-600'>{course.rating}</span>
                                </div>
                            </div>
                            
                            {/* Footer */}
                            <div className='flex items-center justify-between pt-2 pb-1'>
                                <span className='text-2xl font-extrabold text-gray-900'>{getPrice(course.category)}</span>
                                <Link href={`/coursedetails/${course.id}`}>
                                    <button className='cursor-pointer text-[#4eac6d] text-[15px] font-semibold hover:text-green-600 flex items-center gap-1 transition-colors'>
                                        Details <FiArrowRight className="text-lg" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default courseCard;