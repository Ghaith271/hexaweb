function Buttons() {
  return (
    <div className="container py-2">
      <div className="row justify-content-center mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <ul className="pagination pagination-lg">
            <li className="page-item active" >
              <a
                href="#"
                className="btnhover text-dark fw-bold page-link border-0 shadow-0 bg-light ms-3"
              >
                1
              </a>
            </li>
            <li className="page-item ">
              <a
                href="#"
                className=" text-dark fw-bold page-link border-0 btnhover shadow-0 bg-light ms-3"
              >
                2
              </a>
            </li>
            <li className="page-item ">
              <a
                href="#"
                className="btnhover text-dark fw-bold page-link border-0 shadow-0 bg-light ms-3"
              >
            <span>&rsaquo;</span>  

              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Buttons;
