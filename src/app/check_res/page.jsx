'use client';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [ready, setReady] = useState(false);
  const [matricNumber, setMatricNumber] = useState('');
  const [semester, setSemester] = useState(1);
  const [session, setSession] = useState(2022);
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/check_res', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          matricNumber,
          session,
          semester,
        }),
      });

      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        throw new Error('Error retrieving data from the API');
      }
    } catch (error) {
      console.error(error);
    }
    setReady(true);
  };

  const calculateGrade = (score) => {
    if (score >= 70) {
      return 'A';
    } else if (score >= 60 && score <= 69) {
      return 'B';
    } else if (score >= 50 && score <= 59) {
      return 'C';
    } else if (score >= 45 && score <= 49) {
      return 'D';
    } else if (score >= 40 && score <= 44) {
      return 'E';
    } else {
      return 'F';
    }
  };

  const results = data.map((row) => ({
    title: row.title,

    code: row.code,
    score: row.score,
    grade: calculateGrade(row.score),
    creditUnit: row.creditUnit,
  }));

  const calculateCGPA = () => {
    const total_grade_points = results.reduce((total, grade) => {
      return (
        total +
        (grade.grade === 'A'
          ? 5
          : grade.grade === 'B'
          ? 4
          : grade.grade === 'C'
          ? 3
          : grade.grade === 'D'
          ? 2
          : grade.grade === 'E'
          ? 1
          : 0) *
          grade.creditUnit
      );
    }, 0);

    const total_credit_unit = results.reduce((total, grade) => {
      return total + grade.creditUnit;
    }, 0);

    return total_grade_points / total_credit_unit;
  };

  const totalCreditUnits = results.reduce((total, result) => {
    return total + result.creditUnit;
  }, 0);

  const calculateGradePoints = (grade) => {
    if (grade === 'A') {
      return 5;
    } else if (grade === 'B') {
      return 4;
    } else if (grade === 'C') {
      return 3;
    } else if (grade === 'D') {
      return 2;
    } else if (grade === 'E') {
      return 1;
    } else {
      return 0;
    }
  };

  const totalGradePoints = results.reduce((total, result) => {
    const gradePoints = calculateGradePoints(result.grade);
    return total + gradePoints * result.creditUnit;
  }, 0);

  const printResultPage = () => {
    const printWindow = window.open('', 'print');
    printWindow.document.body.innerHTML =
      document.getElementById('student-id').innerHTML;
    printWindow.print();
  };

  return (
    <main className="row-span-7 col-span-3 flex lg:flex-row flex-col justify-center space-x-5 p-3">
      <form
        className="flex max-w-xs flex-col space-y-1 mb-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="">Matric Number</label>
        <input
          className="border border-gray-300 rounded px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
          type="text"
          value={matricNumber}
          name="matricNumber"
          onChange={(e) => setMatricNumber(e.target.value)}
          required
        />

        <label htmlFor="">Semester</label>
        <select
          className="border border-gray-300 rounded px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
          value={semester}
          onChange={(e) => setSemester(parseInt(e.target.value))}
        >
          <option value={1}>1st Semester</option>
          <option value={2}>2nd Semester</option>
        </select>

        <label htmlFor="">Session</label>
        <select
          className="border border-gray-300 rounded px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
          value={session}
          onChange={(e) => setSession(parseInt(e.target.value))}
        >
          <option value={2022}>2022/2023</option>
          <option value={2023}>2023/2024</option>
        </select>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          type="submit"
        >
          Submit
        </button>
      </form>

      <div className="">
        <div id="student-id" className={`${ready ? 'visible' : 'hidden'}`}>
          <h2 className="mb-3 text-xl font-bold">
            Student Result : {matricNumber}
          </h2>
          <table className="table border-collapse rounded-lg table-auto border border-slate-150 text-center">
            <thead className="font-medium rounded border-t border-slate-600  bg-royal-blue text-white">
              <tr>
                <th className="border-x border-slate-600 px-4 py-4">S/N</th>
                <th className="border-r border-slate-600 px-4 py-4">Title</th>
                <th className="border-r border-slate-600 px-4 py-4">
                  Course Code
                </th>
                <th className="border-r border-slate-600 px-4 py-4">Score</th>
                <th className="border-r border-slate-600 px-4 py-4">Grade</th>
                <th className="border-r border-slate-600 px-4 py-4">
                  Credit Unit
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((student, index) => (
                <tr
                  className="bg-gray-100 border border-gray-300 rounded px-4 py-2 border-b-0"
                  key={uuidv4}
                >
                  <td className="border-x border-slate-600 font-medium px-4 py-4">
                    {index + 1}
                  </td>
                  <td className="border-r border-slate-600">{student.title}</td>
                  <td className="border-r border-slate-600">
                    {student.code.toUpperCase()}
                  </td>
                  <td className="border-r border-slate-600">{student.score}</td>
                  <td className="border-r border-slate-600">{student.grade}</td>
                  <td className="border-r border-slate-600">
                    {student.creditUnit}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-100 border border-gray-300 rounded px-4 py-2 border-b-0">
                <td colSpan="2"></td>
                <td className="border-r border-slate-600 font-medium px-4 py-4">
                  Total Grade Points
                </td>
                <td className="border-r border-slate-600 font-medium px-4 py-4">
                  {totalGradePoints}
                </td>
                <td className="border-r border-slate-600 font-medium px-4 py-4">
                  Total Credit Units
                </td>
                <td className="border-r border-slate-600 font-medium px-4 py-4">
                  {totalCreditUnits}
                </td>
              </tr>
            </tfoot>
          </table>
          <h2 className="font-semibold text-lg">GPA</h2>
          <p className="text-base font-bold">{calculateCGPA().toFixed(2)}</p>

          <div id="result-page"></div>
        </div>
        <button
          className={`bg-blue-500 max-w-sm text-white px-4 py-2 print:hidden rounded hover:bg-blue-800 focus:outline-none ${
            ready ? 'visible' : ' hidden'
          }`}
          onClick={printResultPage}
        >
          Print Result Page
        </button>
      </div>
    </main>
  );
}
