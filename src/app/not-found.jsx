import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen font-sans bg-white text-center p-8 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-200/40 rounded-full blur-[100px] -z-10"></div>
            
            <h1 className="text-[8rem] font-extrabold m-0 text-green-500 leading-tight">
                404
            </h1>
            <h2 className="text-3xl font-semibold mb-4 mt-0 text-gray-900">
                Page Not Found
            </h2>
            <p className="text-lg text-gray-500 mb-8 max-w-[450px] leading-relaxed">
                Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link 
                href="/" 
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#09C82C] text-white font-bold rounded-full hover:bg-green-600 transition-colors shadow-lg shadow-[#09C82C]/30"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;