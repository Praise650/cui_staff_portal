import React, { useState } from 'react';
import avatar from '../../assets/images/default-avatar-photo.jpg';

// function ProfilePage() {
//   const [user, setUser] = useState({
//     name: 'Praise Afuwape',
//     role: 'Admin',
//     email: 'praise.afuwape@example.com',
//     phone: '+1234567890',
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsEditing(false);
//     // TODO: Implement API call to save updated user data
//     console.log('Updated user:', user);
//   };

//   return (
//     <div className="p-4 sm:p-6 lg:p-8">
//       <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Profile</h1>
//       <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
//         {/* Profile Header */}
//         <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
//           <img
//             className="h-24 w-24 sm:h-32 sm:w-32 rounded-full border-4 border-[#4F1DA0] object-cover"
//             src={avatar}
//             alt="Profile avatar"
//           />
//           <div className="text-center sm:text-left">
//             <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{user.name}</h2>
//             <p className="text-gray-600">{user.role}</p>
//             <p className="text-gray-600">{user.email}</p>
//           </div>
//         </div>

//         {/* Profile Details */}
//         <div className="border-t border-gray-200 pt-6">
//           {isEditing ? (
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={user.name}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4F1DA0] focus:ring-[#4F1DA0] sm:text-sm"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={user.email}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4F1DA0] focus:ring-[#4F1DA0] sm:text-sm"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={user.phone}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4F1DA0] focus:ring-[#4F1DA0] sm:text-sm"
//                 />
//               </div>
//               <div className="flex justify-end gap-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsEditing(false)}
//                   className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4F1DA0]"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 text-sm font-medium text-white bg-[#4F1DA0] rounded-md hover:bg-[#723EC8] focus:outline-none focus:ring-2 focus:ring-[#A97DF3]"
//                 >
//                   Save
//                 </button>
//               </div>
//             </form>
//           ) : (
//             <div className="space-y-4">
//               <div>
//                 <p className="text-sm font-medium text-gray-700">Full Name</p>
//                 <p className="text-gray-900">{user.name}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-700">Email</p>
//                 <p className="text-gray-900">{user.email}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-700">Phone</p>
//                 <p className="text-gray-900">{user.phone || 'Not provided'}</p>
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   onClick={() => setIsEditing(true)}
//                   className="px-4 py-2 text-sm font-medium text-white bg-[#4F1DA0] rounded-md hover:bg-[#723EC8] focus:outline-none focus:ring-2 focus:ring-[#A97DF3]"
//                 >
//                   Edit Profile
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;


export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Card container */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        {/* Profile picture */}
        <div className="flex-shrink-0">
          <img
            src="https://i.pravatar.cc/150?img=8"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
          />
        </div>

        {/* Info section */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-1">Alex Johnson</h2>
          <p className="text-blue-600 mb-4">Senior Software Engineer</p>

          <div className="text-gray-600 mb-4">
            <p><span className="font-semibold">Department:</span> Engineering</p>
            <p><span className="font-semibold">Email:</span> alex.johnson@example.com</p>
            <p><span className="font-semibold">Phone:</span> +1 (555) 123-4567</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-gray-700">
              Passionate software engineer with 8+ years of experience in building scalable web applications.
              Loves mentoring junior developers and exploring new technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Stats / quick info */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl shadow-md p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">8</p>
          <p className="text-gray-600">Years at Company</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">24</p>
          <p className="text-gray-600">Projects Completed</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4 text-center">
          <p className="text-2xl font-bold text-blue-600">15</p>
          <p className="text-gray-600">Team Members Mentored</p>
        </div>
      </div>
    </div>
  );
}
