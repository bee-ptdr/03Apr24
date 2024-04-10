import React from 'react';
import '../Classes/Classes.css'

function Classes() {
    const classData = [
        {
            img : "class1.jpg",
            yogaName : "Kundalini Yoga",
            desc : "Li Europan lingues membres del sam familie."
        }
    ]
    console.log(classData)
  return (
    <>
    <section className='class_sec'>
        <div className="inside_container">
            <div className="top_bar text-center">
                <h2>Our Yoga Classes</h2>
                <p>At solmen li esser necessi uniform grammatica, pronunciation</p>
            </div>
            <div className="main_class">
                <div className="row">
                    <div className="col-md-3 class_card">
                        <img src="img/class1.jpg" alt="" />
                        <h5>Kundalini Yoga</h5>
                        <p>Li Europan lingues membres del sam familie.</p>
                    </div>
                    <div className="col-md-3 class_card">
                        <img src="img/class2.jpg" alt="" />
                        <h5>Besic Yoga</h5>
                        <p>Li Europan lingues membres del sam familie.</p>
                    </div>
                    <div className="col-md-3 class_card">
                        <img src="img/class3.jpg" alt="" />
                        <h5>Iyengar Yoga</h5>
                        <p>Li Europan lingues membres del sam familie.</p>
                    </div>
                    <div className="col-md-3 class_card">
                        <img src="img/class4.jpg" alt="" />
                        <h5>Aadvanced Yoga</h5>
                        <p>Li Europan lingues membres del sam familie.</p>
                    </div>
                </div>
            </div>
        </div>
        

    </section>
      
    </>
  )
}

export default Classes
