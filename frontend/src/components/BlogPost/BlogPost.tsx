import { useNavigate, useParams } from 'react-router-dom';
import './BlogPost.css';
import { useFetch } from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import { Post } from '../../types/Post.model';

function BlogPost() {
    const navigate = useNavigate();
    const postID = useParams()['id'];
    const [post, setPost] = useState<Post>();
    
    // display the post in the blogpost component
    useEffect(() => {
        // fetch the post by id
        const fetchData = async () => {
            const url = "http://localhost:5000/getSpecificPost?index=" + postID;
            const data = await useFetch(url);
            if (data) setPost(data);
            else navigate("/blog");
        }
        fetchData();
    }, []);

    return (
        <>
            { post && <div className='blogpost'>
                <div className="go-back-wrapper">
                    <div className="go-back" onClick={ () => navigate("/Blog") }>
                        <span className="material-symbols-outlined">arrow_back</span>
                        <h5>Go Back</h5>
                    </div>
                    <div className="go-back" style={{ opacity: 0 }}>
                        <span className="material-symbols-outlined">arrow_back</span>
                        <h5>Go Back</h5>
                    </div>
                </div>
                <div className="img-container">
                    <img src={ post.image === '' ? '/logos/pets4luv.png' : post.image } />
                </div>
                <div className="text-container">
                    <div className="heading">
                        <h2 className="title">{ post.title }</h2>
                        <p className="date">{ post.date }</p>
                    </div>
                    <div className="body">
                        <p className="text">{ post.body }</p>
                    </div>
                </div>
            </div> }
        </>
    );
}

export default BlogPost;