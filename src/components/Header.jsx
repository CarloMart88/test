import React from "react";

function Header() {
  return (
    <>
      <header className="py-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between">
                <img className="logo" src="../vite.svg" alt="Logo" />
                <h1>Booltrip</h1>
                <nav>
                  <ul className="list-unstyled d-flex">
                    <li className="ms-4">
                      <button className="my-button">Home</button>
                    </li>
                    <li className="ms-4">
                      <button className="my-button">Login</button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
