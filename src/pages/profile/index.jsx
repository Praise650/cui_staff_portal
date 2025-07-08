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

// import React from 'react';

const StaffProfile = () => {
  return (
    <div className=" mx-auto ">
      <div className="bg-white p-6 md:flex md:space-x-6">
        {/* Profile Picture */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <img
            className="w-40 h-40 rounded-full object-cover border-4 border-indigo-500"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
            alt="Staff profile"
          />
        </div>
        
        {/* Profile Info */}
        <div className="mt-4 md:mt-0 flex-1">
          <h2 className="text-2xl font-semibold text-gray-800">Dr. Jane Doe</h2>
          <p className="text-indigo-600">Associate Professor, Department of Computer Science</p>
          <p className="mt-2 text-gray-600">
            Dr. Jane Doe specializes in artificial intelligence and data science,
            with over 10 years of teaching and research experience.
          </p>
          
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-gray-700 font-medium">Email</h3>
              <p className="text-gray-600">jane.doe@university.edu</p>
            </div>
            <div>
              <h3 className="text-gray-700 font-medium">Phone</h3>
              <p className="text-gray-600">+1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-gray-700 font-medium">Office</h3>
              <p className="text-gray-600">Room 302, Science Building</p>
            </div>
            <div>
              <h3 className="text-gray-700 font-medium">Joined</h3>
              <p className="text-gray-600">September 2015</p>
            </div>
          </div>
          
          <div className="mt-6">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffProfile;
