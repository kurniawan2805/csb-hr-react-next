import ReactHtmlParser from "react-html-parser";

const Comments = props => {
  const { comments } = props;
  // <p key={comment.id} dangerouslySetInnerHTML={{ __html: comment.text }} />
  // <p key={comment.id}>{comment.text}</p>
  const renderLists = comments.map(comment => (
    <span key={comment.id}>{ReactHtmlParser(comment.text)}</span>
  ));
  // console.log(props);

  // const text = "<a href="https: &#x2F;&#x2F; en.wikipedia.org &#x2F; wiki &#x2F; Category: Military_Superfund_sites" rel="nofollow">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Category:Military_Superfund_si...</a>"
  return (
    <div className="container">
      <h1>Comments</h1>
      {renderLists}
    </div>
  );
};

export default Comments;
