import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const res = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        {
          error: data.message || "Login failed",
          code: data.code || "LOGIN_FAILED",
        },
        { status: res.status }
      );
    }

    const responseData = JSON.stringify({
      role: data.role,
    });

    const response = NextResponse.json(
      {
        success: data.success,
        message: data.message,
        data: {
          role: data.user.role,
        },
      },
      { status: 200 }
    );

    response.cookies.set({
      name: "token",
      value: data.token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60,
    });

    // console.log(data);
    // console.log(response);
    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
