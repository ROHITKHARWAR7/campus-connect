import User from "@/app/models/User";
import connectDb from "@/utils/connectDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    await connectDb()
    try {
        const {admissionId,password } = await request.json();
        
        
        const user = await User.create({
            admissionId: admissionId,
            password: password||admissionId
        });

        return NextResponse.json({
            message: "Successfully Logged In",
            success: true
        });

    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({
            message: "Something went wrong from our side",
            success: false
        }, { status: 500 });
    }
}