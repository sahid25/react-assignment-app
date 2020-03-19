import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faComments, faUserFriends, faBell } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="headerArea">
      <header>
        <div class="container">
          <div class="row text-center">
            <div class="col-md-12">
              <div>
                <ul>
                  <li><a href="#"> <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> </a></li>
                  <li><a href="#"> <FontAwesomeIcon icon={faComments}></FontAwesomeIcon> </a></li>
                  <li><a href="#"> <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon> </a></li>
                  <li><a href="#"> <FontAwesomeIcon icon={faBell}></FontAwesomeIcon> </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;