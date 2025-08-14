import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Akriti",
    image: assets.profile_pic,
    email: "akriti@gmail.com",
    phone: "1234567890",
    address: {
      line1: "D-1/240",
      line2: "Sector-1, Noida"
    },
    gender: "Female",
    dob: "1999-01-01"
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg w-full mx-auto flex flex-col gap-4 text-sm p-4 sm:p-6 bg-gray-100 shadow rounded-lg">
      
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <img
          src={userData.image}
          alt="Profile"
          className="w-28 sm:w-36 rounded-full object-cover"
        />
        {isEdit ? (
          <input
            type="text"
            className="bg-gray-50 text-2xl sm:text-3xl font-medium w-full text-center mt-4 p-1 rounded"
            value={userData.name}
            onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
          />
        ) : (
          <p className="text-2xl sm:text-3xl font-medium mt-4 text-center">{userData.name}</p>
        )}
      </div>

      <hr className="border-gray-400" />

      {/* Contact Information */}
      <div>
        <p className="text-neutral-600 mt-3 font-semibold">CONTACT INFORMATION</p>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email Id:</p>
          <p className="text-blue-600 break-all">{userData.email}</p>   

          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              type="text"
              className="bg-gray-100 w-full sm:max-w-52 p-1 rounded"
              value={userData.phone}
              onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
            />
          ) : (
            <p className="text-blue-600">{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <div className="flex flex-col gap-2">
              <input
                type="text"
                className="bg-gray-50 p-1 rounded"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData(prev => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value }
                  }))
                }
              />
              <input
                type="text"
                className="bg-gray-50 p-1 rounded"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData(prev => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value }
                  }))
                }
              />
            </div>
          ) : (
            <p className="text-gray-700 whitespace-pre-line">
              {userData.address.line1}
              {"\n"}
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      {/* Basic Information */}
      <div>
        <p className="text-neutral-600 mt-3 font-semibold">BASIC INFORMATION</p>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="w-full sm:max-w-28 bg-gray-100 p-1 rounded"
              value={userData.gender}
              onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-700">{userData.gender}</p>
          )}

          <p className="font-medium">Date of Birth:</p>
          {isEdit ? (
            <input
              type="date"
              className="w-full sm:max-w-36 bg-gray-100 p-1 rounded"
              value={userData.dob}
              onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
            />
          ) : (
            <p className="text-gray-700">{userData.dob}</p>
          )}
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-6">
        <button
          className={`w-full sm:w-auto px-6 py-2 rounded text-white font-medium transition-colors ${
            isEdit ? 'bg-green-600 hover:bg-green-700' : 'bg-primary hover:bg-primary-dark'
          }`}
          onClick={() => setIsEdit(!isEdit)}
        >
          {isEdit ? 'Save Information' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
