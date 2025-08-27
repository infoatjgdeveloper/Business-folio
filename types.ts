

export type SubscriptionTier = 'free' | 'basic' | 'extreme';

export interface User {
  id: string;
  email: string;
  profile: string; // Custom instructions for the AI
  subscriptionTier: SubscriptionTier;
}

export interface Workspace {
  id: string;
  name: string;
  ownerId: string;
  members: string[];
  isPersonal: boolean;
}

export interface Conversation {
  id:string;
  title: string;
  messages: Message[];
  workspaceId: string;
  useKnowledgeBase: boolean;
  isTemporary: boolean;
  lastModified?: number;
  model: string;
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  attachments?: { name: string; size: number }[];
  groundingMetadata?: GroundingChunk[];
  model?: string;
  isError?: boolean;
}

export interface GroundingChunk {
    web?: {
        uri: string;
        title: string;
    }
}

export interface KnowledgeFile {
  id: string;
  name: string;
  content: string; // The text content of the file
  workspaceId: string;
}
