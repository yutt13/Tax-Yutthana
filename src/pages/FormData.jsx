import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-300 to-teal-500">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
        📝 แบบฟอร์มภาษีเงินได้
        </h1>
        <form onSubmit={submitForm} className="space-y-6">
          <div>
            <label
              htmlFor="salary"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              เงินเดือน (บาท)
            </label>
            <input
              type="number"
              name="salary"
              id="salary"
              placeholder="เงินเดือนของคุณเดือนละ"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label
              htmlFor="bonus"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              โบนัส (บาท)
            </label>
            <input
              type="number"
              name="bonus"
              id="bonus"
              placeholder="ระบุโบนัสที่คุณได้รับในปี"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label
              htmlFor="social"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              หักประกันสังคมต่อเดือน (บาท)
            </label>
            <input
              type="number"
              name="social"
              id="social"
              placeholder="ระบุรายจ่ายประกันสังคม"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label
              htmlFor="baby"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              จำนวนบุตร (คน)
            </label>
            <input
              type="number"
              name="baby"
              id="baby"
              placeholder="ระบุจำนวนบุตร"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label
              htmlFor="protect"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              ค่าเบี้ยประกันชีวิต (บาท)
            </label>
            <input
              type="number"
              name="protect"
              id="protect"
              placeholder="ระบุค่าเบี้ยประกันชีวิต"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
          >
            ถัดไป
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormData;
