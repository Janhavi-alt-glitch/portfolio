import * as React from 'react'
function Home(){
 return(
<div className='container'style={{height:"100vh", paddingTop:"50px",width:"100vw", margin:"0 auto"}}>

    <img src="/pictures/profilepicture.png" alt="profile" style={{width:"250px", marginTop:"30px",marginLeft:"0"}}/>
     <div className='container'style={{paddingLeft:"33px"}}>
        <h5 style={{fontFamily:"Brush Script MT, cursive",fontSize:"3em",color:"#3F1651"}}>Janhavi Singh</h5>
        <p>I am a <span style={{ fontSize:"20px"}}><b>fullstack web Developer</b></span></p>
        <i class="bi bi-quote" style={{ fontSize:"30px"}}>Passionate to design web that feels right </i>
     </div>

</div>
 );
}
 
export default Home