import React from "react";
import Programmmes from "./ProgrammeFiles";  // Import the data from ProgrammeFiles

const Programmes = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-green-400 min-h-screen fade-in-bg">
      <p className="mt-36 text-2xl md:text-3xl font-bold text-blue-800 text-center text-green-700 mb-3">
        UPPERHILL COLLEGE OF PROFESSIONAL STUDIES
      </p>

      {/* First Table - Accounting & Advanced Packages */}
      <table className="min-w-full bg-white border mt-11 border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th colSpan="4" className="text-center py-4 text-xl font-bold rounded-t-lg">
              Accounting & Advanced Packages
            </th>
          </tr>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 border">Course</th>
            <th className="py-2 border">Fees (Ksh)</th>
          </tr>
        </thead>
        <tbody>
          {Programmmes.course_1.map((course, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4 border">{course.course}</td>
              <td className="py-2 px-4 border">{course.fees}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" className="border-t rounded-b-lg"></td>
          </tr>
        </tbody>
      </table>

      {/* Second Table - Business Courses */}
      <table className="min-w-full bg-white border mt-11 border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th colSpan="4" className="text-center py-4 text-xl font-bold rounded-t-lg">
              School of Information Communication Technology
            </th>
          </tr>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4 border">Course</th>
            <th className="py-2 px-4 border">Minimum Grade</th>
            <th className="py-2 px-4 border">No. of Terms</th>
            <th className="py-2 px-4 border">Fees (Ksh)</th>
          </tr>
        </thead>
        <tbody>
          {Programmmes.course_2.map((course, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4 border">{course.course}</td>
              <td className="py-2 px-4 border">{course.grade}</td>
              <td className="py-2 px-4 border">{course.terms}</td>
              <td className="py-2 px-4 border">{course.fees}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" className="border-t rounded-b-lg"></td>
          </tr>
        </tbody>
      </table>

      {/*Third Table*/}

      <table className="min-w-full bg-white border mt-11 border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th colSpan="4" className="text-center py-4 text-xl font-bold rounded-t-lg">
              School of Tourism & Hospitality
            </th>
          </tr>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4 border">Course</th>
            <th className="py-2 px-4 border">Minimum Grade</th>
            <th className="py-2 px-4 border">No. of Terms</th>
            <th className="py-2 px-4 border">Fees (Ksh)</th>
          </tr>
        </thead>
        <tbody>
          {Programmmes.course_3.map((course, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4 border">{course.course}</td>
              <td className="py-2 px-4 border">{course.grade}</td>
              <td className="py-2 px-4 border">{course.terms}</td>
              <td className="py-2 px-4 border">{course.fees}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" className="border-t rounded-b-lg"></td>
          </tr>
        </tbody>
      </table>

      {/*Fourth table */}
      <table className="min-w-full bg-white border mt-11 border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th colSpan="4" className="text-center py-4 text-xl font-bold rounded-t-lg">
              School of Business
            </th>
          </tr>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4 border">Course</th>
            <th className="py-2 px-4 border">Minimum Grade</th>
            <th className="py-2 px-4 border">No. of Terms</th>
            <th className="py-2 px-4 border">Fees (Ksh)</th>
          </tr>
        </thead>
        <tbody>
          {Programmmes.course_4.map((course, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4 border">{course.course}</td>
              <td className="py-2 px-4 border">{course.grade}</td>
              <td className="py-2 px-4 border">{course.terms}</td>
              <td className="py-2 px-4 border">{course.fees}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" className="border-t rounded-b-lg"></td>
          </tr>
        </tbody>
      </table>

      {/*Fifth Table*/}
      <table className="min-w-full bg-white border ml-2 md:ml-0 mt-11 border-gray-200 shadow-md overflow-hidden rounded-lg ">
        <thead>
          <tr className="bg-gray-100">
            <th colSpan="4" className="text-center py-4 text-xl font-bold rounded-t-lg">
              School of Journalism & Mass Communication
            </th>
          </tr>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4 border">Course</th>
            <th className="py-2 px-4 border">Minimum Grade</th>
            <th className="py-2 px-4 border">No. of Terms</th>
            <th className="py-2 px-4 border">Fees (Ksh)</th>
          </tr>
        </thead>
        <tbody>
          {Programmmes.course_5.map((course, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4 border">{course.course}</td>
              <td className="py-2 px-4 border">{course.grade}</td>
              <td className="py-2 px-4 border">{course.terms}</td>
              <td className="py-2 px-4 border">{course.fees}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" className="border-t rounded-b-lg"></td>
          </tr>
        </tbody>
      </table>

      {/*Sixth Table*/}
      <table className="min-w-full bg-white border mt-11 border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th colSpan="4" className="text-center py-4 text-xl font-bold rounded-t-lg">
              School of Health Sciences
            </th>
          </tr>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4 border">Course</th>
            <th className="py-2 px-4 border">Minimum Grade</th>
            <th className="py-2 px-4 border">No. of Terms</th>
            <th className="py-2 px-4 border">Fees (Ksh)</th>
          </tr>
        </thead>
        <tbody>
          {Programmmes.course_6.map((course, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4 border">{course.course}</td>
              <td className="py-2 px-4 border">{course.grade}</td>
              <td className="py-2 px-4 border">{course.terms}</td>
              <td className="py-2 px-4 border">{course.fees}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" className="border-t rounded-b-lg"></td>
          </tr>
        </tbody>
      </table>
       {/*Seventh Table*/}
       <table className="min-w-full bg-white border mt-11 border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th colSpan="4" className="text-center py-4 text-xl font-bold rounded-t-lg">
              School of Fashion & Dressmaking
            </th>
          </tr>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4 border">Course</th>
            <th className="py-2 px-4 border">Minimum Grade</th>
            <th className="py-2 px-4 border">No. of Terms</th>
            <th className="py-2 px-4 border">Fees (Ksh)</th>
          </tr>
        </thead>
        <tbody>
          {Programmmes.course_7.map((course, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4 border">{course.course}</td>
              <td className="py-2 px-4 border">{course.grade}</td>
              <td className="py-2 px-4 border">{course.terms}</td>
              <td className="py-2 px-4 border">{course.fees}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" className="border-t rounded-b-lg"></td>
          </tr>
        </tbody>
      </table>
       {/*Eighth Table*/}
       <table className="min-w-full bg-white border mt-11 border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th colSpan="4" className="text-center py-4 text-xl font-bold rounded-t-lg">
              School of Hair Dressing & Beauty
            </th>
          </tr>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4 border">Course</th>
            <th className="py-2 px-4 border">Minimum Grade</th>
            <th className="py-2 px-4 border">No. of Terms</th>
            <th className="py-2 px-4 border">Fees (Ksh)</th>
          </tr>
        </thead>
        <tbody>
          {Programmmes.course_8.map((course, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4 border">{course.course}</td>
              <td className="py-2 px-4 border">{course.grade}</td>
              <td className="py-2 px-4 border">{course.terms}</td>
              <td className="py-2 px-4 border">{course.fees}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" className="border-t rounded-b-lg"></td>
          </tr>
        </tbody>
      </table>
       {/*Ninth Table*/}
       <table className="min-w-full bg-white border mt-11 border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th colSpan="4" className="text-center py-4 text-xl font-bold rounded-t-lg">
              School of Engineering
            </th>
          </tr>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4 border">Course</th>
            <th className="py-2 px-4 border">Minimum Grade</th>
            <th className="py-2 px-4 border">No. of Terms</th>
            <th className="py-2 px-4 border">Fees (Ksh)</th>
          </tr>
        </thead>
        <tbody>
          {Programmmes.course_9.map((course, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4 border">{course.course}</td>
              <td className="py-2 px-4 border">{course.grade}</td>
              <td className="py-2 px-4 border">{course.terms}</td>
              <td className="py-2 px-4 border">{course.fees}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" className="border-t rounded-b-lg"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Programmes;
