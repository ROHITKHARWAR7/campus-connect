import User from "@/app/models/User";
import connectDb from "@/utils/connectDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    await connectDb()
    try {
        const { email, admissionId, name, password } = await request.json();
        console.log(email, admissionId, "api me frontend se jo data bheja hain wo receive ho gya");
        
        const user = await User.create({
            name: name,
            email: email,
            admissionId: admissionId,
            password: password||admissionId
        });

        return NextResponse.json({
            message: "Successfully Registered",
            success: true
        });

    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json({
            message: "Something went wrong from our side",
            success: false
        }, { status: 500 });
    }
}