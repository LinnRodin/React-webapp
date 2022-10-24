import React from 'react'
import sittingfemale from '../Assets/Images/sittingfemale.svg';
import sittingmale from '../Assets/Images/sittingmale.svg';

const ShowCaseSection = () => {
  return (
    <section className="showcase">
            <div className="container">
                <div className="showcase-content">  
                    <div><img src={sittingfemale} className="_img-left" alt="female"/></div>
                        <div><h1><strong>SALE UP TO 50% OFF</strong></h1>
                            <p>Online shopping free home delivery over $100</p>
                            <div className="general_button">
                            <a href = "#"><button type= "button" className="btn special_button">SHOP NOW</button></a>
                            </div>
                        </div>
                    <div><img src={sittingmale} className="_img-right" alt="male"/></div>
                </div>
            </div>        
        </section>
  )
}

export default ShowCaseSection




