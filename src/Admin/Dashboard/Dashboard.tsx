import Navbar from "../AdminNavbar";
import { useEffect, useState } from "react";
import { baseURL } from "@/Api/Baseurl";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalMen: 0,
    totalWomen: 0,
    totalKids: 0,
    totalGallery: 0,
    totalContacts: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${baseURL}/api/counts/dashboard-stats`);
        const data = await response.json();

        if (data.success) {
          setStats({
            totalMen: data.totalMen,
            totalWomen: data.totalWomen,
            totalKids: data.totalKids,
            totalGallery: data.totalGallery,
            totalContacts: data.totalContacts,
          });
        }
      } catch (error) {
        console.log("❌ Error fetching dashboard stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <>
      <Navbar />

      <div className="pt-24 px-6 md:px-12">
        <h1 className="text-3xl font-semibold mb-6 text-[#850E35]">
          Admin Dashboard
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Men */}
          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#850E35]">
            <h3 className="text-lg font-medium text-gray-600">Men Collections</h3>
            <p className="text-3xl font-bold text-[#850E35] mt-2">
              {stats.totalMen}
            </p>
          </div>

          {/* Women */}
          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#850E35]">
            <h3 className="text-lg font-medium text-gray-600">Women Collections</h3>
            <p className="text-3xl font-bold text-[#850E35] mt-2">
              {stats.totalWomen}
            </p>
          </div>

          {/* Kids */}
          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#850E35]">
            <h3 className="text-lg font-medium text-gray-600">Kids Collections</h3>
            <p className="text-3xl font-bold text-[#850E35] mt-2">
              {stats.totalKids}
            </p>
          </div>

          {/* Gallery */}
          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#850E35]">
            <h3 className="text-lg font-medium text-gray-600">Gallery Items</h3>
            <p className="text-3xl font-bold text-[#850E35] mt-2">
              {stats.totalGallery}
            </p>
          </div>

          {/* Contact */}
          <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#850E35]">
            <h3 className="text-lg font-medium text-gray-600">Contact Queries</h3>
            <p className="text-3xl font-bold text-[#850E35] mt-2">
              {stats.totalContacts}
            </p>
          </div>

      
        </div>
            {/* Quick Links */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Quick Links
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="/collection-table"
              className="bg-[#850E35] text-white p-6 rounded-xl shadow hover:bg-[#6f0c2c] transition"
            >
              Manage Collections →
            </a>

            <a
              href="/gallery-table"
              className="bg-[#850E35] text-white p-6 rounded-xl shadow hover:bg-[#6f0c2c] transition"
            >
              Manage Gallery →
            </a>

            <a
              href="/contact-table"
              className="bg-[#850E35] text-white p-6 rounded-xl shadow hover:bg-[#6f0c2c] transition"
            >
              View Contact Queries →
            </a>
          </div>
        </div>

      </div>
    </>
  );
};

export default Dashboard;
