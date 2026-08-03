import {Post} from "@/shared/lib";

export const filterPosts = (posts: Post[], query: string): Post[] => {
    const trimmed = query.trim().toLowerCase();

    if (!trimmed) {
        return posts;
    }

    return posts.filter(
        (post) =>
            post.title.toLowerCase().includes(trimmed) ||
            post.body.toLowerCase().includes(trimmed),
    );
};
