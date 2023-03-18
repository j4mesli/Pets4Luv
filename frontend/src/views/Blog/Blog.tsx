import { useNavigate } from 'react-router-dom';
import { handleFetch5Posts } from '../../functions/handleFetch5Posts';
import { Post } from '../../types/Post.model';
import './Blog.css';
import React, { useEffect, useState } from 'react';

function Blog() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [posts, setPosts] = useState<Post[]>([]);
  const [showAll, setShowAll] = useState(400);
  const [offset, setOffset] = useState(1);
  const [showMore, setShowMore] = useState(true);

  const navigate = useNavigate();

  const fetchPosts = async (offset: number) => {
    console.log('fetching...');
    const url = 'http://localhost:5000/get5Posts';
    // sorted in descending order by ID (newest first)
    const data = await handleFetch5Posts(url, offset);
    if (data) {
      const newPosts = data.filter(post => !posts.some(existingPost => existingPost.id === post.id));
      if (newPosts.length === 0) 
        setShowMore(false);
      else {
        setPosts([...newPosts, ...posts]);
        if (newPosts.length % 5 > 0 || posts.length % 5 > 0)
          setShowMore(false);
      }
    }
  };

  const evaluateBody = (body: string) => {
    switch (showAll) {
      case 400:
        return body.length > 400 ? body.substring(0, 397).trimEnd() + '...' : body.trimEnd();
      case 300:
        return body.length > 300 ? body.substring(0, 297).trimEnd() + '...' : body.trimEnd();
      case 200:
        return body.length > 200 ? body.substring(0, 197).trimEnd() + '...' : body.trimEnd();
      case 100:
        return body.length > 100 ? body.substring(0, 97).trimEnd() + '...' : body.trimEnd();
    }
  }

  useEffect(() => {
    fetchPosts(offset);
    setWindowWidth(window.innerWidth);
    if (window.innerWidth > 1100) {
      setShowAll(400);
    }
    else if (window.innerWidth > 1000) {
      setShowAll(300);
    }
    else if (window.innerWidth > 700) {
      setShowAll(200);
    }
    else if (window.innerWidth > 500) {
      setShowAll(100);
    }
  }, []);

  // change description size on window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1100) {
        setShowAll(400);
      }
      else if (window.innerWidth > 1000) {
        setShowAll(300);
      }
      else if (window.innerWidth > 700) {
        setShowAll(200);
      }
      else if (window.innerWidth > 500) {
        setShowAll(100);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  return (
    <div className='blog'>
      <h2>Our Blog</h2>
        { posts.length === 0 && <div className="blog-posts">
          <h4>No posts available to view, check back later!</h4>
        </div> }
        { posts.length > 0 && <div className="blog-posts">
          { posts.map(post => (
            <div className="post" key={ post.title }>
              <div className="img-container" onClick={ () => navigate(`${ post.id }`) }>
                <img src={ post.image === '' ? '/logos/pets4luv.png' : post.image } />
              </div>
              <div className="text-container">
                <div className="heading">
                  <h4 onClick={ () => navigate(`${ post.id }`) }>{ post.title }</h4>
                  <p>{ post.date }</p>
                </div>
                <div className="content">
                  <p onClick={ () => navigate(`${ post.id }`) }>{ evaluateBody(post.body) }</p>
                </div>
              </div>
            </div>
          )) }
          { showMore && <button className="show-more" onClick={ 
            () => {
              setOffset(offset + 1);
              fetchPosts(offset);
            } 
          }>Show More</button> }
        </div> }
    </div>
  );
}

export default Blog;