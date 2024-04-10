import React from 'react';
import '../Trainers/Trainer.css'

function Trainer() {
  return (
    <>
      <section className='trainer_sec'>
        <div className="inside_container">
            <div className="top_bar text-center">
                <h2 className='head-color'>Expert Trainers</h2>
                <p>At solmen li esser necessi uniform grammatica, pronunciation</p>
            </div>
            <div className="main_bar">
                <div className="row">
                    <div className="col-md-3">
                        <img src="img/t1.jpg" alt="" />
                        <h5>Fig Nelson</h5>
                        <i>Trainer</i>
                    </div>
                    <div className="col-md-3">
                        <img src="img/t2.jpg" alt="" />
                        <h5>Jason Response</h5>
                        <i>Trainer</i>
                    </div>
                    <div className="col-md-3">
                        <img src="img/t3.jpg" alt="" />
                        <h5>Eric Widget</h5>
                        <i>Trainer</i>
                    </div>
                    <div className="col-md-3">
                        <img src="img/t4.jpg" alt="" />
                        <h5>Lance Bogrol</h5>
                        <i>Trainer</i>
                    </div>
                </div>
            </div>

        </div>
      </section>
    </>
  )
}

export default Trainer
