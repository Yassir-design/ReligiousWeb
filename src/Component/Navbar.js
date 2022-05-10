import React from 'react'
import './Navbar.css'
import '../App.css';
function Navbar() {
  return (
    <div>


<nav className='mynav'>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">DesignX</label>
      <ul className='mylist'>
        <li className='mylistitem'><a class="active mylinks" href="#">Home</a></li>
        <li className='mylistitem'><a className='mylinks' href="#">About</a></li>
        <li className='mylistitem'><a className='mylinks' href="#">Services</a></li>
        <li className='mylistitem'><a className='mylinks' href="#">Contact</a></li>
        <li className='mylistitem'><a className='mylinks' href="#">Feedback</a></li>
        <div className='mylistitem secthing'>
        <li className='mylistitem '> <div className="myboxx">LOG IN</div> </li>
        <li className='mylistitem'>  <div className="myboxx tt">SIGN</div> </li>
        </div>
        <hr />
      </ul>
      
    </nav>




    </div>
  )
}

export default Navbar