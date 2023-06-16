
import "./header.css";
import Navbar from './../navbar/Navbar';

const Header = () => {
  return (
    <header className="header">
      <Navbar/>
      <h1 className="header-title">My Bookstore</h1>
      <div className="header-content">
        <p>Welcome to My Bookstore!</p>
        <button className="header-button">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
