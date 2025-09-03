import { useRef } from "react";
import one from "./img/15.png";
import two from "./img/16.png";
import three from "./img/17.png";
import fore from "./img/18 (1).png";

function Carousel() {
  const sliderRef = useRef(null);
  const cardWidth = 380; 

 
  const handleScrollEnd = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const index = Math.round(scrollLeft / cardWidth); 
    const newScrollLeft = index * cardWidth;

    sliderRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };
  

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <div className="carousel-container overflow-hidden">
            <div
              ref={sliderRef}
              className="cards-wrapper d-flex"
              style={{
                overflowX: "auto",
                scrollBehavior: "smooth",
                scrollbarWidth: "none",
              }}
              onMouseUp={handleScrollEnd}
              onTouchEnd={handleScrollEnd}
            >
             
              <style>
                {`
                  .cards-wrapper::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>

              <div className="card bg-white  border-0 flex-shrink-0" style={{ width: "270px", marginRight: "10px" }}>
                <img src={one} alt="Card 1" />
              </div>
              <div className="card bg-white border-0 flex-shrink-0" style={{ width: "270px", marginRight: "10px" }}>
                <img src={two} alt="Card 2" />
              </div>
              <div className="card bg-white border-0 flex-shrink-0" style={{ width: "270px", marginRight: "10px" }}>
                <img src={three} alt="Card 3" />
              </div>
              <div className="card bg-white border-0 flex-shrink-0" style={{ width: "270px", marginRight: "10px" }}>
                <img src={fore} alt="Card 4" />
              </div>
              <div className="card bg-white border-0 flex-shrink-0" style={{ width: "270px", marginRight: "10px" }}>
                <img src={one} alt="Card 5" />
              </div>
              <div className="card bg-white border-0 flex-shrink-0" style={{ width: "270px", marginRight: "10px" }}>
                <img src={two} alt="Card 6" />
              </div>
              <div className="card bg-white border-0 flex-shrink-0" style={{ width: "270px", marginRight: "10px" }}>
                <img src={three} alt="Card 7" />
              </div>
              <div className="card bg-white border-0 flex-shrink-0" style={{ width: "270px", marginRight: "10px" }}>
                <img src={fore} alt="Card 8" />
              </div>
              <div className="card bg-white border-0 flex-shrink-0" style={{ width: "270px", marginRight: "10px" }}>
                <img src={one} alt="Card 9" />
              </div>
              <div className="card bg-white border-0 flex-shrink-0" style={{ width: "270px", marginRight: "10px" }}>
                <img src={two} alt="Card 10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;