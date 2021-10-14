import React, { useState } from "react"
import { getPosts, giveLike } from "../services/ThreePointsServices"


function Post(props) {

    const [likes, setLikes] = useState(props.likes)

    function handleLikes(){
        giveLike(props.id)
            .then(response =>{
                getPosts()
                    .then(response => {
                        response
                            .filter(post => post.id === props.id)
                            .map(post => (setLikes(post.likes)))
                    })
            })
    }

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-2">
            <div className="card mb-2">
                <img className="card-img-top" src={props.image} alt="Comida"></img>
                <div className="card-body">
                    <div className="row">
                        <div className="col-7 col-sm-7 author-container">
                            <span className="author-post">{props.author}</span>
                        </div>
                        <div className="col-5 col-sm-5">
                            <button
                                onClick={handleLikes}
                                type="button"
                                className="btn btn-danger">
                                <i className="fa fa-thumbs-o-up"></i>Me gusta ({likes})
                            </button>
                        </div>
                    </div>
                    <p className="card-text mt-3">{props.text}</p>
                </div>
                <div className="post-meta">
                    <div className="row">
                        <div className="col-6 col-sm-6">
                            <span className="timestamp"><i className="fa fa-clock-o"></i>{props.createdAt}</span>
                        </div>
                        <div className="col-6 col-sm-6">
                            <span className="comments"><i className="fa fa-comments"></i>{props.comments} comentarios</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Post

