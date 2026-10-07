import {USERS_API_URL} from '@/shared/config';
import {User} from "@/shared/lib";

export const fetchUser = async (id: number): Promise<User> => {
    const response = await fetch(`${USERS_API_URL}/${id}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch user: ${response.status}`);
    }

    return response.json();
};
