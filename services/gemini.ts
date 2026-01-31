
import { GoogleGenAI, Type } from "@google/genai";

// Fix: Standardize initialization using the mandated process.env.API_KEY pattern.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDailyInspiration = async () => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Give me a short, inspiring bible verse and a 2-sentence modern reflection for a church website home page.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            verse: { type: Type.STRING },
            reference: { type: Type.STRING },
            reflection: { type: Type.STRING }
          },
          required: ["verse", "reference", "reflection"]
        }
      }
    });
    
    // Fix: Access the .text property directly (not as a method).
    const text = response.text;
    return text ? JSON.parse(text) : {
      verse: "For I know the plans I have for you, declares the Lord.",
      reference: "Jeremiah 29:11",
      reflection: "God has a unique purpose for your journey. Trust in His timing and grace today."
    };
  } catch (error) {
    console.error("Failed to fetch daily inspiration:", error);
    return {
      verse: "For I know the plans I have for you, declares the Lord.",
      reference: "Jeremiah 29:11",
      reflection: "God has a unique purpose for your journey. Trust in His timing and grace today."
    };
  }
};

export const getSermonSummary = async (title: string, speaker: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a 3-bullet point summary of what a sermon titled "${title}" by ${speaker} might cover, focusing on spiritual growth.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            points: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["points"]
        }
      }
    });
    
    // Fix: Access the .text property directly.
    const text = response.text;
    const data = text ? JSON.parse(text) : null;
    return data?.points || ["Connecting with God's word", "Applying faith to daily life", "Growing in community"];
  } catch (error) {
    console.error("Failed to fetch sermon summary:", error);
    return ["Connecting with God's word", "Applying faith to daily life", "Growing in community"];
  }
};
