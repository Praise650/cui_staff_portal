import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Award, Users, Settings, Bell, Edit3, Download, Upload } from 'lucide-react';

export default function StaffProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

  const staffData = {
    name: "Dr. Sarah Johnson",
    title: "Associate Professor",
    department: "Computer Science",
    faculty: "Faculty of Engineering",
    employeeId: "CS-2019-001",
    email: "sarah.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    office: "Engineering Building, Room 304",
    joiningDate: "September 2019",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    bio: "Dr. Sarah Johnson is an Associate Professor in Computer Science with expertise in machine learning and artificial intelligence. She has published over 50 research papers and leads the AI Research Lab.",
    education: [
      { degree: "Ph.D. in Computer Science", institution: "MIT", year: "2018" },
      { degree: "M.S. in Computer Science", institution: "Stanford University", year: "2014" },
      { degree: "B.S. in Computer Engineering", institution: "UC Berkeley", year: "2012" }
    ],
    courses: [
      { code: "CS 401", name: "Machine Learning", semester: "Fall 2024", students: 45 },
      { code: "CS 502", name: "Advanced AI", semester: "Fall 2024", students: 28 },
      { code: "CS 301", name: "Data Structures", semester: "Spring 2024", students: 72 }
    ],
    research: [
      "Neural Networks and Deep Learning",
      "Natural Language Processing",
      "Computer Vision Applications",
      "Reinforcement Learning"
    ],
    publications: 52,
    citations: 1247,
    hIndex: 18
  };

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        activeTab === id 
          ? 'bg-blue-100 text-blue-700 border border-blue-200' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon size={16} />
      {label}
    </button>
  );

  const InfoCard = ({ icon: Icon, label, value, className = "" }) => (
    <div className={`flex items-start gap-3 p-4 bg-white rounded-lg border ${className}`}>
      <Icon className="text-blue-600 mt-1 flex-shrink-0" size={20} />
      <div>
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="text-gray-900 mt-1">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Profile</h1>
                <p className="text-sm text-gray-500">Staff</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Bell size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Settings size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src={staffData.profileImage}
                alt={staffData.name}
                className="w-32 h-32 rounded-xl object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{staffData.name}</h2>
                  <p className="text-lg text-blue-600 font-medium">{staffData.title}</p>
                  <p className="text-gray-600">{staffData.department} • {staffData.faculty}</p>
                  <p className="text-sm text-gray-500 mt-1">Employee ID: {staffData.employeeId}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Edit3 size={16} />
                    Edit Profile
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download size={16} />
                    Export CV
                  </button>
                </div>
              </div>
              <p className="text-gray-700 mt-4 leading-relaxed">{staffData.bio}</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <TabButton id="overview" label="Overview" icon={User} />
          <TabButton id="courses" label="Courses" icon={BookOpen} />
          <TabButton id="research" label="Research" icon={Award} />
          <TabButton id="contact" label="Contact" icon={Mail} />
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {activeTab === 'overview' && (
            <>
              <div className="lg:col-span-2 space-y-6">
                {/* Academic Information */}
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoCard icon={BookOpen} label="Department" value={staffData.department} />
                    <InfoCard icon={Award} label="Faculty" value={staffData.faculty} />
                    <InfoCard icon={Calendar} label="Joining Date" value={staffData.joiningDate} />
                    <InfoCard icon={Users} label="Current Students" value="145 students" />
                  </div>
                </div>

                {/* Education */}
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Education</h3>
                  <div className="space-y-4">
                    {staffData.education.map((edu, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-900">{edu.degree}</p>
                          <p className="text-gray-600">{edu.institution}</p>
                          <p className="text-sm text-gray-500">{edu.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Research Metrics */}
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Research Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Publications</span>
                      <span className="font-semibold text-gray-900">{staffData.publications}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Citations</span>
                      <span className="font-semibold text-gray-900">{staffData.citations}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">H-Index</span>
                      <span className="font-semibold text-gray-900">{staffData.hIndex}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                      <Upload className="text-blue-600" size={20} />
                      <span>Upload Document</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                      <Calendar className="text-green-600" size={20} />
                      <span>Schedule Meeting</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                      <BookOpen className="text-purple-600" size={20} />
                      <span>View Assignments</span>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'courses' && (
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Courses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {staffData.courses.map((course, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{course.code}</h4>
                          <p className="text-gray-600">{course.name}</p>
                        </div>
                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {course.semester}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users size={16} />
                        <span>{course.students} students</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'research' && (
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Research Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {staffData.research.map((area, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-900">{area}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoCard icon={Mail} label="Email Address" value={staffData.email} />
                  <InfoCard icon={Phone} label="Phone Number" value={staffData.phone} />
                  <InfoCard icon={MapPin} label="Office Location" value={staffData.office} className="md:col-span-2" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}