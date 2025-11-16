import OpenAI from "openai";
import { defaultAnalogies } from "./defaultAnalogies";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function getAnalogy(interest: string, concept: string) {
  // Try API
  try {
    const prompt = `Explain "${concept}" using an analogy from "${interest}". Short, intuitive.`;

    const response = await client.responses.create({
      model: "gpt-4o",
      input: prompt,
    });

    return {
      text: response.output_text,
      source: "ai"
    };
  } catch (err) {
    console.warn("API unavailable. Using fallback analogy.");

    // fallback lookup:
    const fallback = defaultAnalogies[interest]?.[concept];

    return {
      text: fallback ?? "No analogy available for this pair yet.",
      source: "fallback"
    };
  }
}
