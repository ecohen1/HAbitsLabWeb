function setNav(){
  var path = window.location.pathname;
  var page = path.split("/").pop();
  var header = $("#header");
  header.append( `
    <div id="top-bar">
        <div class="contain-1120">
            <div id="left">
                <a href="http://www.northwestern.edu"><img src="https://common.northwestern.edu/v8/css/images/northwestern.svg" alt="Northwestern University" /><span class="hide-label">Northwestern University</span></a>
            </div>
            <div id="right">
                <ul>
                    <li><a href="http://www.nalshurafa.com/">Lab Director's Page</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="bottom-bar contain-1120">
        <div id="department">
            <h1><a href="https://muyangamigo.github.io/HAbitsLabWeb/index.html">The Habits Lab</a></h1>
        </div>
    </div>
    <nav id="top-nav" aria-label="main navigation menu">
        <div class="contain-1120">
            <ul>
              <li id="index.html">
                  <a href="index.html">Home</a>
              </li>
              <li id="team.html">
                  <a href="team.html">People</a>
              </li>

              <li id="research.html">
                  <a href="research.html">Research</a>
              </li>
              <li id="publications.html">
                  <a href="publications.html">Publication</a>
              </li>
              <!-- <li id="blog.html">
                  <a href="#">Code and Data</a>
              </li> -->
              <li id="portfolio.html">
                <a href="portfolio.html">Projects</a>
              </li>
              <li id="contact.html">
                <a href="contact.html">Contact</a>
              </li>
              <li id="news.html">
                <a href="news.html">Latest News</a>
              </li>
            </ul>
        </div>
    </nav>
  `);

  var id = "#" + page;
  var selected = document.getElementById(page);
  selected.className += "active";
  console.log(selected);
}
