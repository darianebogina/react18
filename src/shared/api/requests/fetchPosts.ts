import {POSTS_API_URL, TARGET_POSTS_COUNT} from '@/shared/config';
import {Post} from "@/shared/lib";

const multiplyPosts = (original: Post[], targetCount: number): Post[] => {
    const copiesNeeded = Math.ceil(targetCount / original.length);

    return Array.from({length: copiesNeeded}, (_, copyIndex) =>
        original.map((post, index) => ({
            ...post,
            id: copyIndex * original.length + index + 1,
            title: copyIndex === 0 ? post.title : `${post.title} #${copyIndex}`,
        })),
    )
        .flat()
        .slice(0, targetCount);
};

export const fetchPosts = async (): Promise<Post[]> => {
    const response = await fetch(POSTS_API_URL);

    if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const posts: Post[] = await response.json();

    return multiplyPosts(posts, TARGET_POSTS_COUNT);
};
