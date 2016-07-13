function setNav(){
  var path = window.location.pathname;
  var page = path.split("/").pop();
  var header = $("#header");
  header.append( `
  <nav class="navbar navbar-default navbar-static-top" role="navigation">
      <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
              <a href="https://muyangamigo.github.io/HAbitsLabWeb/index.html">
                <img alt="Brand" src="assets/img/logo/habits.png" style="margin-top:15px">
              </a>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse navbar-ex1-collapse">
              <ul class="nav navbar-nav">
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
                  <li id="blog.html">
                      <a href="#">Code and Data</a>
                  </li>
                  <li id="portfolio.html">
                    <a href="portfolio.html">Projects</a>
                  </li>
                  <li id="contact.html">
                    <a href="contact.html">contact</a>
                  </li>
              </ul>
              <!-- /.nav -->
          </div>
          <!-- /.navbar-collapse -->
      </div>
      <!-- /.container -->
  </nav>
  <!-- /.navbar -->
  `);

  var id = "#" + page;
  var selected = document.getElementById(page);
  selected.className += " active";
  console.log(selected);
}
