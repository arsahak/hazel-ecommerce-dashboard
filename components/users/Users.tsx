// "use client";
// import React, { useState } from "react";
// import { RiDeleteBin6Fill } from "react-icons/ri";

// // Define the user interface
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   profileImage: string;
//   phoneNumber: string;
//   role: "admin" | "user";
//   status: "active" | "inactive";
//   dateJoined: string;
// }

// // Mock user data
// const initialUsers: User[] = [
//   {
//     id: 1,
//     name: "John Doe",
//     email: "john@example.com",
//     profileImage: "/path/to/image.jpg",
//     phoneNumber: "+1234567890",
//     role: "admin",
//     status: "active",
//     dateJoined: "2023-01-15",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     email: "jane@example.com",
//     profileImage: "/path/to/image.jpg",
//     phoneNumber: "+1234567890",
//     role: "user",
//     status: "inactive",
//     dateJoined: "2023-02-20",
//   },
//   {
//     id: 3,
//     name: "Alice Johnson",
//     email: "alice@example.com",
//     profileImage: "/path/to/image.jpg",
//     phoneNumber: "+1234567890",
//     role: "user",
//     status: "active",
//     dateJoined: "2023-03-05",
//   },
// ];

// const Users: React.FC = () => {
//   const [users, setUsers] = useState<User[]>(initialUsers);

//   // Handle user blocking
//   const blockUser = (userId: number) => {
//     setUsers((prev) =>
//       prev.map((user) =>
//         user.id === userId ? { ...user, status: "inactive" } : user
//       )
//     );
//   };

//   // Handle role change
//   const changeRole = (userId: number, newRole: "admin" | "user") => {
//     setUsers((prev) =>
//       prev.map((user) =>
//         user.id === userId ? { ...user, role: newRole } : user
//       )
//     );
//   };

//   // Handle updating user info
//   const updateUserInfo = (userId: number) => {
//     console.log(`Update info for user with ID: ${userId}`);
//     // Implement your update logic here (e.g., navigate to an edit form or show a modal).
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Customer List</h1>
//       <table className="min-w-full bg-white border border-gray-200">
//         <thead className="bg-gray-50">
//           <tr className="text-left">
//             <th className="py-4 px-4 font-medium text-sm">PROFILE</th>
//             <th className="py-4 px-4 font-medium text-sm">EMAIL</th>
//             <th className="py-4 px-4 font-medium text-sm">PHONE</th>
//             <th className="py-4 px-4 font-medium text-sm">STATUS</th>
//             <th className="py-4 px-4 font-medium text-sm">DATE JOINED</th>
//             <th className="py-4 px-4 font-medium text-sm">ACTIONS</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id} className="border-t hover:bg-gray-50">
//               <td className="py-4 px-4 text-gray-600 flex items-center">
//                 <img
//                   src={user.profileImage}
//                   alt="Profile"
//                   className="w-8 h-8 rounded-full mr-3"
//                 />
//                 {user.name}
//               </td>
//               <td className="py-4 px-4">{user.email}</td>
//               <td className="py-4 px-4">{user.phoneNumber}</td>
//               <td className="py-4 px-4">
//                 <span
//                   className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
//                     user.status === "active"
//                       ? "bg-blue-600 text-white"
//                       : "bg-red-500 text-white"
//                   }`}
//                 >
//                   {user.status}
//                 </span>
//               </td>
//               <td className="py-4 px-4">{user.dateJoined}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                 {user.role === "admin" ? (
//                   <>
//                     <button
//                       className="bg-red-100 hover:bg-red-200 p-1.5 rounded-lg"
//                       onClick={() => blockUser(user.id)}
//                     >
//                       <RiDeleteBin6Fill className="text-red-500 size-4" />
//                     </button>
//                     <button
//                       className="bg-yellow-100 hover:bg-yellow-200 p-1.5 rounded-lg ml-2"
//                       onClick={() => changeRole(user.id, "user")}
//                     >
//                       Change to User
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <button
//                       className="bg-blue-100 hover:bg-blue-200 p-1.5 rounded-lg"
//                       onClick={() => updateUserInfo(user.id)}
//                     >
//                       Update Info
//                     </button>
//                     <button
//                       className="bg-yellow-100 hover:bg-yellow-200 p-1.5 rounded-lg ml-2"
//                       onClick={() => changeRole(user.id, "admin")}
//                     >
//                       Change to Admin
//                     </button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Users;


"use client"
import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import img from '@/public/assets/images.png'

interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  status: "active" | "inactive";
  dateJoined: string;
}

const mockUsers: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "user", status: "active", dateJoined: "2023-01-15" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "user", status: "inactive", dateJoined: "2023-02-20" },
  { id: 3, name: "Admin User", email: "admin@example.com", role: "admin", status: "active", dateJoined: "2023-03-10" },
];

