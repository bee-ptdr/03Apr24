import React from 'react';
import '../Service/Service.css'

function Service() {
    return (
        <>
            <section className='service_section'>
                <div className="inside_container text-center">
                    <div className="row service_detail_top">
                        <div className="col-12">
                            <h2 className='title'>Your Natural of Yoga</h2>
                            <p className='sub_title'>Yoga is a mind and body practice with origins in ancient Indian philosophy</p>
                        </div>
                    </div>
                    <div className="row service_detail mt-5">
                        <div className="col-md-4 px-4">
                            <i class="fa-solid fa-fan"></i><br />
                            <a href="#">Choose the class</a>
                            <p>It va esser tam simplic quam Occidental in fact, it va esser Occidental.</p>
                        </div>
                        <div className="col-md-4 px-4">
                            <i class="fa-solid fa-dumbbell"></i><br />
                            <a href="#">Work Routines</a>
                            <p>It va esser tam simplic quam Occidental in fact, it va esser Occidental.</p>
                        </div>
                        <div className="col-md-4 px-4">
                        <i class="fa-solid fa-rug"></i><br />
                        <a href="#">Yoga Challenge</a>
                        <p>It va esser tam simplic quam Occidental in fact, it va esser Occidental.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Service
