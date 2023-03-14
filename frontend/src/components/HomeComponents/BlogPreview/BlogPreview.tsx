import React, { useState } from 'react';
import './BlogPreview.css';
import { useEffect } from "react";
import { useFetch } from '../../../hooks/useFetch';
import { BlogPost } from '../../../types/BlogPost.model';
import { useNavigate } from 'react-router-dom';

function BlogPreview() {
    const [post, setPost] = useState<BlogPost>();
    const [postBody, setPostBody] = useState('');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    const fetchData = async () => {
        const url = 'http://localhost:5000/recentPost';
        const post = await useFetch(url);
        setPost(post);
        if (post) {
            if (window.innerWidth > 600) {
                if (post)
                    setPostBody(post.body.length > 400 ? post.body.substring(0, 397).trimEnd() + '...' : post.body);
            }
            else {
                if (post)
                    setPostBody(post.body.length > 200 ? post.body.substring(0, 197).trimEnd() + '...' : post.body);
            }
        }
    };

    // fetch data on mount ONCE
    useEffect(() => {
        fetchData();
    }, []);

    // change description size on window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (windowWidth > 600) {
                if (post)
                    setPostBody(post.body.length > 400 ? post.body.substring(0, 397).trimEnd() + '...' : post.body);
            }
            else {
                if (post)
                    setPostBody(post.body.length > 200 ? post.body.substring(0, 197).trimEnd() + '...' : post.body);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth]);

    return (
        <div className='blog-preview'>
            <h2>Our Blog</h2>
            <div className="preview">
                { post && <>
                    <div className="img-container">
                        <img src={ post?.image === '' ? '/logos/pets4luv.png' : post?.image } />
                    </div>
                    <div className="text-container">
                        <h3>{ post?.title }</h3>
                        <p style={{ color: '#444' }}>{ postBody }</p>
                        <p className='link' style={{ fontWeight: 'bold' }} onClick={ () => navigate(`/blog/${ post.id }`) }>Read more...</p>
                    </div>
                </> }
                { !post && <h3 onClick={ () => navigate(`/blog`) }>No posts yet, check back soon!</h3> }
            </div>
            <h5 className='link'>View more of our posts here!</h5>
        </div>
    );
}

export default BlogPreview;
