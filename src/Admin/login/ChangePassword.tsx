import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { baseURL } from '@/Api/Baseurl';
import Navbar from '../AdminNavbar';


const ChangePassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');
    setError('');

    const trimmedEmail = 'superfamilymart2019@gmail.com';

    try {
      const res = await fetch(`${baseURL}/api/change-password`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail, password: newPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        setNewPassword('');
        setTimeout(() => {
  navigate("/collection-table");
}, 1500);
      } else {
        setError(data.error || 'Failed to change password');
      }
    } catch (err) {
      setError('Server error');
    }
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <Navbar  />

    
        <div className="max-w-screen-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
              🔑 Change Password
            </h3>

            {message && (
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4 text-sm border border-green-300 text-center">
                {message}
              </div>
            )}
            {error && (
              <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm border border-red-300 text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleChangePassword} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  📧 Email
                </label>
                <input
                  type="email"
                  id="email"
                  value="superfamilymart2019@gmail.com"
                  readOnly
                  className="w-full border border-gray-300 px-4 py-2 rounded-md bg-gray-100 text-gray-700 cursor-not-allowed"
                  required
                />
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  🔐 New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold shadow-md transition-colors"
                >
                  ✅ Change Password
                </button>
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-md font-semibold shadow-md transition-colors"
                >
                  ❌ Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      

      <style>{`
        @media (max-width: 768px) {
          .transition-all {
            margin-left: 0 !important;
            padding: 1rem !important;
          }
          .text-3xl {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ChangePassword;
