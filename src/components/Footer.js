import { useState } from "react";

const Footer = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <footer>
      <div className="icons">
        <a href="https://github.com/yo-livy" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="http://www.linkedin.com/in/livschitz" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://medium.com/@yo.livy7" target="_blank"><i class="fa-brands fa-medium"></i></a>
        <a href="mailto:yo.livy7@gmail.com" className="tooltip-container"><i class="fa-solid fa-envelope" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}></i>{showTooltip && <span className="tooltip">yo.livy7@gmail.com</span>}</a>
      </div>
    </footer>
  );
};

export default Footer;
