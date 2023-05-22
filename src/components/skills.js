import * as React from 'react'
function Skills() {
  return (
    <div className='container ' style={{ paddingTop: "30px", height: "100vh" }}>
      
      <h2><b>Key Skills</b></h2>
      
      <i className="bi bi-quote">I know what I do...</i><hr/><br/>
      
      <div className="card progress " style={{ height: "29px" }}>
        <div className="card-body progress-bar" style={{ width: "90%", backgroundColor: "#3F1651"}}>
         HTML5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  90%
        </div>
      </div>

      <div className="card progress " style={{ height: "29px" }}>
        <div className="card-body progress-bar" style={{ width: "85%", backgroundColor: "#3F1651" }}>
          CSS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 85%
        </div>
      </div>

      <div className="card progress " style={{ height: "29px" }}><span></span>
        <div className="card-body progress-bar" style={{ width: "70%", backgroundColor: "#3F1651" }}>
          Bootstrap 5 framework &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 70%
        </div>
      </div>

      <div className="card progress " style={{ height: "29px" }}>
        <div className="card-body progress-bar" style={{ width: "70%", backgroundColor: "#3F1651" }}>
          Javascript &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;70%
        </div>
      </div>

      <div className="card progress " style={{ height: "29px" }}>
        <div className="card-body progress-bar" style={{ width: "65%", backgroundColor: "#3F1651" }}>
          ReactJS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 65%
        </div>
      </div>
      <div class="flex-container" >
        <div >
          <img src="https://icon-library.com/images/html5-icon/html5-icon-13.jpg" alt="html" style={{ width: "80px" }} />
        </div>
        <div >
          <img src="https://cdn.cdnlogo.com/logos/c/18/css.svg" alt="CSS" style={{ width: "50px" }} />
        </div>
        <div >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="Bootstrap" style={{ width: "75px" }} />
        </div>
        <div >
          <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="js" style={{ width: "120px" }} />
        </div>
        <div >
          <img src="https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png" alt="react" style={{ width: "150px" }} />
        </div>

      </div>

    </div>

  );
}

export default Skills