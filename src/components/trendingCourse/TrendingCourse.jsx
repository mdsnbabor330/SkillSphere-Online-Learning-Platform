import React from 'react';
import { getCourseData } from '@/lib/data';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

import CourseCard from '@/ui/CourseCard';


const TrendingCourse = async () => {
    const courses = await getCourseData()
    const top3Course = courses.slice(6, 9);
    
    return (
        <div className='max-w-7xl mx-auto my-20 px-4'>
            <div className='text-center mb-16'>
                <span className='text-[#4eac6d] font-bold uppercase tracking-widest text-sm'>Trending</span>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4'>
                    Top <span className='text-[#4eac6d]'>Courses</span>
                </h2>
                <p className='text-gray-500 max-w-2xl mx-auto'>
                Explore the most popular courses chosen by thousands of students.
                </p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {top3Course.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};



export default TrendingCourse;
