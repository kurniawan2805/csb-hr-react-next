import Navbar from "./Navbar";
import Head from "./Head";
import Footer from "./Footer";

const Layout = props => {
  return (
    <div>
      <Head />
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
