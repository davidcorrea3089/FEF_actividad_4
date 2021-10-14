import React, { useEffect, useState } from "react"
import Post from "./Post"
import { getPosts } from "../services/ThreePointsServices";

function PostList (props){
    
    const[posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
            .then(response => {
                setPosts(response)
            })
        return () => {
            setPosts({})
        }
    }, [])

    const getComponent = () => {
        
        if(posts.length > 0){
            return(
                <div className="row ml-1 mr-1">
                    {  
                     posts
                     .filter(post =>  post.text.toLowerCase().includes(props.search.toLowerCase()))
                     .map((post, index) => (
                         <Post 
                             createdAt={post.createdAt}
                             author={post.author.name}
                             text={post.text}
                             comments={post.comments.length}
                             image={post.image}
                             likes={post.likes}
                             key={post.id}
                             id={post.id}
                         />
                     ))
                }
                </div>    
            )
        }else{
            return(
                "Cargando..."
            )
        }
    }

    return(
        getComponent()
    )

}

export default PostList