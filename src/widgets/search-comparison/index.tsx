import {useEffect, useState} from 'react'
import {ConcurrentSearch} from '@/features/concurrent-search'
import {SyncSearch} from '@/features/sync-search'
import {Panel} from '@/shared/ui'
import styles from './styles.module.css'
import {fetchPosts} from "@/shared/api";
import {Post} from "@/shared/lib";

export const SearchComparison = () => {
    const [posts, setPosts] = useState<Post[] | null>(null)

    useEffect(() => {
        fetchPosts().then(setPosts)
    }, [])

    if (!posts) {
        return <div className={styles.loading}>Загрузка...</div>
    }

    return (
        <div className={styles.searchComparison}>
            <div className={styles.columns}>
                <Panel>
                    <SyncSearch posts={posts}/>
                </Panel>
                <Panel>
                    <ConcurrentSearch posts={posts}/>
                </Panel>
            </div>
        </div>
    )
}
