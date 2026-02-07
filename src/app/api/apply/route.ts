import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { ign, uid, rank, kd, role, reason } = data;
        const timestamp = new Date().toISOString();

        if (!process.env.GOOGLE_SHEET_ID || !process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
            console.error("Missing Google Sheets credentials in .env.local");
            return NextResponse.json({ message: 'Server configuration error.', success: false }, { status: 500 });
        }

        try {
            // Configure authentication with Google Sheets API
            const auth = new google.auth.GoogleAuth({
                credentials: {
                    client_email: process.env.GOOGLE_CLIENT_EMAIL,
                    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Handle newlines correctly
                },
                scopes: [
                    'https://www.googleapis.com/auth/spreadsheets',
                ],
            });

            const sheets = google.sheets({ version: 'v4', auth });

            // Append the new row
            await sheets.spreadsheets.values.append({
                spreadsheetId: process.env.GOOGLE_SHEET_ID,
                range: 'Sheet1!A:G', // Adjust 'Sheet1' if your sheet uses a different name
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [
                        [timestamp, ign, uid, rank, kd, role, reason],
                    ],
                },
            });

            return NextResponse.json({ message: 'Application submitted successfully!', success: true }, { status: 200 });

        } catch (sheetError) {
            console.error("Error appending to Google Sheet:", sheetError);
            return NextResponse.json({ message: 'Failed to save application.', success: false }, { status: 500 });
        }

    } catch (error) {
        console.error('Error processing application:', error);
        return NextResponse.json({ message: 'Invalid request.', success: false }, { status: 400 });
    }
}
