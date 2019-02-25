import TimeAgo from "react-timeago";
import Link from "next/link";

class TopStories extends React.Component {
  state = {
    posts: [],
    err: null,
    isLoading: false
  };

  renderList = () => {
    const data = this.props.posts.map(post => (
      <div className="post" key={post.id}>
        <span className="post-score badge badge-primary">{post.score}</span>
        <div className="post-content">
          <h4 className="post-title">
            <a href={post.url}>{post.title}</a>
          </h4>
          <p className="post-labels text-muted">
            {post.type} by {post.by} <TimeAgo date={post.time * 1000} /> |{" "}
            <Link href={{ pathname: "/item", query: { id: `${post.id}` } }}>
              <a className="item-detail">{post.descendants} comments</a>
            </Link>
          </p>
        </div>
        <style jsx>
          {`
            .post {
              display: flex;
              justify-content: center;

              transition: 0.3s;
              width: 100%;
            }

            .post:hover {
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }

            .post-score {
              display: flex;
              justify-content: center;
              align-items: center;
              min-width: 50px;
              padding: 5px;
              font-size: 1.2rem;
              box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
            }

            .post-content {
              padding: 5px;
              text-align: left;
              box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
              width: 100%;
            }

            .post-title {
              font-size: 1rem;
              margin: 2px 0;
            }
            a {
              text-decoration: none;
            }
            .post-labels {
              font-size: 0.7rem;
              margin-bottom: 5px;
            }
          `}
        </style>
      </div>
    ));

    return data;
  };

  render() {
    // console.log(this.props.posts);

    return <div className="posts-wrapper">{this.renderList()}</div>;
  }
}

export default TopStories;
