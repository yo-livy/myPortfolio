import profileImg from '../images/profile-photo.JPG';

const Navbar = () => {
    return (
      <nav>
        <div className="logo">
          <img src={profileImg} alt="Logo" />
          <p>Evgeny Livschitz</p>
        </div>
        <ul>
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;