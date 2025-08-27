
import { GoogleGenAI, GenerateContentResponse, Content } from "@google/genai";

if (!process.env.API_KEY) {
    console.error("API_KEY is not set in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

interface GenerateResponseParams {
    prompt: string;
    history: Content[];
    systemInstruction: string;
    useGoogleSearch: boolean;
    model: string;
}

export const generateResponseStream = async ({
    prompt,
    history,
    systemInstruction,
    useGoogleSearch,
    model
}: GenerateResponseParams) => {
    
    const chat = ai.chats.create({
        model,
        history,
        config: {
            systemInstruction,
            tools: useGoogleSearch ? [{ googleSearch: {} }] : [],
        },
    });

    const response = await chat.sendMessageStream({ message: prompt });
    
    // The response is already a stream of GenerateContentResponse, so we can return it directly.
    return response;
};


export const generateTitle = async (prompt: string): Promise<string> => {
    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Generate a short, concise title (4 words max) for this user prompt: "${prompt}"`,
        });
        return response.text.replace(/"/g, '').trim() || "New Chat";
    } catch (error) {
        console.error("Error generating title:", error);
        return "New Chat";
    }
};
