import { useState } from "react";
import Header from "../../components/Home-layout/Header-layout/Header";
import Footer from "../../components/Home-layout/Footer/Footer";
import Frame from "../Picture/Frame 760 (1).png";
import "./profile-modules.css";

function Profile() {
  const [loggedIn, setLoggedIn] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoggedIn(true);
  }

  return (
    <div>
      <Header />
      <main>
        <div className="loginmain">
          <div>
            <img className="loginimg" src={Frame} alt="loginstate" />
          </div>
          <div className="logindetail">
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>
            <form onSubmit={handleSubmit}>
              <div className="loginemail">
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  required
                />
              </div>
              <div>
                <input type="password" placeholder="Password" required />
              </div>
              <div>
                <button type="submit">Log in</button>
                <span>Forget password?</span>
              </div>
              {loggedIn && <p role="status">You are logged in.</p>}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
