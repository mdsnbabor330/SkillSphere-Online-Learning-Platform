import { getCourseDetailsData } from '@/lib/data';
import { FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CourseDetails = async ({ params }) => {
    const { id } = await params;
    const courseDetails = await getCourseDetailsData(id);
    
    return (
        <div className='my-20 max-w-300 mx-auto px-4'>
                <Link href="/allcourse" className='my-6 flex items-center gap-2 cursor-pointer text-gray-500 hover:text-[#4eac6d] font-extrabold text-[14px] uppercase tracking-wider'> 
                <FaArrowLeft/> <span>Back to all courses</span></Link>
            <div className='flex flex-col lg:flex-row gap-8 items-start'>
                <div className='w-full lg:w-[45%]'>
                    <div className='relative rounded-2xl overflow-hidden shadow-sm'>
                        <Image 
                            src={courseDetails.image} 
                            alt={courseDetails.title} 
                            width={800} 
                            height={600} 
                            className='w-full h-auto object-cover'
                        />
                    </div>
                    
                    <div className='mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-4'>
                        <img 
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(courseDetails.instructor)}&background=random&size=64`} 
                            alt={courseDetails.instructor}
                            className='w-14 h-14 rounded-full object-cover border border-gray-100' 
                        />
                        <div>
                            <span className='text-[11px] font-extrabold text-gray-400 uppercase tracking-wider'>Course Instructor</span>
                            <h3 className='text-lg font-bold text-gray-900'>{courseDetails.instructor}</h3>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-[55%] bg-white rounded-2xl shadow-sm border border-gray-100 p-8'>
                    <span className='text-gray-500 font-extrabold text-[11px] uppercase tracking-wider'>{courseDetails.category}</span>
                    <h1 className='text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2 mb-4 leading-[1.1]'>
                        {courseDetails.title}
                    </h1>
                    
                    <div className='flex flex-wrap gap-2 mb-4 text-[12px] font-bold'>
                        <span className='bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full'>{courseDetails.rating} rating</span>
                        <span className='bg-teal-50 text-teal-700 px-3 py-1 rounded-full'>{courseDetails.level}</span>
                        <span className='bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full'>{courseDetails.duration}</span>
                    </div>

                    <p className='text-gray-500 text-[15px] mb-6 leading-relaxed'>
                        {courseDetails.description}
                    </p>
                    
                    <h2 className='text-[22px] font-bold text-gray-900 mb-4'>Curriculum</h2>
                    <div className='flex flex-col gap-3 mb-8'>
                        {courseDetails.lessons?.map((lesson, index) => (
                            <div key={index} className='flex items-center gap-4 p-3 border border-gray-200 rounded-lg'>
                                <span className='bg-teal-50 text-teal-700 text-[10px] font-bold px-3 py-1 rounded-full'>Lesson</span>
                                <span className='text-gray-600 text-[15px]'>{lesson}</span>
                            </div>
                        ))}
                    </div>

                    <button className='bg-[#4eac6d] hover:bg-[#4eac6d] text-white font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer'>
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;