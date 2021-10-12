import React from "react";
import Footer from "../Footer";

function Home() {
  return (
    <main>
      <div className="card-group">
        <div className="mb-3 mt-5 mx-auto" style={{ maxWidth: "90%" }}>
          <div className="row">
            <div className="col-md-2">
              <div className="card">
                <div className="card-body">
                  <img
                    className="profilepicture"
                    src="/imgs/profilepicture.jpg"
                    alt="Profile"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-xl">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">About Me</h1>
                  <p className="card-text text-responsive">
                    Hello everyone. Welcome to my portfolio. My name is Kevin
                    Kim and I am currently enrolled in DU's Bootcamp for
                    Full-Stack Development.
                    <br></br>
                    <br></br>I am a Colorado Native that debuted in Computer
                    Science at Metropolitan State University of Denver. I
                    graduated with a BA in Computer Science.
                    <br></br>
                    <br></br>I was a General Manager for a large beauty company
                    during college. Me and a friend created a start-up for
                    selling website designs to individuals and companies around
                    the Greater Denver Area.
                    <br></br>
                    <br></br>I made the decision to enroll in Denver
                    University's Bootcamp for Full-Stack Development to hone my
                    web application development skills. I needed more
                    experienced and credibility so I decided to take the leap to
                    enroll.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Home;
