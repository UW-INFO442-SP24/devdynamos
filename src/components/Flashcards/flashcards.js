import React from "react";
import "./flashcards.css";

function Flashcards() {
    return (
    <div>
    <h2>Need to brush up on your knowledge? Try these flashcards for more specific information</h2>
    <div className="container">
        <div className="row">
          {/* Recyclable Items */}
          <div className="col-sm-4">
            <div className="card card-flip">
              <div className="card-front">
                <div className="card-body">
                  <h3 className="card-title">Recyclable Items</h3>
                </div>
              </div>
              <div className="card-back bg-white">
                <div className="card-body text-primary">
                  <h3 className="card-title">Items:</h3>
                  <p className="card-text">Glass, metal (aluminum cans, foil, or tin cans), paper/cardboard, plastic</p>
                </div>
              </div>
            </div>
          </div>
          {/* Items that cannot be recycled */}
          <div className="col-sm-4">
            <div className="card card-flip">
              <div className="card-front text-white bg-danger">
                <div className="card-body">
                  <h3 className="card-title">Non-Recyclable Items</h3>
                </div>
              </div>
              <div className="card-back bg-white">
                <div className="card-body text-danger">
                  <h3 className="card-title">Items:</h3>
                  <p className="card-text">Broken glass, aerosol cans, food-soiled paper, paper with plastic coating, plastic wrap or bags, lids smaller than 3” in diameter</p>
                </div>
              </div>
            </div>
          </div>
          {/* Compostable Items */}
          <div className="col-sm-4">
            <div className="card card-flip">
              <div className="card-front text-white bg-success">
                <div className="card-body">
                  <h3 className="card-title">Compostable Items</h3>
                </div>
              </div>
              <div className="card-back bg-white">
                <div className="card-body text-success">
                  <h3 className="card-title">Items:</h3>
                  <p className="card-text">Food waste (meat, food scraps, coffee grounds, paper napkins, paper takeout cartons without plastic)</p>
                </div>
              </div>
            </div>
          </div>
          {/* Non-Compostable Items */}
          <div className="col-sm-4">
            <div className="card card-flip">
              <div className="card-front text-white bg-warning">
                <div className="card-body">
                  <h3 className="card-title">Non Compostable Items</h3>
                </div>
              </div>
              <div className="card-back bg-dark text-white">
                <div className="card-body">
                  <h3 className="card-title">Items:</h3>
                  <p className="card-text">Liquids, styrofoam, grease, hazardous waste</p>
                </div>
              </div>
            </div>
          </div>
          {/* Aerosol Cans */}
          <div className="col-sm-4">
            <div className="card card-flip">
              <div className="card-front text-white bg-secondary">
                <div className="card-body">
                  <h3 className="card-title">Aerosol Cans</h3>
                </div>
              </div>
              <div className="card-back bg-white">
                <div className="card-body text-secondary">
                  <h3 className="card-title">Disposal:</h3>
                  <p className="card-text">Pressurized/not empty: Hazardous waste<br />Not pressurized/empty: Write “empty” on bottle and place in garbage</p>
                </div>
              </div>
            </div>
          </div>
          {/* Batteries */}
          <div className="col-sm-4">
            <div className="card card-flip">
              <div className="card-front text-white bg-info">
                <div className="card-body">
                  <h3 className="card-title">Batteries</h3>
                </div>
              </div>
              <div className="card-back bg-white">
                <div className="card-body text-info">
                  <h3 className="card-title">Disposal:</h3>
                  <p className="card-text">Small batteries (less than 5 lbs) can be placed in eMedia bins on campus</p>
                </div>
              </div>
            </div>
          </div>
          {/* Freezer Gel Packs */}
          <div className="col-sm-4">
            <div className="card card-flip">
              <div className="card-front text-white bg-primary">
                <div className="card-body">
                  <h3 className="card-title">Freezer Gel Packs</h3>
                </div>
              </div>
              <div className="card-back bg-white">
                <div className="card-body text-primary">
                  <h3 className="card-title">Disposal:</h3>
                  <p className="card-text">Need to be disposed of in garbage (cannot be recycled in regular recycling waste stream)</p>
                </div>
              </div>
            </div>
          </div>
          {/* Light Bulbs */}
          <div className="col-sm-4">
            <div className="card card-flip">
              <div className="card-front text-white bg-warning">
                <div className="card-body">
                  <h3 className="card-title">Light Bulbs</h3>
                </div>
              </div>
              <div className="card-back bg-dark text-white">
                <div className="card-body">
                  <h3 className="card-title">Disposal:</h3>
                  <p className="card-text">Non-mercury containing lamps and bulbs can be recycled on campus through Capital Projects</p>
                </div>
              </div>
            </div>
          </div>
          {/* Oil and Grease */}
          <div className="col-sm-4">
            <div className="card card-flip">
              <div className="card-front text-white bg-success">
                <div className="card-body">
                  <h3 className="card-title">Oil and Grease</h3>
                </div>
              </div>
              <div className="card-back bg-white">
                <div className="card-body text-success">
                  <h3 className="card-title">Disposal:</h3>
                  <p className="card-text">Wipe grease off with a paper towel before throwing it away or pour oils into a jar and throw it away once it has hardened</p>
                </div>
              </div>
            </div>
          </div>
          {/* Paint */}
          <div className="col-sm-4">
            <div className="card card-flip">
              <div className="card-front text-white bg-danger">
                <div className="card-body">
                  <h3 className="card-title">Paint</h3>
                </div>
              </div>
              <div className="card-back bg-white">
                <div className="card-body text-danger">
                  <h3 className="card-title">Disposal:</h3>
                  <p className="card-text">Empty cans of latex paint should be left open to dry then placed in a garbage dumpster<br />Small amounts of latex paint should be mixed with kitty litter/vermiculite then placed in garbage dumpster<br />Oil-based paints require the use of hazardous solvents and need to be disposed of as hazardous waste</p>
                </div>
              </div>
            </div>
          </div>
          {/* Styrofoam and Packing Peanuts */}
          <div className="col-sm-4">
            <div className="card card-flip">
              <div className="card-front text-white bg-secondary">
                <div className="card-body">
                  <h3 className="card-title">Styrofoam & Packing Peanuts</h3>
                </div>
              </div>
              <div className="card-back bg-white">
                <div className="card-body text-secondary">
                  <h3 className="card-title">Recycling:</h3>
                  <p className="card-text">Styrofoam should be disposed of in the garbage<br />Packing peanuts can be reused or disposed of in the garbage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Flashcards;