import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  const salary = parseFloat(formData.salary || 0);
  const salaryOfYear = salary * 12;
  const bonus = parseFloat(formData.bonus || 0);
  const salaryIncomeYear = salaryOfYear + bonus;

  let expenses = Math.min(salaryIncomeYear * 0.5, 100000);

  const baby = parseInt(formData.baby || 0);
  const social = Math.min(parseFloat(formData.social * 12 || 0), 30000);
  const protect = Math.min(parseFloat(formData.protect || 0), 100000);
  const brDeduction = Math.min(baby * 30000, 60000);

  const totalDeduction = 60000 + brDeduction + social + protect;
  const income = salaryIncomeYear - expenses - totalDeduction;

  const taxRate =
    income <= 100000
      ? 0
      : income <= 300000
      ? 0.05
      : income <= 1000000
      ? 0.1
      : 0.15;

  const taxRatePercentage = taxRate * 100;
  const taxAmount = income * taxRate;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-300 to-teal-500">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          ผลการคำนวณ
        </h1>
        <div className="space-y-6">
          <div className="flex justify-between items-center text-lg">
            <span className="font-medium text-gray-700">เงินได้ทั้งปี:</span>
            <span className="text-blue-600 font-semibold">
              {salaryIncomeYear.toLocaleString()} บาท
            </span>
          </div>
          <div className="flex justify-between items-center text-lg">
            <span className="font-medium text-gray-700">ค่าใช้จ่าย:</span>
            <span className="text-blue-600 font-semibold">
              {expenses.toLocaleString()} บาท
            </span>
          </div>
          <div className="flex justify-between items-center text-lg">
            <span className="font-medium text-gray-700">ค่าลดหย่อน:</span>
            <span className="text-blue-600 font-semibold">
              {totalDeduction.toLocaleString()} บาท
            </span>
          </div>
          <div className="flex justify-between items-center text-lg">
            <span className="font-medium text-gray-700">
              เงินได้พึงประเมินสุทธิ:
            </span>
            <span className="text-blue-600 font-semibold">
              {income.toLocaleString()} บาท
            </span>
          </div>
          <div className="flex justify-between items-center text-lg">
            <span className="font-medium text-gray-700">อัตราภาษี:</span>
            <span className="text-blue-600 font-semibold">
              {taxRatePercentage} %
            </span>
          </div>
          <div className="flex justify-between items-center text-lg">
            <span className="font-medium text-gray-700">ภาษีที่ต้องชำระ:</span>
            <span className="text-red-600 font-bold">
              {taxAmount.toLocaleString()} บาท
            </span>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() => window.history.back()}
            className="py-2 px-6 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
          >
            กลับไปแก้ไข
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
