const Projects = () => {
  return (
    <section id="projects" className="blank projects-padding">
      <div className="title">Projects</div>

      <div className="projects">
        <div className="port-row">
          <div class="item-long first">
            <a href="#one">
            <div className="cover">
              <p className="cover-title">A tribute page to Viktor Frankl</p>
              <p className="cover-tag">//HTML CSS</p>
            </div>
            </a>
          </div>
          <div class="item-long second">
            <a href="#two">
            <div className="cover">
              <p className="cover-title">A page about great parks of Tel Aviv</p>
              <p className="cover-tag">//HTML CSS</p>
            </div>
            </a>
          </div>
          <div class="item-short third"></div>
        </div>

        <div className="port-row reverse">
          <div class="item-long fourth">
            <a href="#three">
            <div className="cover">
              <p className="cover-title">Simple habits posts</p>
              <p className="cover-tag">//Javascript Django-Rest</p>
            </div>
           </a>
          </div>
          <div class="item-long fifth">
            <a href="#four">
            <div className="cover">
              <p className="cover-title">Stock market educational platform</p>
              <p className="cover-tag">//React Node.JS</p>
            </div>
            </a>
          </div>
          <div class="item-short sixth"></div>
        </div>

        <div class="item_4"></div>

        <div class="item_5"></div>
        <div class="item_6"></div>
      </div>
    </section>
  );
};

export default Projects;
