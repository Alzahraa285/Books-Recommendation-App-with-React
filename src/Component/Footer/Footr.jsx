import React from 'react'
import './foot.css';

export default function Footr () {
  return (
    <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>

        
<footer className="footer">
<div className="container">
  <div className="row">
    <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
      <h2 className="footer-heading"><a href="#" className="logo"> Online Library</a></h2>
      <p>Explore a vast collection of books across various genres that cater to all interests. Our library is dedicated to providing readers with access to a wide range of literature, from fiction and non-fiction to academic resources.</p>
      <a href="#">Read more <span className="fa fa-chevron-right" style={{fontSize: '11px'}} /></a>
    </div>
    <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
      <h2 className="footer-heading">Services</h2>
      <ul className="list-unstyled">
        <li><a href="#" className="py-1 d-block">Online Access</a></li>
        <li><a href="#" className="py-1 d-block">Reading Recommendations </a></li>
        <li><a href="#" className="py-1 d-block">Community Engagement</a></li>
      </ul>
    </div>
    <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
      <h2 className="footer-heading">Tag cloud</h2>
      <div className="tagcloud row">
        <a href="#" className="tag-cloud-link  col-6">Books</a>
        <a href="#" className="tag-cloud-link col-6">Literature</a>
        <a href="#" className="tag-cloud-link col-6">Stories</a>
        <a href="#" className="tag-cloud-link col-6">Knowledge</a>
        <a href="#" className="tag-cloud-link col-6">Learning</a>
        <a href="#" className="tag-cloud-link col-6">Resources</a>

      </div>
    </div>
    <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
      <h2 className="footer-heading ">Subcribe</h2>
      <form action="#" className="subscribe-form">
        <div className="form-group d-flex">
          <input type="text" className="form-control rounded-left" placeholder="Enter email address" />
          <button type="submit" className="form-control  submit rounded-right">
           submit</button>
        </div>
      </form>
      <h2 className="footer-heading mt-5">Follow us</h2>
      <ul className="ftco-footer-social p-0">
        <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="fa fa-twitter" /></a></li>
        <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="fa fa-facebook" /></a></li>
        <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="fa fa-instagram" /></a></li>
      </ul>
    </div>
  </div>
</div>

</footer>
    </div>
  )
}
