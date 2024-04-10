import React from 'react';
import '../Footer/Footer.css'

function Footer() {
  return (
    <>
    <footer className='footer_sec'>
        <div className="inside_container">
            <div className="row">
                <div className="col-md-6">
                    <div className="social_link text-center">
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-google-plus-g"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="copy text-center">
                        <p className='text-white'>© 2019 All Rights Reserved. Created by Web Domus Italia</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
      
    </>
  )
}

export default Footer
