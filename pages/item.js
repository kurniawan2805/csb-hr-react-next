import axios from 'axios';

import Layout from '../components/Layout/Layout';
import Comments from '../containers/Comments';

const Item = props => {
  // console.log(props);
  return (
    <Layout>
      <Comments comments={props.comments} />
    </Layout>
  );
};

Item.getInitialProps = async function(props) {
  const { id } = props.query;
  const URL = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
  const job = await axios.get(URL);
  const kids = job.data.kids;
  // console.log(job);
  // console.log(kids);
  let promises = kids.map(id => {
    const urls = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
    return axios.get(urls);
  });
  // console.log(promises);
  const data = await axios.all(promises);
  const comments = data.map(d => d.data);
  // console.log(comments);

  return {
    comments
  };
};

export default Item;
