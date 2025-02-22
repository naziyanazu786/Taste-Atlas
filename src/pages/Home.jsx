import React from 'react'
import './Home.css' // We'll create this file next
import '../styles/shared.css'

const Home = () => {
  return (
    <div className="page-background">
      <div className="content-wrapper">
        <div className="home-container">
          {/* <div className="banner-container">
            <img src="/ban.jpg" className="img-fluid w-100 banner-image" alt="banner" />
          </div> */}
          
          <div className="container py-4">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card recipe-card">
                  <div className="card-img-wrapper">
                    <img src="/f5.jpg" className="card-img-top" alt="breakfast" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Breakfast Recipes 🍳🥞</h5>
                    <p className="card-text">Morning bites that energize your soul!</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card recipe-card">
                  <div className="card-img-wrapper">
                    <img src="/f6.jpg" className="card-img-top" alt="diet" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Diet Recipes 🥗🍏</h5>
                    <p className="card-text">Guilt-free flavors for a healthier you!</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card recipe-card">
                  <div className="card-img-wrapper">
                    <img src="/f3.jpg" className="card-img-top" alt="vegetarian" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Vegetarian Recipes 🥦🌿</h5>
                    <p className="card-text">Colorful, healthy, and simply irresistible!</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card recipe-card">
                  <div className="card-img-wrapper">
                    <img src="/f4.jpg" className="card-img-top" alt="non-vegetarian" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Non-Vegetarian Recipes 🍗🥩</h5>
                    <p className="card-text">Meat lovers, your feast starts here!</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card recipe-card">
                  <div className="card-img-wrapper">
                    <img src="/f2.jpg" className="card-img-top" alt="dessert" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Dessert Recipes 🍰🍩</h5>
                    <p className="card-text">Because life is too short to skip dessert!</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card recipe-card">
                  <div className="card-img-wrapper">
                    <img src="/f7.jpg" className="card-img-top" alt="fast food" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Fast Food Recipes 🍔🍟</h5>
                    <p className="card-text">Street food flavors, straight from your kitchen!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home