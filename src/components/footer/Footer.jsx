import React from 'react';
import Link from 'next/link';
import { FiBookOpen, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#f9fafb] pt-16 pb-8 border-t border-gray-100 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 pr-8">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <FiBookOpen className="text-[#09C82C] text-2xl" />
                            <span className="text-xl font-bold text-slate-800">SkillSphere</span>
                        </Link>
                        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            Empowering millions of learners worldwide with<br className="hidden lg:block" />
                            industry-leading courses and expert mentors.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-slate-500">
                                <FiMail className="text-[#09C82C] text-base" />
                                <span>hello@skillsphere.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-500">
                                <FiPhone className="text-[#09C82C] text-base" />
                                <span>+1 (234) 567-890</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-500">
                                <FiMapPin className="text-[#09C82C] text-base" />
                                <span>San Francisco, CA</span>
                            </div>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-slate-800 font-bold text-base mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-slate-500 text-sm hover:text-[#09C82C] transition-colors">Features</Link></li>
                            <li><Link href="#" className="text-slate-500 text-sm hover:text-[#09C82C] transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="text-slate-500 text-sm hover:text-[#09C82C] transition-colors">Courses</Link></li>
                            <li><Link href="#" className="text-slate-500 text-sm hover:text-[#09C82C] transition-colors">Community</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-slate-800 font-bold text-base mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-slate-500 text-sm hover:text-[#09C82C] transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-slate-500 text-sm hover:text-[#09C82C] transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-slate-500 text-sm hover:text-[#09C82C] transition-colors">Blog</Link></li>
                            <li><Link href="#" className="text-slate-500 text-sm hover:text-[#09C82C] transition-colors">Press</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-slate-800 font-bold text-base mb-4">Support</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-slate-500 text-sm hover:text-[#09C82C] transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="text-slate-500 text-sm hover:text-[#09C82C] transition-colors">Contact Us</Link></li>
                            <li><Link href="#" className="text-slate-500 text-sm hover:text-[#09C82C] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-slate-500 text-sm hover:text-[#09C82C] transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        © 2026 SkillSphere. All rights reserved
                    </p>
                    <div className="flex items-center gap-4 text-slate-500">
                        <Link href="#" className="hover:text-[#09C82C] transition-colors">
                            <FaXTwitter className="text-lg" />
                        </Link>
                        <Link href="#" className="hover:text-[#09C82C] transition-colors">
                            <FiLinkedin className="text-lg" />
                        </Link>
                        <Link href="#" className="hover:text-[#09C82C] transition-colors">
                            <FiGithub className="text-lg" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;