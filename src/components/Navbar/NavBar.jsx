/* eslint-disable react/prop-types */
import './NavBar.css';
import profile from "../../assets/icons/men_photo.png";



const NavBar = (props) => {

  const {status} = props;

  return (
    <nav className="nav">

      <img src={profile} alt="Profile" />

      <div className="nav__title">
        <h1>Александр</h1>
        <p >
          {status}
        </p>
      </div>
    </nav>

  );
}

export default NavBar;
