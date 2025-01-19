import { Link } from "react-router-dom";

const PostItem = ({ post, username, userId }) => {
    if (!post) {
        return <div>Loading...</div>;  // Or some other loading/error state
    }

    const profileLink = userId ? `/profile/${userId}` : `/profile/${post.user?._id}`;

    return (
        <div className="post-item">
            <div className="post-item-image-wrapper">
                {post.image?.url && (
                    <img src={post.image.url} alt="Post" className="post-item-image" />
                )}
            </div>
            <div className="post-item-info-wrapper">
                <div className="post-item-info">
                    <div className="post-item-author">
                        <strong>Author: </strong>
                        <Link className="post-item-username" to={profileLink}>
                            {username || post.user?.username || 'Unknown'}
                        </Link>
                    </div>
                    <div className="post-item-date">
                        {post.createdAt ? new Date(post.createdAt).toDateString() : 'Unknown Date'}
                    </div>
                </div>
                <div className="post-item-details">
                    <h4 className="post-item-title">{post.title || 'Untitled'}</h4>
                    {post.category && (
                        <Link className="post-item-category" to={`/posts/categories/${post.category}`}>
                            {post.category}
                        </Link>
                    )}
                </div>
                <p className="post-item-description">
                    {post.description || 'No description available.'}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nemo hic assumenda necessitatibus in voluptatibus sapiente 
                    debitis. Perspiciatis, ipsam eos? Tempora dolorem itaque sed 
                    assumenda maiores iure animi et magnam quae!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nemo hic assumenda necessitatibus in voluptatibus sapiente 
                    debitis. Perspiciatis, ipsam eos? Tempora dolorem itaque sed 
                    assumenda maiores iure animi et magnam quae!
                </p>
                <Link className="post-item-link" to={`/posts/details/${post._id}`}>
                    Read More...
                </Link>
            </div>
        </div>
    );
};

export default PostItem;
