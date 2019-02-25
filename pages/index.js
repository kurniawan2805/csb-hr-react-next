// import Link from "next/link";
// import fetch from 'isomorphic-unfetch';
// import { create } from 'apisauce';
// import Error from 'next/error';
import axios from "axios";
import Layout from "../components/Layout/Layout";
import TopStories from "../containers/TopStories";

const Index = props => {
  return (
    <Layout>
      <TopStories posts={props.posts} />
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const URL = "https://hacker-news.firebaseio.com/v0/topstories.json";
  // const api = axios.create({ baseURL: URL, timeout: 10000 });

  const ax = await axios.get(URL);
  // console.log(ax.data.slice(0, 15));
  // const res1 = await fetch(URL);
  // const res = await res1.json();
  // const res = await fetch(URL);
  // const statusCode = res.statusCode > 200 ? res.statusCode : false;
  // const urlDataAll = await res.json();
  const urlData = ax.data.slice(0, 15);
  // console.log(res);
  // console.log(res1);
  let promises = urlData.map(id => {
    const urls = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
    return axios.get(urls);
  });
  // console.log(promises);
  const data = await axios.all(promises);
  // let data = posts.map(post => {
  //   return post.json();
  // });
  // const data = await posts.json();
  // let data = axios.all(promises).then(res => {
  //   res.map(r => r.data);
  //   console.log(res);
  //   return res;
  // });
  // data.then(res => console.log(res));
  const posts = data.map(post => post.data);
  // console.log(data);
  // const data = urlData;

  return { posts };
};

export default Index;
