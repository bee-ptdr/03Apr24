import React from 'react';
import '../Form/Form.css'

function Form() {
  return (
    <>
    <section className='form_sec'>
        <div className="inside_container">
            <div className="top_bar text-center">
                <h2 className='head-color'>FORM & TIME SCHEDULE</h2>
                <p>At solmen li esser necessi uniform grammatica, pronunciation</p>
            </div>
            <div className="main_form">
                <div className="row">
                    <div className="col-md-6">
                        <div className="right">
                            <div className="form-head text-center pt-2">
                                <h2 className='head-color'>Make An Appiontment</h2>
                                <p>At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.</p>
                            </div>
                            <div className="form-body">
                                <form action="">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input className='form-control' type="text" placeholder='First Name*'/>
                                        </div>
                                        <div className="col-md-6">
                                            <input className='form-control' type="text" placeholder='Last Name*'/>
                                        </div>
                                        <div className="col-md-6">
                                            <input className='form-control' type="date"/>
                                        </div>
                                        <div className="col-md-6">
                                            <input className='form-control' type="text" placeholder='Choose Class*'/>
                                        </div>
                                        <div className="col-md-6">
                                            <input className='form-control' type="text" placeholder='Phone'/>
                                        </div>
                                        <div className="col-md-6">
                                            <input className='form-control' type="email" placeholder='Email'/>
                                        </div>
                                        <div className="col-md-12">
                                            <textarea className='form-control mt-3' name="" id="" cols="50" rows="5"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className='appnt-btn'>BOOK AN APPOINTMENT</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="left text-center">
                            <h4 className='head-color'>Weekend</h4>
                            <b>06.00 AM - 07.00 AM</b>
                            <p>kundalini meditation beginners for Yoga</p>
                            <b>07.00 AM - 08.30 AM</b>
                            <p>Surya Namaskar & Advanced Meditation</p>
                            <h4 className='head-color'>Weekend</h4>
                            <b>05.00 AM - 07.00 AM</b>
                            <p>Weekly Pratice with children Yoga</p>
                            <b>08.00 AM - 10.00 AM</b>
                            <p>Advanced Meditation & Healthy Recipes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
      
    </>
  )
}

export default Form
