import React from 'react';

const LearningTips = () => {
    const tips = [
        {
            title: "Set Weekly Learning Goals",
            description: "Plan small achievable goals every week and track your progress."
        },
        {
            title: "Practice with Real Projects",
            description: "Apply concepts to projects so you remember and understand better."
        },
        {
            title: "Use the Pomodoro Method",
            description: "Study in focused sessions with short breaks to avoid burnout."
        },
        {
            title: "Revise Before New Lessons",
            description: "Quick revision improves retention and prepares your mind for new topics."
        },
        {
            title: "Teach What You Learn",
            description: "Explaining concepts to others strengthens your understanding."
        },
        {
            title: "Stay Consistent",
            description: "Learning a little every day is better than cramming occasionally."
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
            <div className="bg-white rounded-[2rem] border border-gray-100 p-8 md:p-12 shadow-[0_2px_20px_rgb(0,0,0,0.07)]">
                <div className="mb-10">
                    <span className="text-[#09C82C] font-semibold uppercase tracking-wider text-sm block mb-3">
                        Learning Tips
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                        Study Smarter Every Day
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {tips.map((tip, index) => (
                        <div 
                            key={index} 
                            className="bg-[#f8fafc] p-6 md:p-7 rounded-2xl border border-slate-100 transition-colors hover:bg-slate-50"
                        >
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                {tip.title}
                            </h3>
                            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                                {tip.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningTips;