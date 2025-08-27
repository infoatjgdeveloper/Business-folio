
import { User, Workspace, Conversation, KnowledgeFile, SubscriptionTier } from '../types';

const defaultUser: User = {
    id: 'user_1',
    email: 'power.user@example.com',
    profile: "You are a helpful and professional AI assistant. Respond in markdown format. Be concise but thorough.",
    subscriptionTier: 'extreme' as SubscriptionTier
};

const defaultWorkspaces: Workspace[] = [
    { id: 'ws_personal', name: 'Personal', ownerId: 'user_1', members: ['user_1'], isPersonal: true },
    { id: 'ws_marketing', name: 'Q4 Marketing Project', ownerId: 'user_1', members: ['user_1'], isPersonal: false }
];

const defaultConversations: Conversation[] = [
    {
        id: 'conv_1',
        title: 'Brainstorming new slogans',
        workspaceId: 'ws_marketing',
        messages: [
            { id: 'msg_1_1', role: 'user', content: 'Can you give me 5 slogans for our new eco-friendly water bottle?' },
            { id: 'msg_1_2', role: 'model', content: "Of course! Here are 5 slogans:\n\n1. **Sip Sustainably.**\n2. **The Future is Fluid.**\n3. **Refresh Your World, Responsibly.**\n4. **Hydration that Helps.**\n5. **Pure Water, Pure Planet.**", model: 'gemini-2.5-flash' }
        ],
        useKnowledgeBase: false,
        isTemporary: false,
        lastModified: Date.now() - 10000,
        model: 'gemini-2.5-flash',
    },
    {
        id: 'conv_2',
        title: 'Plan a trip to Japan',
        workspaceId: 'ws_personal',
        messages: [
             { id: 'msg_2_1', role: 'user', content: 'What are the top 3 cities to visit in Japan for a first-timer?' },
             { id: 'msg_2_2', role: 'model', content: "For a first-time visitor to Japan, I'd recommend focusing on these three cities for a classic and comprehensive experience:\n\n1.  **Tokyo:** The vibrant capital offers a blend of modern marvels and ancient temples.\n2.  **Kyoto:** Japan's former imperial capital is the heart of traditional culture, famous for its beautiful temples, geishas, and gardens.\n3.  **Osaka:** Known for its incredible food scene (especially street food), nightlife, and the historic Osaka Castle.", model: 'gemini-2.5-flash' }
        ],
        useKnowledgeBase: true,
        isTemporary: false,
        lastModified: Date.now(),
        model: 'gemini-2.5-flash',
    }
];

const defaultKnowledgeFiles: KnowledgeFile[] = [
    {
        id: 'kf_1',
        name: 'Company Style Guide.txt',
        content: 'All official communication must be professional, yet approachable. Avoid overly technical jargon. Use the Oxford comma.',
        workspaceId: 'ws_marketing'
    },
    {
        id: 'kf_2',
        name: 'Travel Preferences.txt',
        content: 'I prefer trips that balance city exploration with nature. I enjoy historical sites and good food. Budget is flexible.',
        workspaceId: 'ws_personal'
    }
];

// In a real app, this would interact with localStorage or a database.
// For this environment, we just return the static data.
export const initialData = () => ({
    user: defaultUser,
    workspaces: defaultWorkspaces,
    conversations: defaultConversations,
    knowledgeFiles: defaultKnowledgeFiles
});
