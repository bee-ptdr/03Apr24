import React from 'react';
import '../YogaCenter/Yogacenter.css'

function Yogecenter() {
    return (
        <>
            <section className='center_section'>
                <div className="inside_center">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="center-left">
                                <h2>The Best Class for your Yoga Center</h2>
                                <p>At solmen li esser necessi uniform grammatica, pronunciation sommun paroles, quande li coalingue simplic regulari quam coalescent lingues.</p>
                                <ul>
                                    <li>Vivamus semper odio in nibh ultricies</li>
                                    <li>Duis rhoncus lectus at velit hendrerit quis</li>
                                    <li>Nam gravida magna vitae ante dignissim</li>
                                </ul>
                                <p>Necessi uniform grammatica, pronunciation sommun paroles, quande li coalingue simplic regulari coalescent lingues.</p>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="center-right">
                                <img src="img/center.jpg" alt="" />
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Yogecenter
