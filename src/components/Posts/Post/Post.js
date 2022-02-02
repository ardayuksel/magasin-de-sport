import { Link } from "react-router-dom";

function Post({ post }) {
  let title =
    post.owner.title.charAt(0).toUpperCase() + post.owner.title.slice(1);
  let publishDate = post.publishDate.slice(0, -5).replace("T", " ");

  return (
    <div className="post">
      <div className="post__user">
        <img
          className="post__user-img"
          src={post.owner.picture}
          alt={post.owner.firstName}
        />
        <div className="post__user-info">
          <Link
            className="link-container"
            to={{ pathname: `/user/${post.owner.id}` }}
          >
            {post.owner.title} {post.owner.firstName} {post.owner.lastName}
          </Link>
          <h2>{title}</h2>
        </div>
      </div>
      <hr />
      <div className="post__photo">
        <img className="post__photo-img" src={post.image} alt={post.text} />
      </div>
      <div className="post__tags">
        <h3>{post.tags[0]}</h3>
        <h3>{post.tags[1]}</h3>
        <h3>{post.tags[2]}</h3>
      </div>
      <div className="post__description">{post.text}</div>
      <div className="post__link">
        <a href={post.image}>{post.image} </a>
      </div>
      <hr />
      <div className="post__info">
        <div className="post__info-like">
          <span className="heart-icon fa fa-heart"></span>
          <span className="post__info-like-count">{post.likes} Likes</span>
        </div>
        <div className="post__info-date">{publishDate}</div>
      </div>
      <div className="post__bottom-link">
        <a href={post.owner.picture}>User Picture</a>
        <a href={post.image}>Animal picture</a>
      </div>
    </div>
  );
}

export default Post;
