function setFooter() {
  $("#appendFooter").append(
    `
    <footer id="footer-1" class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <!-- <div class="widget about-us"> -->
                        <div class="footer-brand"><span>HAbits</span>Lab</div>
                        <p>The HAbits lab focuses on testing, designing, developing and optimizing existing and novel sensing devices to better understand and improve habits.</p>
                    <!-- </div> -->
                </div>
                    <!-- /.about-us -->
                <div class="col-md-4">
                    <!-- <div class="widget stay-connedted"> -->
                        <div class="subpage-title">
                            <h5>Stay Connected</h5>
                        </div>
                        <ul class="social-links">
                            <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                            <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a class="pinterest" href="#"><i class="fa fa-pinterest"></i></a></li>
                            <li><a class="rss" href="#"><i class="fa fa-rss"></i></a></li>
                        </ul>
                    <!-- </div> -->
                </div>
                <div clss="col-md-4">
                    <div class="subpage-title">
                      <h5>Connections</h5>
                      <!-- <img class="img-responsive" src="assets/img/logo/NU.png" width="341", height="82"></img> -->

                        <!-- <div class="col-sm-6"> -->
                          <a href="http://www.feinberg.northwestern.edu"><img class="responsive" src="assets/img/logo/Feinberg.png" width="280" height="60"></img></a>
                        <!-- </div> -->
                        <!-- <div class="col-sm-6"> -->
                          <a href="http://www.mccormick.northwestern.edu"><img class="responsive" src="assets/img/logo/McCormick.png" width="280" height="72"></img></a>
                        <!-- </div> -->

                    </div>
                </div>
                <!-- /.col-md-3 -->
                <!-- <div class="col-md-3">
                    <div class="widget popular-posts">
                        <div class="subpage-title">
                            <h5>Popular Posts</h5>
                        </div>
                        <ul class="recent-posts">
                            <li>
                                <img src="assets/img/blog/recent-posts/photo (1).jpg" alt="Post Image">
                                <h5>
                                    <a href="post-1.html">The Ultimate Guide to Adjustment Layers – Vibrance</a>
                                    <small><i class="fa fa-clock-o"></i> Posted July 20, 2013</small>
                                </h5>
                            </li>
                            <li>
                                <img src="assets/img/blog/recent-posts/photo (2).jpg" alt="Post Image">
                                <h5>
                                    <a href="post-1.html">Complete Guide to What’s New in Adobe Photoshop 14.1</a>
                                    <small><i class="fa fa-clock-o"></i> Posted July 15, 2013</small>
                                </h5>
                            </li>
                            <li>
                                <img src="assets/img/blog/recent-posts/photo (3).jpg" alt="Post Image">
                                <h5>
                                    <a href="post-1.html">How to Integrate Lightroom Into Your Photoshop Workflow</a>
                                    <small><i class="fa fa-clock-o"></i> Posted July 10, 2013</small>
                                </h5>
                            </li>
                            <li>
                                <img src="assets/img/blog/recent-posts/photo (4).jpg" alt="Post Image">
                                <h5>
                                    <a href="post-1.html">The Ultimate Guide to Adjustment Layers – Vibrance</a>
                                    <small><i class="fa fa-clock-o"></i> Posted July 10, 2013</small>
                                </h5>
                            </li>
                        </ul>
                    </div>
                    /.popular-posts
                </div> -->
                <!-- /.col-md-3 -->
                <!-- <div class="col-md-3">
                    <div class="widget tagcloud">
                        <div class="subpage-title">
                            <h5>Popular Tags</h5>
                        </div>
                        <ul class="tagcloud-list">
                            <li><a href="#">photoshop</a></li>
                            <li><a href="#">html</a></li>
                            <li><a href="#">css</a></li>
                            <li><a href="#">html5</a></li>
                            <li><a href="#">css3</a> </li>
                            <li><a href="#">illustration</a></li>
                            <li><a href="#">javascript</a></li>
                            <li><a href="#">jquery</a></li>
                            <li><a href="#">bootstrap 2</a></li>
                            <li><a href="#">bootstrap 3</a></li>
                            <li><a href="#">php</a></li>
                            <li><a href="#">mysql</a></li>
                            <li><a href="#">wordpress</a></li>
                            <li><a href="#">ajax</a></li>
                            <li><a href="#">webmatrix</a></li>
                        </ul>
                    </div>
                    /.tagcloud
                </div> -->
                <!-- /.col-md-3 -->
                <!-- <div class="col-md-3">
                    <div class="widget flickr-photos">
                        <div class="subpage-title">
                            <h5>Flickr Photos</h5>
                        </div>
                        <ul class="flickr-photos-list"></ul>
                    </div>
                    /.flickr-photos
                </div> -->
                <!-- /.col-md-3 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </footer>
    <!-- /#footer-1 -->
    <footer id="footer-2" class="footer">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 footer-info-wrapper">
                    <span>The HAbits Lab © COPYRIGHT 2016 NORTHWESTERN UNIVERSITY</span>
                </div>
                <!-- /.footer-info-wrapper -->
                <div class="col-xs-12 col-sm-6 footer-links-wrapper">
                    <span>(312) 503-4517 | 680 N. Lakeshore Dr., Suite 1400, Chicago, IL 60611</span>
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