export default function Users() {
  const [isAdmin, setIsAdmin] = useState(false); // Change this to toggle between roles
  const [users, setUsers] = useState<User[]>(mockUsers);

  const [profile, setProfile] = useState({
    name: "John Doe",
    phoneNumber: "+1 123-456-7890",
    email: "john@example.com",
    picture: "https://via.placeholder.com/150",
  });

  const [editMode, setEditMode] = useState(false);
  const [tempProfile, setTempProfile] = useState({ ...profile });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTempProfile({ ...tempProfile, [name]: value });
  };

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setTempProfile({ ...tempProfile, picture: reader.result as string });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = () => {
    setProfile(tempProfile);
    setEditMode(false);
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setEditMode(false);
  };


  const handleRoleChange = (id: number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, role: user.role === "user" ? "admin" : "user" } : user
      )
    );
  };

  const toggleBlockUser = (id: number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "active" ? "inactive" : "active" }
          : user
      )
    );
  };

  const handleDeleteUser = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  if (isAdmin) {
    // User Profile View
    return (
      <div className="bg-white p-6 w-full  shadow-md rounded-lg">
        <div className="flex items-center space-x-6 mb-6">
          <div className="relative">
            <img
              src={tempProfile.picture}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border"
            />
            {editMode && (
              <label className="absolute bottom-0 right-0 bg-primary text-white p-1 text-sm rounded-full cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePictureChange}
                />
                Edit
              </label>
            )}
          </div>
          <div>
            <h2 className="text-xl font-bold">
              {editMode ? (
                <input
                  type="text"
                  name="name"
                  value={tempProfile.name}
                  onChange={handleInputChange}
                  className="border px-3 py-2 rounded-md w-full"
                  placeholder="Full Name"
                />
              ) : (
                profile.name
              )}
            </h2>
            <p className="text-gray-500">{profile.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm text-gray-700">Phone Number</label>
            {editMode ? (
              <input
                type="text"
                name="phoneNumber"
                value={tempProfile.phoneNumber}
                onChange={handleInputChange}
                className="border px-3 py-2 rounded-md w-full"
                placeholder="Phone Number"
              />
            ) : (
              <p className="text-gray-700">{profile.phoneNumber}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-700">Email Address</label>
            {editMode ? (
              <input
                type="email"
                name="email"
                value={tempProfile.email}
                onChange={handleInputChange}
                className="border px-3 py-2 rounded-md w-full"
                placeholder="Email Address"
              />
            ) : (
              <p className="text-gray-700">{profile.email}</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          {editMode ? (
            <div className="flex space-x-4">
              <button
                className="px-6 py-2 bg-primary text-white rounded-md"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="px-6 py-2 border border-gray-400 text-gray-400 hover:text-primary focus:ring-2 focus:ring-primary rounded-md"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="px-6 py-2 bg-primary hover:bg-primary/80 text-white rounded-md"
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    );
  } else {
    // Admin Table View
    return (
      <div className="bg-white w-full border overflow-x-auto ">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="py-4 px-4 font-medium text-sm">NAME</th>
              <th className="py-4 px-4 font-medium text-sm">EMAIL</th>
              <th className="py-4 px-4 font-medium text-sm">ROLE</th>
              <th className="py-4 px-4 font-medium text-sm">STATUS</th>
              <th className="py-4 px-4 font-medium text-sm">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50">
                <td className="py-4 px-4 text-gray-600">{user.name}</td>
                <td className="py-4 px-4">{user.email}</td>
                <td className="py-4 px-4">{user.role}</td>
                <td className="py-4 px-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${user.status === "active" ? "bg-blue-600 text-white" : "bg-red-600 text-white"
                      }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="flex flex-wrap space-y-1 lg:space-y-0 py-4 px-2 space-x-1 lg:space-x-2 w-full">
                  <button
                    className="flex items-center border text-xs lg:text-md bg-primary text-white hover:bg-primary/80 p-1 rounded-lg"
                    // className="flex items-center"
                    onClick={() => handleRoleChange(user.id)}
                  >
                    Make Role
                    {/* <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.id, e.target.value as "admin" | "user")}
                      className="rounded-md"
                    >
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select> */}
                    {/* <IoIosArrowDown /> */}
                  </button>
                  <button
                    className={`text-xs lg:text-md ${user.status === "active"
                        ? "border border-red-600 focus:ring-2 focus:border-none focus:ring-red-600 text-red-600"
                        : "border border-primary focus:ring-2 focus:border-none focus:ring-primary text-primary"
                      } p-1.5 rounded-lg`}
                    onClick={() => toggleBlockUser(user.id)}
                  >
                    {user.status === "active" ? "Block" : "Unblock"}
                  </button>
                  <button
                    className="bg-red-100 hover:bg-red-200  lg:py-1 px-1 lg:px-2 rounded-lg"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <RiDeleteBin6Fill className="text-red-500 size-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

