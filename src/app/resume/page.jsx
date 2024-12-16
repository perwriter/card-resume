import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-5xl w-full bg-white shadow-md rounded-2xl p-8 space-y-8">
        {/* Header */}
        <h1 className="text-5xl font-bold mb-4">Resume</h1>
        <hr className="border-t-2 border-orange-400 w-24 mb-6" />

        {/* Education & Experience Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-100 p-4 rounded-lg">
                <p className="text-sm text-gray-500">2020-2021</p>
                <h3 className="font-bold">Software Development</h3>
                <p>Moringa School</p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg">
                <p className="text-sm text-gray-500">2012-2016</p>
                <h3 className="font-bold">Disaster Management</h3>
                <p>Masinde Muliro University</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold">Experience</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-100 p-4 rounded-lg">
                <p className="text-sm text-gray-500">2022 - Present</p>
                <h3 className="font-bold">Technical Mentor</h3>
                <p>Moringa School</p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg">
                <p className="text-sm text-gray-500">2021-2022</p>
                <h3 className="font-bold">Website Development</h3>
                <p>Village 2 Nation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg">
          <div>
            <h2 className="text-2xl font-bold mb-4">Work Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['NEXT.js', 'React.js', 'HTML 5', 'CSS 3', 'Tailwind CSS', 'Figma', 'JavaScript', 'Mongo DB', 'SQL', 'Angular', 'Android', 'Git'].map((skill) => (
                <span key={skill} className="bg-gray-200 px-3 py-1 rounded-md text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Soft Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['Time Management', 'Mentorship', 'Impeccable Communication', 'Flexibility', 'Research', 'Writing'].map((skill) => (
                <span key={skill} className="bg-gray-200 px-3 py-1 rounded-md text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
