import React from "react";

const Footer = props => {
  return (
    <footer
      style={{ color: "#ccc" }}
      className="page-footer font-small bg-dark py-4 mt-5"
    >
      <div className="container text-center text-md-left mt-5">
        <div className="row mt-3 dark-grey-text">
          <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
            <h6 className="text-uppercase font-weight-bold">About</h6>
            <hr
              className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px;" }}
            />
            <p>
              This site provides attandance visulization that student usually
              see in the form of numbers.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Products</h6>
            <hr
              className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px;" }}
            />
            <p>
              <a className="dark-grey-text" href="#!">
                MDBootstrap
              </a>
            </p>
            <p>
              <a className="dark-grey-text" href="#!">
                MDWordPress
              </a>
            </p>
            <p>
              <a className="dark-grey-text" href="#!">
                BrandFlow
              </a>
            </p>
            <p>
              <a className="dark-grey-text" href="#!">
                Bootstrap Angular
              </a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
            <hr
              className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px;" }}
            />
            <p>
              <a className="dark-grey-text" href="#!">
                Your Account
              </a>
            </p>
            <p>
              <a className="dark-grey-text" href="#!">
                Become an Affiliate
              </a>
            </p>
            <p>
              <a className="dark-grey-text" href="#!">
                Shipping Rates
              </a>
            </p>
            <p>
              <a className="dark-grey-text" href="#!">
                Help
              </a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr
              className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px;" }}
            />
            <p>
              <i className="fa fa-address-book fa-lg mr-3"></i> Muet Hostels,
              Jamshoro, PK
            </p>
            <p>
              <i className="fa fa-github fa-lg mr-3"></i>{" "}
              <a href="https://github.com/Mohammad-Bilal-Bhatti">
                Mohammad-Bilal-Bhatti
              </a>
            </p>
            <p>
              <i className="fa fa-linkedin fa-lg mr-3"></i>{" "}
              <a href="https://www.linkedin.com/in/bilal-bhatti-335390134/">
                Linked-In
              </a>
            </p>
            <p>
              <i className="fa fa-facebook-f fa-lg mr-3"></i>{" "}
              <a href="https://www.facebook.com/i.am.bilal.bhatti">Facebook</a>
            </p>
            <p>
              <i className="fa fa-google fa-lg mr-3"></i>{" "}
              dev.bilal.bhatti@gmail.com
            </p>
            <p>
              <i className="fa fa-phone fa-lg mr-3"></i> +92-3069524951
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-3">
        Coded with <span className="fa fa-heart text-danger"></span> using{" "}
        <strong className="text-danger">Bootstraps</strong> and{" "}
        <strong className="text-info">Font Awesome</strong>{" "}
      </div>
    </footer>
  );
};

export default Footer;
