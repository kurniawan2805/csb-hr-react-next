import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/index">
        <a className="navbar-brand">HR-React</a>
      </Link>
      <div
        className="justify-content-end collapse navbar-collapse"
        id="navbarNavAltMarkup"
      >
        <div>
          <ul className="navbar-nav ">
            <li className="nav-item mx-3">
              <Link href="/index">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item  mx-3">
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
