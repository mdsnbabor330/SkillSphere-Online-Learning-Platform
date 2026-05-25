import { getCourseData } from '@/lib/data';
import React from 'react';
import CourseCard from '@/UI/CourseCard';
const AllCourses = async () => {
    const course = await getCourseData();
    return (
        <div className='my-20 max-w-325 mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {course.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>           
        </div>
    );
};

export default AllCourses;