import React from "react";
function Card(props) {
  return (    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {props.futures.title}
            </h5>
            <h6 className="card-price text-center">
              ${props.futures.price}/month
            </h6>
            <hr />
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {props.futures.user}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                5GB Storage
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Unlimited Public Projects 
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Community Access
              </li>
              <li className={props.futures.privateProjects[1]}>
                <span className="fa-li">
                  <i className={props.futures.privateProjects[2]}></i>
                </span>
                {props.futures.privateProjects[0]}
              </li>
              <li className={props.futures.phoneSupport[1]}>
                <span className="fa-li">
                  <i className={props.futures.phoneSupport[2]}></i>
                </span>
                {props.futures.phoneSupport[0]}
              </li>
              <li className={props.futures.subdomain[1]}>
                <span className="fa-li">
                  <i className={props.futures.subdomain[2]}></i>
                </span>
                {props.futures.subdomain[0]}
              </li>
              <li className={props.futures.statusReports[1]}>
                <span className="fa-li">
                  <i className={props.futures.statusReports[2]}></i>
                </span>
                {props.futures.statusReports[0]}
              </li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
