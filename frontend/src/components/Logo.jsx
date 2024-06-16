import React from 'react';
import './logo.css';
function logo(){
    const handleToggleSideBar= () => {
        document.body.classList.toggle('toggle-sidebar');
    };

     return (
         <div className="d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-items-center">
            {/*<img src=".\src\images\user.png" alt=""/>*/}
            <span className="d-none d-lg-block">Sahayogi</span>
            </a>
            <i
                className="bi bi-list toggle-sidebar-btn"
                onClick={handleToggleSideBar}
            ></i>
         </div>
         );
     }
export default logo;
