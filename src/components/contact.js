import * as React from 'react'
function Contact() {
    return (
        <div className='container' style={{ height: "100vh" }}>

            <h2>Have a question?</h2>
            
            <h4>Get in Touch!</h4>
            <i className="bi bi-quote">I would love to hear from you</i>

            <hr/><br/>
            <form action="" method='get'>
            <div className='container row' style={{ border: "2px solid #eee1ff", boxShadow:"2px 5px 10px #3F1651", borderRadius: "0px 50px", width: "60%", margin: "0 auto", background:"#eee1ff"}}>

                <div className='row'>
                    <div class="col-6" style={{ width: "90%", margin: "0 auto", padding: "10px" }}>
                        <label for="exampleFormControlInput1" class="form-label"><b>EMAIL</b></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email address" style={{ border: "2px solid #653780", textAlign: "center", opacity:"50%"}} required/>
                    </div>
                </div>
                <div className='row'>

                    <div class="col-6" style={{ width: "90%", margin: "0 auto", padding: "10px" }}>
                        <label for="exampleFormControlTextarea1" class="form-label"><b>MESSAGE</b></label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Please enter message for me here' style={{ border: "2px solid #653780", textAlign: "center", opacity:"50%" }}></textarea>
                    </div>
                </div>
                <div class="col-auto" >
                    <button type="submit" class="btn mb-3" style={{color:"whitesmoke",backgroundColor:"#3F1651",alignContent:"center",marginLeft:"190px", width:"90%"}}>SEND MESSAGE</button>
                </div>
               
            </div>
            </form>
            <div className='flex-container social'>
            <a href="https://www.linkedin.com/in/janhavi-singh-a080821b8"><i class="bi bi-linkedin"style={{color:" #653780", fontSize:"60px"}}></i></a>
            <a href="https://instagram.com/ivahnaj_21?igshid=OTk0YzhjMDVlZA=="><i class="bi bi-instagram"style={{color:" #653780", fontSize:"60px"}}></i></a>
            <a href="https://github.com/Janhavi-alt-glitch"><i class="bi bi-github"style={{color:" #653780", fontSize:"60px"}}></i></a>
        </div>
        
        </div>


    );
}

export default Contact