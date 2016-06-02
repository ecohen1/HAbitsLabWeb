function setNav(){
  var path = window.location.pathname;
  var page = path.split("/").pop();
  var header = $("#header");
  header.append( `
  <nav class="navbar navbar-default navbar-static-top" role="navigation">
      <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="index.html">Habits<span>Lab</span></a>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse navbar-ex1-collapse">
              <ul class="nav navbar-nav">
                  <li class="dropdown" id="index.html">
                      <a href="index.html">Home</a>
                  </li>
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">Latest News</a>
                      <!-- <ul class="dropdown-menu">
                          <li><a href="elements.html">UI Elements</a></li>
                          <li><a href="buttons.html">Buttons</a></li>
                          <li><a href="icons.html">Icons</a></li>
                          <li><a href="pricing.html">Pricing Tables</a></li>
                      </ul> -->
                  </li>
                  <li class="dropdown" id="team.html">
                      <a href="team.html">People</a>
                  </li>

                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">Research</a>
                      <!-- <ul class="dropdown-menu">
                          <li><a href="portfolio-2.html">Portfolio 2 Columns</a></li>
                          <li><a href="portfolio-3.html">Portfolio 3 Columns</a></li>
                          <li><a href="portfolio-4.html">Portfolio 4 Columns</a></li>
                          <li><a href="portfolio-item-1.html">Portfolio Item 1</a></li>
                          <li><a href="portfolio-item-2.html">Portfolio Item 2</a></li>
                      </ul> -->
                  </li>
                  <li class="dropdown" id="publications.html">
                      <a href="publications.html">Publication</a>
                  </li>
                  <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">Habits Blog</a>
                      <!-- <ul class="dropdown-menu">
                          <li><a href="contact-1.html">Contact 1</a></li>
                          <li><a href="contact-2.html">Contact 2</a></li>
                      </ul> -->
                  </li>
                  <li class="dropdown" id="portfolio.html">
                    <a href="portfolio.html">Projects</a>
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
