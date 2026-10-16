import {sendMessage} from '@/shared/api';
import type {Message} from '@/shared/lib';

export type ChatMessage = Message & {
    status: 'sending' | 'sent' | 'failed';
};

export const sendChatMessage = async (text: string): Promise<ChatMessage> => {
    try {
        const message = await sendMessage(text);
        return {...message, status: 'sent'};
    } catch {
        return {id: crypto.randomUUID(), text, status: 'failed'};
    }
};
