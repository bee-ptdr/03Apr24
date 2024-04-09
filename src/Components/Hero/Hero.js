import React from 'react'
import '../Hero/Hero.css';

function Hero() {
  return (
    <>
    <section>
        <div className="banner">
            <div className="banner_overlay"></div>
            <div className="banner_row">
                <div className="row">
                    <div className="col-md-4 banner_top">
                    <i className="fa-solid fa-envelope text-white me-2"></i>
                    <a href="#">infoYoga@gmail.com</a>
                    </div>
                    <div className="col-md-4 banner_top">
                        <img src="img/logo1.png" alt="" />
                    </div>
                    <div className="col-md-4 banner_top">
                    <i className="fa-solid fa-phone text-white me-1"></i>
                    <a href="#">+917697684275</a>
                    </div>
                </div>
            </div>
            <div className="banner_inside">
                <h2>Be peaceful in mind and healthy in Body!</h2>
                <p>At solmen va esser necessi fa uniform grammatica, pronunciation plu sommun paroles.</p>
                <button className='banner_btn'>JOIN US NOW</button>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Hero
