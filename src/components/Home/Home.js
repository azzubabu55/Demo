import React from 'react'

const Home = () => {
    
  return (
    <div>
        {/* <header>
            <div id="menu" className="fas fa-bars"></div>
    
        <nav className="navbar">
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#education">education</a>
            <a href="#portfolio">portfolio</a>
            <a href="#contact">contact</a>
        </nav>
        <a href="Asif.cv-3.pdf" download className="btn"><i className="fas fa-file-pdf-o" aria-hidden="true"></i>Download PDF</a>
       
    
        <div className="scroll-bar"></div>
    
    </header> */}
    
    
    <section className="home" id="home">
    
        <div className="content">
            <h3 className="hello">hi, there!</h3>
            <h3 className="name">i'm <span>Asif Siddquei</span></h3>
            <p>Proficient in JAVA and SQL. Passionate about implementing and launching new projects. Looking to start the career as an entry-level software developer with a reputed firm driven by technology.</p>
            <a href="#about" className="btn">about me</a>
        </div>
    
    </section>
    
   
    
    <section className="about" id="about">
    
        <h1 className="heading">about me</h1>
    
        <div className="row">
    
            <div className="progress-bar">
    
                <h3 className="title">my skills</h3>
    
                <div className="progress">
                    <h3>Core Java <span>80%</span></h3>
                    <div className="bar"><span></span></div>
                </div>
    
                <div className="progress">
                    <h3>HTML <span>75%</span></h3>
                    <div className="bar"><span></span></div>
                </div>
                <div className="progress">
                    <h3>CSS <span>60%</span></h3>
                    <div className="bar"><span></span></div>
                </div>
                
    
            </div>
    
            <div className="presonal-info">
    
                <h3 className="title">presonal info</h3>
    
                <div className="box-container">
    
                    <div className="box">
                        <h3> <span> full name : </span> Asif Siddquei </h3>
                        <h3> <span> age : </span> 24 years </h3>
                        <h3> <span> email : </span> siddqueiasif@gmail.com </h3>
                        <h3> <span> phone : </span> 9369305885 </h3>
                    </div>
                    <div className="box">
                        <h3> <span> experience : </span> 6 Month's </h3>
                        <h3> <span> address : </span> Khureji New Delhi </h3>
                        <h3> <span> language : </span> hindi, english,urdu </h3>
                       
                    </div>
    
                </div>
    
            </div>
    
        </div>
    
    </section>
    
    
    <section className="education" id="education">
    
        <h1 className="heading"> education and experience </h1>
    
        <div className="row">
    
            <div className="column">
    
                <h3 className="title">my education</h3>
    
                <div className="box">
                    <div className="year"> <i className="fas fa-calendar"></i>2019 - 2021 </div>
                    <h3>MCA - LBSIMDS (AKTU), Lucknow</h3>
                </div>
                <div className="box">
                    <div className="year"> <i className="fas fa-calendar"></i> 2016 - 2019 </div>
                    <h3>BCA - Integral University, Lucknow</h3>
                </div>
                <div className="box">
                    <div className="year"> <i className="fas fa-calendar"></i> 2013 - 2015 </div>
                    <h3>Intermediate - S.S.I.C. Siddharth Nagar</h3>
                </div>
                <div className="box">
                    <div className="year"> <i className="fas fa-calendar"></i> 2013 </div>
                    <h3>High School - S.S.I.C. Siddharth Nagar</h3>
                </div>
            </div>
    
            <div className="column">
    
                <h3 className="title">my experience</h3>
                <div className="box">
                    <div className="year"> <i className="fas fa-calendar"></i>Dec 2021 – May 2022 </div>
                    <h3>ZN Info Tech Pvt Ltd. (Lucknow) – JAVA Technology Intern</h3>
                    <h3 className="title">Project name : <span>Friend Circle</span></h3>
                    <h3 className="title">Role : <span>Design and Development</span></h3>
                    <h3 className="title">Environment : <span>JAVA, JDBC, HTML, CSS, SQL by Using NetBeans Software</span></h3>
                    <h3 className="title">Database : Wamp Sever(phpMyAdmin)</h3>
                    <h3 className="title">Description : <span>Friend Circle is a social networking app designed to help you connect and stay in touch with your closest friends. With a user-friendly interface and a range of features, Friend Circle makes it easy to organize group chats, plan events, and share memories with your inner circle.</span></h3>
    
                    
                </div>
                </div> 
            </div>
    
        
    
    </section>
    
   
    
    <section className="portfolio" id="portfolio">
    
        <h1 className="heading">my portfolio</h1>
    
        <div className="box-container">
    
            <a href="#" className="box">
                <img src="images/1304.jpg" alt="" />
                <div className="info">Friend Circle</div>
            </a>
    
            <a href="#" className="box">
                <img src="images/Registration.png" alt="" /> 
                <div className="info">Registration and Login</div>
            </a>
    
            <a href="#" className="box">
                <img src="images/66982lms.jpg" alt=""/>
                <div className="info">Library Managemnt</div>
            </a>
    
        </div>
    
    </section>
    
    
    <section className="contact" id="contact">
    
        <h1 className="heading">contact me</h1>
    
        <div className="row">
    
            <form action="">
    
                <div className="inputBox">
                    <input type="text" required />
                    <label>name</label>
                </div>
    
                <div className="inputBox">
                    <input type="email" required />
                    <label>email</label>
                </div>
    
                <div className="inputBox">
                    <input type="number" required />
                    <label>phone</label>
                </div>
    
                <div className="inputBox">
                    <input type="text" required />
                    <label>subject</label>
                </div>
    
                <div className="inputBox">
                    <textarea required name="" id="" cols="30" rows="10"></textarea>
                    <label>message</label>
                </div>
    
                <input type="submit" value="send message" className="btn"/>
    
            </form>
    
            <div className="image">
                <img src="images/contact-img.svg" alt="" />
            </div>
    
        </div>
    
    </section>
    
   
    
    <div className="footer">
        created by <a href="">Asif Siddquei</a> | all rights reserved!
    </div>
    </div>
    
    
    
   
    
    
  )
}

export default Home;