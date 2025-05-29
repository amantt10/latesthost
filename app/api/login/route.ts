import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";
import bcrypt from "bcrypt";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Set this in your .env
});

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const client = await pool.connect();
    try {
      const result = await client.query(
        "SELECT id, password_hash, has_logged_in FROM users WHERE email = $1",
        [email]
      );

      if (result.rows.length === 0) {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
      }

      const user = result.rows[0];
      const passwordMatch = await bcrypt.compare(password, user.password_hash);

      if (!passwordMatch) {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
      }

      if (!user.has_logged_in) {
        return NextResponse.json({ status: "reset_required" }, { status: 200 });
      }

      // Optionally, set a session/cookie here

      return NextResponse.json({ status: "success" }, { status: 200 });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}