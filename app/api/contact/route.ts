import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Get Google Sheets credentials from environment variables
    let credentials = process.env.GOOGLE_SHEETS_CREDENTIALS;
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Sheet1";

    // Strip surrounding quotes if present (handles cases where env var is quoted)
    if (credentials) {
      credentials = credentials.trim();
      if (
        (credentials.startsWith('"') && credentials.endsWith('"')) ||
        (credentials.startsWith("'") && credentials.endsWith("'"))
      ) {
        credentials = credentials.slice(1, -1);
      }
    }

    // Debug logging
    console.log("Environment check:");
    console.log("- Has credentials:", !!credentials);
    console.log("- Credentials length:", credentials?.length || 0);
    console.log("- Has spreadsheetId:", !!spreadsheetId);
    console.log("- SpreadsheetId:", spreadsheetId);
    console.log("- Sheet name:", sheetName);

    if (!credentials || !spreadsheetId) {
      console.error("Missing Google Sheets configuration");
      console.error("credentials exists:", !!credentials);
      console.error("spreadsheetId exists:", !!spreadsheetId);
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Parse the service account credentials
    let parsedCredentials;
    try {
      parsedCredentials = JSON.parse(credentials);
    } catch (parseError) {
      console.error("Failed to parse GOOGLE_SHEETS_CREDENTIALS:", parseError);
      console.error("Credentials value (first 200 chars):", credentials?.substring(0, 200));
      return NextResponse.json(
        { error: "Invalid credentials format" },
        { status: 500 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: parsedCredentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Prepare the data to append
    const timestamp = new Date().toISOString();
    const values = [[timestamp, name, email, subject, message]];

    // Append the data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:E`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
