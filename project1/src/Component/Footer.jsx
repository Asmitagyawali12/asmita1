import React from 'react'

function Footer() {
  return (
    <>
       <footer className='bg-success text-white py-4 mt-3 text-center'>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h6 className="text-warning fst-italic fs-1">Subscribe Newsletter</h6>
              <p>Lorem Ipsum has been them an industry printer took a galley make book.</p>
              <form>
                <input className="action px-4 py-2" type="email" placeholder='Enter your email' />
                <button className='btn btn-outline-light mt-3'>Subscribe Now</button>
              </form>
            </div>
            <div className="col-lg-3 ">
            <h6 className="text-warning fst-italic fs-1">All Courses</h6>
              <ul>
                <li>Daily Exercise</li>
                <li>Daily Exercise</li>
                <li>Daily Exercise</li>
                <li>Daily Exercise</li>
                <li>Daily Exercise</li>
                <li>Daily Exercise</li>
              </ul>
            </div>
            <div className="col-lg-3">
            <h6 className="text-warning fst-italic fs-1">All Courses</h6>
              <ul className="points list-style-none">
                <li>Daily Exercise</li>
                <li>Daily Exercise</li>
                <li>Daily Exercise</li>
                <li>Daily Exercise</li>
                <li>Daily Exercise</li>
                <li>Daily Exercise</li>
              </ul>
            </div>
            <div className="col-lg-3">
            <h6 className="text-warning fst-italic fs-1">Opening Hours</h6>
              <ul>
                <li>Mon-Fri: 9 AM – 6 PM</li>
                <li>Sat-Sun: 10 AM – 8 PM</li>
                <li>Saturday:Closed</li>
              </ul>
              <h6 className="text-warning fst-italic fs-1">Location</h6>
              <h5>176 W street name, New york NY10014</h5>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <section className='footer-copyright py-4 text-center'>
    <div className="container">
      <div className="row ">
        <div className=" point1 col-lg-6 text-start ">
      <p>
      © 2023<span> Nutras </span> Made with <i class=" fonticon bi bi-heart"></i>
      <a href="https://hasthemes.com/" target="blank"> Hasthemes </a> by
      </p>
    </div>
    <div className=" points col-lg-6">
      <ul className='d-flex text-end'>
        <li><a  href="">Terms of Service</a></li>
        <li><a  href="">Terms of Service</a></li>
        <li><a  href="">Terms of Service</a></li>
      </ul>
    </div>
    </div>
    </div>
      </section>
    </>

  
  )
}

export default Footer
