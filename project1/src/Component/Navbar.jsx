import React from 'react'


function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container align-items-center">
    
    <a className="navbar-brand" href="#">
      <div className="logo">
        <img className="w-100" src="https://htmldemo.net/nutras/p2/img/logo.png" alt="" />
      </div>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">All Courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
      
        <button className="btn btn-outline-success" type="submit">Sign In</button>
      </form>
    </div>
  </div>
  
  
</nav>
{/* 
</Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes> */}

</>
  )
}

export default Navbar


