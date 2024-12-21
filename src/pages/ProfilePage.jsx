import React from "react";
import Profile from "../components/Profile";
import UserStatistics from "../components/UserStatistics";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Профиль пользователя</h1>
      <Profile />
      <div className="mt-8 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <UserStatistics />
      </div>
    </div>
  );
};

export default ProfilePage;
