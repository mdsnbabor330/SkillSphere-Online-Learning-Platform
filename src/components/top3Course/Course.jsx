import { getCourseData } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import CourseCard from '@/UI/CourseCard';


const Course = async () => {
    const courses = await getCourseData()
    console.log(courses);
    const top3Course = courses.slice(0, 3);
    
    return (
        <div className='max-w-325 mx-auto my-20 px-4'>
            <div className='text-center mb-16'>
                <span className='text-[#4eac6d] font-bold uppercase tracking-widest text-sm'>Course</span>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4'>
                    Explore Our Popular <span className='text-[#4eac6d]'>Courses</span>
                </h2>
                <p className='text-gray-500 max-w-2xl mx-auto'>
                    Choose from hundreds of courses designed by industry experts to help you achieve your goals.
                </p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {top3Course.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
            
            <div className='text-center mt-8'>
                <Link href='/allcourse' className="w-full">
                    <button className=' cursor-pointer px-7 py-3 border-2 border-[#4eac6d] rounded-full text-sm font-semibold text-[#4eac6d] hover:text-white hover:bg-[#4eac6d] transition-colors inline-flex items-center gap-2 mx-auto'>
                        View All Courses <FiArrowRight />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Course;