import React, { useEffect } from "react";
import { RequireAuth, touchSession } from "./auth";
import { AdminAuth, MyInfo } from "../../Data";
import { useState } from "react";

import { FiX, FiSettings, FiLogOut, FiEyeOff, FiEye } from "react-icons/fi";
import Analyse from "./Analyse";
import { assets } from "../../assets/assets";
import UserInformation from "./UserInformation";

export default function Admin() {
  return (
    <RequireAuth>
      <div className="min-h-screen bg-slate-100">
        <AdminNavbar />
        <Analyse/>
        <UserInformation/>
      </div>
    </RequireAuth>
  );
}

const AdminNavbar = () => {
  const [showChangePwd, setShowChangePwd] = useState(false);
  const user = MyInfo[0];

  const handleLogout = () => {
    localStorage.removeItem("token");   // your auth key
    window.location.href = "/AdminLogin";
  };
  // داخل useEffect أو عند كل نقرة/تحميل
useEffect(() => {
  touchSession();   // تجديد المدة كلما تفاعل المستخدم
}, []);
  /* ---------- Change-Password Modal ---------- */
const ChangePasswordModal = ({ onClose }) => {
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [show, setShow] = useState({ old: false, new: false, confirm: false });
  const [error, setError] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  if (oldPwd !== AdminAuth.password) {
    setError("Current password is incorrect");
    return;
  }
  if (newPwd !== confirmPwd) {
    setError("New passwords do not match");
    return;
  }
  AdminAuth.password = newPwd;   // ← تغيير القيمة في ملف البيانات
  alert("Password updated! You will be logged out.");
  onClose();
  logout();
};


  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Change Password</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <FiX size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Current Password */}
          <div className="relative">
            <label className="text-sm text-gray-700">Current Password</label>
            <input
              type={show.old ? "text" : "password"}
              value={oldPwd}
              onChange={(e) => setOldPwd(e.target.value)}
              className="w-full px-3 py-2 border rounded-md mt-1 pr-10"
              required
            />
            <button
              type="button"
              className="absolute right-2 top-9 text-gray-500"
              onClick={() => setShow({ ...show, old: !show.old })}
            >
              {show.old ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* New Password */}
          <div className="relative">
            <label className="text-sm text-gray-700">New Password</label>
            <input
              type={show.new ? "text" : "password"}
              value={newPwd}
              onChange={(e) => setNewPwd(e.target.value)}
              className="w-full px-3 py-2 border rounded-md mt-1 pr-10"
              required
            />
            <button
              type="button"
              className="absolute right-2 top-9 text-gray-500"
              onClick={() => setShow({ ...show, new: !show.new })}
            >
              {show.new ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Confirm New Password */}
          <div className="relative">
            <label className="text-sm text-gray-700">Confirm New Password</label>
            <input
              type={show.confirm ? "text" : "password"}
              value={confirmPwd}
              onChange={(e) => setConfirmPwd(e.target.value)}
              className="w-full px-3 py-2 border rounded-md mt-1 pr-10"
              required
            />
            <button
              type="button"
              className="absolute right-2 top-9 text-gray-500"
              onClick={() => setShow({ ...show, confirm: !show.confirm })}
            >
              {show.confirm ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

  /* ---------- Main Navbar ---------- */
  return (
    <>
      <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
        {/* Left: Logo / Title */}
        <div className="flex items-center gap-3">
          <img
            src={user.MylogoG || assets.LOGO}
            alt="logo"
            className="h-8 w-auto"
          />
          <span className="text-lg font-semibold text-gray-900">Admin Panel</span>
        </div>

        {/* Right: Profile + Actions */}
        <div className="flex items-center gap-4">
          <img
            src={user.profileImage}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="hidden md:block text-sm font-medium text-gray-900">
            {user.fullName}
          </span>

          {/* Change Password */}
          <button
            onClick={() => setShowChangePwd(true)}
            className="p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-blue-600 transition"
            title="Change password"
          >
            <FiSettings size={20} />
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="p-2 rounded-md text-gray-500 hover:bg-red-50 hover:text-red-600 transition"
            title="Logout"
          >
            <FiLogOut size={20} />
          </button>
        </div>
      </nav>

      {showChangePwd && <ChangePasswordModal onClose={() => setShowChangePwd(false)}      />}
    </>
  );
};

// utility.js
export const updateAdminPassword = (newPwd) => {
  AdminAuth.password = newPwd;
  // لو كنت تريد كتابتها في ملف JSON حقيقي:
  // fs.writeFileSync("admin.json", JSON.stringify({ email: AdminAuth.email, password: newPwd }));
};
