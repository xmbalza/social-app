import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import Post from './post';

interface Post {
    id: string,
    userId: string,
    title: string,
    username: string,
    description: string,
}

const Main = () => {
    const [postsLists, setPostsLists] = useState<Post[] | null>(null);
    const postsRef = collection(db, 'posts');

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostsLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[] );
    };

    useEffect(() => {
        getPosts();
    }, [])
    
    return ( 
        <div> 
            {postsLists?.map((post) => <Post />
        )}; 
        </div>
     );
};
 
export default Main;