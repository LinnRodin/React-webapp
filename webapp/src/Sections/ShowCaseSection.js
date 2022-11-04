import React from 'react'


const ShowCaseSection = () => {
  return (
    <section className="showcase">
            <div className="container">
                <div className="showcase-content">  
                    <div><img src={'https://win22imgstorage.blob.core.windows.net/images/showcase-img-1.png'} className="_img-left" alt="female"/></div>
                        <div><h1><strong>SALE UP To 50% off</strong></h1>
                            <p>Online shopping free home delivery over $100</p>
                            <div className="general_button">
                            <a href = "#"><button type= "button" className="btn special_button">SHOP NOW</button></a>
                            </div>
                        </div>
                    <div><img src={'https://win22imgstorage.blob.core.windows.net/images/showcase-img-2.png'} className="_img-right" alt="male"/></div>
                </div>
            </div>        
        </section>
  )
}

export default ShowCaseSection




