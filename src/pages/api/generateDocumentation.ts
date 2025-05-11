
import type { NextApiRequest, NextApiResponse } from 'next';

const LAMBDA_URL = "https://8q855mjd36.execute-api.us-west-2.amazonaws.com/dev/generate-text";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code, docStyle } = req.body;

  if (!code || !docStyle) {
    return res.status(400).json({ error: "Missing code or documentation style." });
  }

  try {
    const response = await fetch(LAMBDA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inputText: code, docStyle }),
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to generate documentation" });
    }

    const result = await response.json();
    console.log("Lambda response:", result); // ADD THIS LINE

    res.status(200).json({ result: result });
  } catch (error) {
    console.error("Error calling Lambda:", error);
    res.status(500).json({ error: "Server error" });
  }
}
