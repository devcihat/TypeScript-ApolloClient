import React from 'react'
import PostGird from "../../components/posts/post-grid/posts-grid.component"
import { useGetPosts } from '../../hooks/posts/useGetPosts';

const Home:React.FC = () => {

 const posts = useGetPosts();
        
    

    return (
        <div className="home">
            <PostGird posts={posts || []} />
        </div>
    )
}

export default Home