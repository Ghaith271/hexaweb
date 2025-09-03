import imgone from "./img/img1.jpg";
import imtwo from "./img/news-2.jpg";
import imgthree from "./img/news-3.jpg";
function Cards() {
  return (
    <div className="container-xl my-5">
      <div className="row g-4">
        {/* الكولوم الأول */}

        <div className="col-12 col-md-6 col-lg-4 my-5 position-relative parent">
          <img src={imgone} alt="" className="w-100 d-block rounded" />

          {/*1 الكرت */}
          <div
            className="card-hover card position-absolute border-0 start-50 px-4 pe-4 translate-middle-x"
            style={{
              bottom: "-17%",
              width: "85%",
              clipPath: "polygon(0 10%, 100% 0%, 100% 100%, 0% 100%)",
              overflow: "visible",
            }}
          >
            <div className="card-body">
              <p className="text-muted fs-6 mb-2 info-text mt-3">
                <i className="bi bi-calendar-fill me-3"> September 12 , 2019</i>
                <i className="bi bi-person-fill"> Admin</i>
              </p>

              <h1 className="fs-5 fw-bolder mt-3 title-text">
                Regional Manager & limited time management.
              </h1>

              <p className="fs-6 text-light new-text">
               Regional Manager & limited time management.
              </p>
            </div>
          </div>

          <button
            className="btn new-button rounded-0 position-absolute start-50 translate-middle-x"
            style={{ bottom: "-80px" }}
          >
            Load more
          </button>
        </div>

        {/* الكولوم التاني */}

        <div className="col-12 col-md-6 col-lg-4 my-5 position-relative ">
          <img src={imtwo} alt="" className="w-100 d-block rounded" />

          {/*2 الكرت */}
          <div
            className="carddd card position-absolute border-0 start-50 px-4 pe-4 translate-middle-x"
            style={{
              bottom: "-17%",
              width: "85%",
              clipPath: "polygon(0 10%, 100% 0%, 100% 100%, 0% 100%)",
              overflow: "visible",
            }}
          >
            <div className="card-body">
             

              <h1 className="fs-5 text-light fw-bolder mt-3 ">
                Regional Manager & limited time management.
              </h1>

              <p className="fs-6 text-light ttext">
                Regional Manager & limited time management.
              </p>
            </div>
          </div>

          <button
            className="btn btn-dark py-3 px-4 rounded-0 position-absolute start-50 translate-middle-x"
            style={{ bottom: "-80px" }}
          >
            Load more
          </button>
        </div>

        {/* الكولوم التالت */}

        <div className="col-12 col-md-6 col-lg-4 my-5 position-relative parent">
          <img src={imgthree} alt="" className="w-100 d-block rounded" />

          {/*3 الكرت */}
          <div
            className="card-hover card position-absolute border-0 start-50 px-4 pe-4 translate-middle-x"
            style={{
              bottom: "-17%",
              width: "85%",
              clipPath: "polygon(0 10%, 100% 0%, 100% 100%, 0% 100%)",
              overflow: "visible",
            }}
          >
            <div className="card-body">
              <p className="text-muted fs-6  mb-2 info-text mt-3">
                <i className="bi bi-calendar-fill me-3"> September 12 , 2019</i>
                <i className="bi bi-person-fill"> Admin</i>
              </p>

              <h1 className="fs-5 fw-bolder mt-3 title-text">
                Regional Manager & limited time management.
              </h1>

              <p className="fs-6 text-light new-text">
               Regional Manager & limited time management.
              </p>
            </div>
          </div>

          <button
            className="btn new-button rounded-0 position-absolute start-50 translate-middle-x"
            style={{ bottom: "-80px" }}
          >
            Load more
          </button>
        </div>

        {/* الكولوم الرابع */}

        <div className="col-12 col-md-6 col-lg-4 my-5 position-relative parent">
          <img src={imgone} alt="" className="w-100 d-block rounded" />

          {/*4 الكرت */}
          <div
            className="card-hover card position-absolute border-0 start-50 px-4 pe-4 translate-middle-x"
            style={{
              bottom: "-17%",
              width: "85%",
              clipPath: "polygon(0 10%, 100% 0%, 100% 100%, 0% 100%)",
              overflow: "visible",
            }}
          >
            <div className="card-body">
              <p className="text-muted fs-6 mb-2 info-text mt-3">
                <i className="bi bi-calendar-fill me-3"> September 12 , 2019</i>
                <i className="bi bi-person-fill"> Admin</i>
              </p>

              <h1 className="fs-5 fw-bolder mt-3 title-text">
                Regional Manager & limited time management.
              </h1>

              <p className="fs-6 text-light new-text">
              Regional Manager & limited time management.
              </p>
            </div>
          </div>

          <button
            className="btn new-button rounded-0 position-absolute start-50 translate-middle-x"
            style={{ bottom: "-80px" }}
          >
            Load more
          </button>
        </div>

        {/* الكولوم الخامس */}

        <div className="col-12 col-md-6 col-lg-4 my-5 position-relative parent">
          <img src={imtwo} alt="" className="w-100 d-block rounded" />

          {/*5 الكرت */}
          <div
            className="card-hover card position-absolute border-0 start-50 px-4 pe-4 translate-middle-x"
            style={{
              bottom: "-17%",
              width: "85%",
              clipPath: "polygon(0 10%, 100% 0%, 100% 100%, 0% 100%)",
              overflow: "visible",
            }}
          >
            <div className="card-body">
              <p className="text-muted fs-6 mb-2 info-text mt-3">
                <i className="bi bi-calendar-fill me-3"> September 12 , 2019</i>
                <i className="bi bi-person-fill"> Admin</i>
              </p>

              <h1 className="fs-5 fw-bolder mt-3 title-text">
                Regional Manager & limited time management.
              </h1>

              <p className="fs-6 text-light new-text">
               Regional Manager & limited time management.
              </p>
            </div>
          </div>

          <button
            className="btn new-button rounded-0 position-absolute start-50 translate-middle-x"
            style={{ bottom: "-80px" }}
          >
            Load more
          </button>
        </div>

        {/* الكولوم السادس */}

        <div className="col-12 col-md-6 col-lg-4 my-5 position-relative parent">
          <img src={imgthree} alt="" className="w-100 d-block rounded" />

          {/*6 الكرت */}
          <div
            className="card-hover card position-absolute border-0 start-50 px-4 pe-4 translate-middle-x"
            style={{
              bottom: "-17%",
              width: "85%",
              clipPath: "polygon(0 10%, 100% 0%, 100% 100%, 0% 100%)",
              overflow: "visible",
            }}
          >
            <div className="card-body">
              <p className="text-muted fs-6 mb-2 info-text mt-3">
                <i className="bi bi-calendar-fill me-3"> September 12 , 2019</i>
                <i className="bi bi-person-fill"> Admin</i>
              </p>

              <h1 className="fs-5 fw-bolder mt-3 title-text">
                Regional Manager & limited time management.
              </h1>

              <p className="fs-6 text-light new-text">
             Regional Manager & limited time management.
              </p>
            </div>
          </div>

          <button
            className="btn new-button rounded-0 position-absolute start-50 translate-middle-x"
            style={{ bottom: "-80px" }}
          >
            Load more
          </button>
        </div>
      </div>
    </div>




  );
}

export default Cards;
