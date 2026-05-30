import { getCourseData } from '@/lib/data';
import React from 'react';
import CourseCard from '@/ui/CourseCard';
const AllCourses = async () => {
    const course = await getCourseData();
    return (
        <div className='my-10 max-w-7xl mx-auto px-4'>
            <div className='text-center mb-16'>
                <span className='text-[#09C82C] font-bold uppercase tracking-widest text-sm'>Browse</span>
                <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4'>
                    All <span className='text-[#09C82C]'>Courses</span>
                </h1>
                <p className='text-gray-500 max-w-2xl mx-auto'>
                    Explore our full catalog of courses designed by industry experts.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {course.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>           
        </div>
    );
};

export default AllCourses;