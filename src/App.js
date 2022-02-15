import "./App.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PlayerList from "./pages/main/PlayerList";
import TopNavBar from "./core-ui/TopNavBar";
import Footer from "./core-ui/Footer";
import logo from "./assets/images/spookify_sm.png";
import home_icon from "./assets/images/spookify_home.png";
import search_icon from "./assets/images/spookify_search.png";
import lib_icon from "./assets/images/spookify_lib.png";
import playlist_icon from "./assets/images/navPlaylist.png";

function App(props) {
  let listener = null
  const [scrollState, setScrollState] = useState("#121212")
  const state = useSelector(state => state.page);
  const dispatch = useDispatch();
  
  console.log("state", state);

  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 100) {
        if (scrollState !== "#000000") {
          setScrollState("#000000")
        }
      } else {
        if (scrollState !== "#121212") {
          setScrollState("#121212")
          
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])


  return (
    <>
      <div className="wrapper-container ">
        <div className="nav-bar ">
          <a href="#">
            <img src={logo} className="logo"></img>
          </a>
          <br />
          <br />

          <a className="navLink" href="#">
            <div className="linkContainer">
              <img className="linkIcon" src={home_icon} />
              Start
            </div>
          </a>

          <a className="navLink" href="#">
            <div className="linkContainer">
              <img className="linkIcon" src={search_icon} />
              Suchen
            </div>
          </a>
          <a className="navLink" href="#">
            <div className="linkContainer">
              <img className="linkIcon" src={lib_icon} />
              Bibliothek
            </div>
          </a>
          <br />
          <a className="navLink" href="#">
            <div className="linkContainer">
              <img className="linkIconPlaylist" src={playlist_icon} />
              Playlist erstellen
            </div>
          </a>
          <hr className="seperator"/>
          <br />
          <a className="playlistLink" href="#">Playlist 1</a>
        </div>
        <div className="main-container">
          <div className="top-nav " style={{backgroundColor: `${scrollState}`}}>
            <TopNavBar />
          </div>
          <div className="content-Container">
          
          {state.page === 1 && <PlayerList />}
          
          </div>

        </div>
      </div>
      <div className="footer-container ">
        <Footer />
      </div>
    </>
  );
}

export default App;
