import * as React from 'react'
function Work() {
  return (
    <div classNameName='container' style={{ height: "100vh"}}>
      <h2><b>WORK</b></h2>

      <i className="bi bi-quote">These experiences led to the skills...</i><hr /><br />
      <div className='container'style={{border: "2px solid #eee1ff", boxShadow:"2px 5px 10px #3F1651", borderRadius: "0px 50px", width: "60%", margin: "0 auto", background:"#eee1ff", paddingBottom:"2%"}}>
      <div className="container text-center work" style={{paddingLeft:"10%"}}>
        <div className="row">
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src={`${process.env.PUBLIC_URL}/pictures/todoapp.jpeg`} class="card-img-top" alt="..." />
              <div class="card-body">
                <h3 class="card-title">Todoapp</h3>
                <p class="card-text">I have made this in react using functional comoponents, with the help of bootstrap library. </p>
                <a href="https://github.com/Janhavi-alt-glitch/todoapp.git" class="btn btn-primary">Check the code base</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src={`${process.env.PUBLIC_URL}/pictures/converter.jpeg`} class="card-img-top" alt="..." />
              <div class="card-body">
                <h3 class="card-title">Converter</h3>
                <p class="card-text">This is yet again another demonstration of my react and bootstrap skills.</p>
                <a href=".." class="btn btn-primary">Check the code base</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src={`${process.env.PUBLIC_URL}/pictures/flipkartclone.jpeg`} class="card-img-top" alt="..." />
              <div class="card-body">
                <h3 class="card-title">Flipkartclone</h3>
                <p class="card-text">It's just the layout of flipkart that I have clonned with the help of html, css, and bootsrtap.</p>
                <a href="https://github.com/Janhavi-alt-glitch/Tutorial/blob/master/Assignments/flipkart.html" class="btn btn-primary">Check the code base</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src={`${process.env.PUBLIC_URL}/pictures/googlenews.jpeg`} class="card-img-top" alt="..." />
              <div class="card-body">
                <h3 class="card-title">Googlenews clone</h3>
                <p class="card-text">This I have made on the initial stage of my learning, with pure HTML, and CSS.</p>
                <a href="https://github.com/Janhavi-alt-glitch/Tutorial/blob/master/Assignments/news.html" class="btn btn-primary">Check the code base</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>



  );
}

export default Work