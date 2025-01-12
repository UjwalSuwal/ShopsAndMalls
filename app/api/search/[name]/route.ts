

import { Mall } from "@/model/mall";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest, { params }: { params: { name: string } }) => {
    const { name } = await params;
    try {
        const malls = await Mall.find({
            name: { $regex: name, $options: 'i' }, // Case-insensitive search
        });

        if (malls) {
            return NextResponse.json(malls, { status: 200 });
        }

        if (!malls) {
            return NextResponse.json({ message: "No Mall with specified name exists" });
        }
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ message: "Error while searching for Mall" }, { status: 400 })
        } else {
            return NextResponse.json({ message: "Unexpected Error occured" }, { status: 500 })
        }
    }
}