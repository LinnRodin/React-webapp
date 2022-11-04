import React from 'react'
import customerservice from '../Assets/Images/customerservice.svg'
import creditcard from '../Assets/Images/creditcard.svg'
import deliverytruck from '../Asset/Images/deliverytruck.svg'


const InfoBoxesSection = () => {
    return (
        <div className="bottom-menu">
            <div className="container">
                <span className="info-menu">
                    <div className="flex-column">
                        <button type="button" className="btn btn-light btn-circle btn-sm">
                            <a href = "#"><img src={customerservice} alt="Service" /></a>
                        </button>
                        <p>Customer Support</p>
                    </div>
                    <div className="flex-column">
                        <button type="button" className="btn btn-light btn-circle btn-sm">
                            <a href = "#"><img src={creditcard} alt="Credit" /></a>
                        </button>
                        <p>Secured Payment</p>
                    </div>
                    <div class="flex-column">
                        <button type="button" className="btn btn-light btn-circle btn-sm">
                            <a href = "#"><img src={deliverytruck} alt="Delivery" /></a>
                        </button>
                        <p>Free Home Delivery</p>
                    </div>
                    <div class="flex-column">
                        <button type="button" className="btn btn-light btn-circle btn-sm">
                            <a href = "#"><img src={deliverytruck} alt="Delivery" /></a>
                        </button>
                        <p>30 Day Reuters</p>
                    </div>
                </span>    
            </div>
        </div>    
    )
}

export default InfoBoxesSection

