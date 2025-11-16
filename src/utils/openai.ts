import { defaultAnalogies } from "./defaultAnalogies";

export async function getAnalogy(interest: string, concept: string) {
  try {
    const res = await fetch("/api/analogy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ interest, concept }),
    });

    if (!res.ok) throw new Error("Server error");

    const data = await res.json();
    return { text: data.text, source: "ai" };
    
  } catch (err) {
    console.warn("Using fallback analogy:", err);

    const fallback = defaultAnalogies[interest]?.[concept] ?? 
      "No analogy available for this combination yet.";

    return { text: fallback, source: "fallback" };
  }
}
