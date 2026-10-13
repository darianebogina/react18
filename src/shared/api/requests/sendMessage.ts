import {SEND_MESSAGE_DELAY, SEND_MESSAGE_FAIL_RATE} from '@/shared/config';
import {Message} from "@/shared/lib";

export const sendMessage = async (text: string): Promise<Message> => {
    await new Promise((resolve) => setTimeout(resolve, SEND_MESSAGE_DELAY));

    if (Math.random() < SEND_MESSAGE_FAIL_RATE) {
        throw new Error(`Failed to send message: "${text}"`);
    }

    return {id: crypto.randomUUID(), text};
};
