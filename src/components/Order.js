import React from 'react'

export default function Order() {
  return (
    <div>
      <h1 className="orderTitle">Website Order</h1>
      <div className="cards">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
      </div>
      <div className="disclamerBtn">
        <p className="center">
          Discplamer: The orders are from fiverr website - you can order my gig
          from there when you click on Go order!
        </p>
        <button className="orderBtn">
          <a href="google.com" className="orderBtnColor">
            Go Order!
          </a>
        </button>
      </div>
      <div style={{ backgroundColor: '#ecc8af' }}>
        <h1 className="orderTitle">QA Testing Order</h1>
        <p className="center">
          Both orders also include Bugs documentation , video shots,screen
          shots,1 revision
        </p>
        <div className="cards">
          <div className="card">
            <h3>Testing Website and Mobile apps 1 day delivery</h3>
            <p>Test include:</p>
            <p>Functionality test</p>
            <p>Usability Test</p>
            <p>Regression testing</p>
            <p>Sanity testing</p>
            <p>Compatibility test</p>
            <h3>Cost : Only 10$</h3>
          </div>
          <div className="card">
            <h3>Extra Fast Delivery in 5 hours</h3>
            <p>Test include:</p>
            <p>Functionality test</p>
            <p>Usability Test</p>
            <p>Regression testing</p>
            <p>Sanity testing</p>
            <p>Compatibility test</p>
            <h3>Cost : Only for 15$</h3>
          </div>
          <div className="disclamerBtn">
            <p>
              Discplamer: The orders are from fiverr website - you can order my
              gig from there when you click on Go order!
            </p>
            <button className="orderBtn">
              <a href="https://bit.ly/2UXF4jC" className="orderBtnColor">
                Go Order!
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
