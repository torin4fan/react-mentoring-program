import React from 'react';


const NavigationBar = () => (
  <div className="row">
    <nav className="navbar navbar-default">
      <a className="navbar-brand" href="/">To-do list</a>
      <div className="container-fluid">
        <form className="navbar-form navbar-right" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    </nav>
  </div>
);

export default NavigationBar;
