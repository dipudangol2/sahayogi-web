import React from 'react'

function NavNotice() {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">4</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have 4 new Notifications
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
                View all
            </span>
          </a>
        </li>
        <li>
            <hr className="dropdown-divider"/>
        </li>

        <li className="notification-item">
            <i className="bi bi-exclamation-circle text-success"></i>
            <div>
                <h4>Ramesh Khatri</h4>
                <p>Campaign:All Eyes On RAFAH</p>
                <p>Donated Amount:Nrs 5000</p>
            </div>
        </li>

        <li>
            <hr className="dropdown-divider"/>
        </li>

        <li className="notification-item">
            <i className="bi bi-x-circle text-danger"></i>
            <div>
           <h4>Plants Campaign has ended.</h4>
           <p>Expired Date:2024/06/16</p>
           <p>1 hr. ago</p>
        </div>
        </li>

        <li>
            <hr className="dropdown-divider"/>
        </li>

        <li className="notification-item">
            <i className="bi bi-check-circle text-success"></i>
            <div>
           <h4>Waste to Energy</h4>
           <p>Goal Reached.</p>
           <p>2 hrs. ago</p>
        </div>
        </li>
        
        <li>
            <hr className="dropdown-divider"/>
        </li>

        <li className="notification-item">
            <i className="bi bi-info-circle text-primary"></i>
        <div>
           <h4>Multiple Login Attempts</h4>
           <p>Harry Khadka</p>
           <p>Attempts Failed:4</p>
        </div> 
        </li>

        <li>
            <hr className="dropdown-divider"/>
        </li>
        <li className="dropdown-footer">
            <a href="#">Show all notifications</a>
        </li>
      </ul>
    </li>
        
);
}

export default NavNotice;