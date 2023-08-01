import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { matricNumber, session, semester } = await request.json();

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'afit',
      password: 'BrightO!n2023',
    });

    const [rows, fields] = await connection.query(
      'SELECT * FROM `courses` where matricNumber = ? AND session = ? AND semester = ?',
      [matricNumber, session, semester]
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
  }
}
