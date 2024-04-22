import React from 'react'
import Data from '../../Data'

function Home(props) {
 
  return (
    <>
  



      <section className="main bg-light py-3 mt-3">
        <div className="container py-5 mt-5">
          <h5 className="text-success">FITNESS AND NUTRITION</h5>
          <div className="row text-dark fst-italic fs-1">
            <div className="col-lg-4 ">
              <h1 className='main-title py-4'>This life style for your fitness, not only diet.</h1>
            </div>
          </div>

          <h6 className='py-4'>It has survived not only five centuries but also</h6>
          <form >

            <button className="btn btn-outline-success mt-4" type="submit" >Start Course</button>
          </form>




          <div className='bg-light text-dark py-3 mt-3 text-center'>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <p className='text'>
                  Connect with us:
                </p>
              </div>
              <div >
                <ul className="flex" >
                 <div className="box"> <li><a href="#"><i class="bi bi-facebook"></i></a></li></div>
                  <div className="box"><li><a href="#"><i class="bi bi-skype"></i></a></li></div>
                  <div className="box"><li><a href="#"><i class="bi bi-twitter"></i></a></li></div>
                  <div className="box"><li><a href="#"><i class="bi bi-instagram"></i></a></li></div>
                </ul>
              </div>
            </div>
          </div>




        </div>

      </section>



    </>
  )
}

export default Home
