const ProjectFour = () => {
  return (
    <section id="four" className="blank no-padding">
      <div className="project-desc">
        <p className="project-desc-title">
          Moneyspace. Educational investment app.
        </p>
        <p>
          Convenient way to study stock market and track your portfolio state.
          Based on <b>React</b> and <b>Node.JS</b>.
        </p>
        <p>
          Backend libraries/packages: Express.JS, CORS, dotenv, Knex,
          bcrypt, Axios, JWT.
        </p>
        <p>
          Frontend hooks, libraries/packages: React: useState, useEffect,
          useContext, useMemo; React-router-dom: Routes, Route, Link, NavLink,
          useNavigate, useLocation; Axios; Date-fns; React-chartjs-2:
          Line; Chart.js; Material-UI.
        </p>
        <p>PostgreSQL</p>
        <p>3rd party api: 12 Twelve, Alpha Vantage.</p>
        <p>
          <a href="https://github.com/yo-livy/finalProject-client.git" target="_blank">Github Frontend</a> / <a href="https://github.com/yo-livy/finalProject-server.git" target="_blank">Github Backend</a>
          <br />
          <br />
          <a href="https://main.d2uebtsvx7ekeo.amplifyapp.com" target="_blank">Website</a>
        </p>
      </div>
      <div className="img-container fifth"></div>
    </section>
  );
};

export default ProjectFour;
