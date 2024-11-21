import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const { formData } = location.state;

  let salary = parseFloat(formData.salary); // แปลงค่าเป็นตัวเลข
  let salaryOfYear = salary * 12;
  let taxRate = salaryOfYear * (10 / 100);
  let income = salaryOfYear - taxRate;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          รายละเอียดผลลัพธ์
        </h1>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>ชื่อ: </strong>
            {formData.name}
          </p>
          <p>
            <strong>งาน: </strong>
            {formData.job}
          </p>
          <p>
            <strong>เงินเดือน: </strong>
            {salary.toLocaleString()} บาท
          </p>
          <p>
            <strong>เงินได้ทั้งปี: </strong>
            {salaryOfYear.toLocaleString()} บาท
          </p>
          <p>
            <strong>หักภาษี ณ ที่จ่าย 10%: </strong>
            {taxRate.toLocaleString()} บาท
          </p>
          <p>
            <strong>เงินได้สุทธิ: </strong>
            {income.toLocaleString()} บาท
          </p>
        </div>
        <button
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => window.history.back()}
        >
          ย้อนกลับ
        </button>
      </div>
    </div>
  );
};

export default Result;
