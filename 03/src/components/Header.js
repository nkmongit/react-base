import logoUrl from "url:../../assets/images/food-delivery.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img crossOrigin="true" className="logo" src={logoUrl}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
