import { getCourseData } from '@/lib/data';
import React from 'react';

const AllCourses = async () => {
    const course = await getCourseData();
    return (
        <div className='my-20'>
            <h1 className='text-center font-bold text-3xl text-[#4eac6d] my-10'>All Courses</h1>
            <div>
                
            </div>            
        </div>
    );
};

export default AllCourses;