import React from "react";
import {useParams} from "react-router-dom"
import { useEffect } from "react";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../components/hooks/useFetching";
import { useState } from "react";
import PostService from "../API/PostService";
const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })
    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    },[])

    return (
        <div>
          <h1>страница поста c ID {params.id}</h1>
          {isLoading
            ? <Loader/>
            :  <div>{post.id}. {post.title}</div>
          }
          <h1>Комментарии</h1>
          {isComLoading
            ? <Loader/>
            : <div>
                {comments.map(comm => 
                    <div key={comm.id} style={{marginTop: '15px'}}>
                        <h5>{comm.email}</h5>
                        <div>{comm.body}</div>
                    </div>
                )}
                </div>
        }
            
        </div>
    )
}

export default PostIdPage;