import * as React from 'react'

import { Link } from 'react-router-dom'
function Navigation(){
    

    
    return(
   <div className="Container-fluid">
    

    <div className="dropdown">
  <button className="btn btn-outline-#653780 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"style={{ fontSize:"2em", position:"fixed",right:"0"}}>
  <i className="bi bi-list"  ></i>
  </button>
  <ul className="dropdown-menu" >
    <li><Link to="/" className="dropdown-item" type="button" aria-current="page"style={{color:"#653780"}}>Home</Link></li>
    <li><Link to='skills' className="dropdown-item" type="button" style={{color:"#653780"}}>Skills</Link ></li>
    <li><Link to='work' className="dropdown-item" type="button"style={{color:"#653780"}}>Work</Link ></li>
    <li><Link to='contact' className="dropdown-item" type="button"style={{color:"#653780"}}>Contact</Link></li>

  </ul>
</div>
    
    
   </div>
    );
   }
    
   export default Navigation

   //