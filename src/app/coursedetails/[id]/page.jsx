import { getCourseDetailsData } from '@/lib/data';
import { FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CourseDetails = async ({ params }) => {
    const { id } = await params;
    const courseDetails = await getCourseDetailsData(id);
    
    return (
        <div className='my-20 max-w-[1200px] mx-auto px-4'>
           
        </div>
    );
};

export default CourseDetails;