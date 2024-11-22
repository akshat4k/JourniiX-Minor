import './feeds.css'
import { useEffect, useState, useRef, useCallback } from 'react';
import Feed from './Feed'
import HomeFeedData, { generateMorePosts } from "../../FackApis/HomeFeedData"

export default function Feeds() {
  const [posts, setPosts] = useState(HomeFeedData);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();
  
  const lastPostElementRef = useCallback(node => {
    if (loading) return;
    
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMorePosts();
      }
    });
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  const loadMorePosts = () => {
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const newPosts = generateMorePosts(posts.length, 5);
      setPosts(prevPosts => [...prevPosts, ...newPosts]);
      setLoading(false);
      // Stop loading more when we reach 100 posts (for demo purposes)
      if (posts.length >= 100) {
        setHasMore(false);
      }
    }, 1000);
  };

  return (
    <div className='feeds'> 
      {posts.map((fed, index) => {
        if (posts.length === index + 1) {
          return <div ref={lastPostElementRef} key={fed.id}>
            <Feed fed={fed} />
          </div>;
        } else {
          return <Feed fed={fed} key={fed.id} />;
        }
      })}
      {loading && (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
        </div>
      )}
      {!hasMore && (
        <div className="end-message">
          <p>No more posts to load</p>
        </div>
      )}
    </div>
  );
}
