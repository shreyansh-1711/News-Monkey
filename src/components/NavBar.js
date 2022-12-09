// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NavBar extends Component {
    // static propTypes = {}

    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">NEWS-Monkey </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      {/* <li className="nav-item"> <a className="nav-link" href="#">Link</a></li> */}

       <li className="nav-item"> <a className="nav-link" href="#">business</a></li>
       <li className="nav-item"> <a className="nav-link" href="#">entertainment</a></li>
       <li className="nav-item"> <a className="nav-link" href="#">general</a></li>
       <li className="nav-item"> <a className="nav-link" href="#">health</a></li>
       <li className="nav-item"> <a className="nav-link" href="#">science</a></li>
       <li className="nav-item"> <a className="nav-link" href="#">sports</a></li>
       <li className="nav-item"> <a className="nav-link" href="#">technology</a></li>
        
  
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
            </div>
        )
    }
}

export default NavBar