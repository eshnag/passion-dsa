import OpenAI from "openai";

export default async function handler(req, res) {
  const { interest, concept } = req.body;

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const prompt = `Explain "${concept}" using an analogy from "${interest}".`;

  try {
    const out = await client.responses.create({
      model: "gpt-4o",
      input: prompt,
    });

    res.status(200).json({ text: out.output_text });

  } catch (e) {
    res.status(500).json({ error: "OpenAI error" });
  }
}
