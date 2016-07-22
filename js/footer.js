function setFooter() {
  $("#appendFooter").append(
    `
    <footer id="footer-1" class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                  <div class="subpage-title">
                      <h5>The Lab</h5>
                  </div>
                  <p>We design, build, develop, and analyze. We are habits lab.</p>
                  <img alt="Brand" src="assets/img/logo/habits.png">
                </div>
                    <!-- /.about-us -->
                <div class="col-md-3">
                    <div class="subpage-title">
                        <h5>Stay Connected</h5>
                    </div>
                    <p>Follow Us on Social Medial</p>
                    <ul class="social-links">
                        <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a class="pinterest" href="#"><i class="fa fa-pinterest"></i></a></li>
                        <li><a class="rss" href="#"><i class="fa fa-rss"></i></a></li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <div class="subpage-title">
                      <h5>Connections</h5>
                    </div>
                      <p >The Habits Lab is Affiliated To Northwestern Feinberg School of Medcine and Northwestern McCormick School of Engineering.</p>
                          <a href="http://www.feinberg.northwestern.edu"><img class="responsive" src="assets/img/logo/Feinberg.png" width="200" height="43"></img></a>&nbsp&nbsp&nbsp
                          <a href="http://www.mccormick.northwestern.edu"><img class="responsive" src="assets/img/logo/McCormick.png" width="200" height="51"></img></a>
                </div>
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </footer>
    <!-- /#footer-1 -->
    <footer id="footer-2" class="footer">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-5 footer-info-wrapper">
                    <span>The HAbits Lab © COPYRIGHT 2016 NORTHWESTERN UNIVERSITY</span>
                </div>
                <!-- /.footer-info-wrapper -->
                <div class="col-xs-12 col-md-5 footer-info-wrapper">
                    <span>(312) 503-4517 | 680 N. Lakeshore Dr., Suite 1400, Chicago, IL 60611</span>
                </div>
                <div class="col-xs-12 col-md-2 footer-info-wrapper">
                    <span>Designed By <a href="https://muyangamigo.github.io">Junjie Li</a></span>
                </div>
                <!-- /.footer-links-wrapper -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </footer>
    <!-- /#footer-2 -->
    `
  )
}
