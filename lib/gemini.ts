const GEMINI_KEY = process.env.EXPO_PUBLIC_GEMINI_KEY;

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`;

export async function analyzeImage(
  base64Image: string,
  prompt: string
) {
  try {
    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
              {
                inline_data: {
                  mime_type: "image/jpeg",
                  data: base64Image,
                },
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok || data.error) {
      console.log("Gemini API Error:", data.error || data);
      return null;
    }

    return data;
  } catch (error) {
    console.log("Gemini Fetch Error:", error);
    return null;
  }
}