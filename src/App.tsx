import React, { useEffect } from 'react';
import './App.css';
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contacts from './components/Contacts'
import GithubPages from './components/GithubPages'
import Modal from 'react-modal';
import {Resume} from './types'
import useGist from './helpers/useGist'

Modal.setAppElement('#root');

function App() {
  // const [json, setJson] = React.useState<Resume | null>(null)
  const [files, loading, error] = useGist<{'resume.json': Resume}>('https://api.github.com/gists/6c6d8fd8acdc22f184ca5832a8aa83fb')
  if(loading) return <div>fetching Json</div>
  if(error) return <div>{JSON.stringify(error)}</div>
  if(!files || typeof files !== 'object') return <div>files not populated</div>
  const json = files['resume.json']
  
  return (
    <body>

      {/* <!-- Header
   ================================================== --> */}
      <header id="home">

        <nav id="nav-wrap">

          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {json.basics.name}</h1>
            <h3>I'm a Gurugram based <span>software engineer</span>, <span> backend developer</span> and <span>full stack developer </span>.
              Currently working with Ciena. Let's <a className="smoothscroll" href="#about">start scrolling </a>
              and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul className="social">
              <li><a href="https://facebook.com/gautamits"><i className="fa fa-facebook"></i></a></li>
              <li><a href="https://twitter.com/gautamits"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://plus.google.com/+amitgautams"><i className="fa fa-google-plus"></i></a></li>
              <li><a href="https://linkedin.com/in/gautamits"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a href="#"><i className="fa fa-skype"></i></a></li>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>

      </header>


      {/* <!-- About Section
   ================================================== --> */}
      <section id="about">

        <div className="row">

          <div className="three columns">

            <img className="profile-pic" src="./images/profilepic.jpg" alt="" />

          </div>

          <div className="nine columns main-col">

            <h2>About Me</h2>

            <p>
              {json?.basics?.summary}
            </p>

            <Contacts basics={json.basics}/>

          </div>

        </div>

      </section>


      {/* <!-- Resume Section
   ================================================== --> */}
      <section id="resume">

      <Education education={json.education}/>

      <Experience experience={json.work}/>


        {/* <!-- Skills
      ----------------------------------------------- --> */}
        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>Being graduate from a college where coding is a culture I came to know some good coding. I learnt Java, C, C++, Python and Bash there. I also learnt some PHP, Javascript and mysql too. Didnt started git earlier which makes me sad. Good internet connection opened door to many resources including online training resorces. Heard about Linux first time here and at this time I have used all popular Linux operating systems had my fun around with them.
            </p>

            <div className="bars">

              <ul className="skills">
                <li><span className="bar-expand python"></span><em>Python</em></li>
                <li><span className="bar-expand c"></span><em>C</em></li>
                <li><span className="bar-expand cpp"></span><em>c++</em></li>
                <li><span className="bar-expand java"></span><em>Java</em></li>
                <li><span className="bar-expand php"></span><em>PHP</em></li>
                <li><span className="bar-expand javascript"></span><em>Javascript</em></li>
              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* <!-- Portfolio Section
   ================================================== --> */}
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
             <Projects />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Github hosted work.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
             <GithubPages/>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Call-To-Action Section
   ================================================== --> */}
      <section id="call-to-action">

        <div className="row">

          <div className="two columns header-col">

            <h1><span>Get Hosting.</span></h1>

          </div>

          <div className="seven columns">

            <h2><span className="lead">How's All This</span></h2>
            <p><span className="lead">So, what do you think? In case you want to contact me then keep scrolling. I am easy to reach.</span></p>

          </div>

          <div className="three columns action">



          </div>

        </div>

      </section>


      {/* <!-- footer
   ================================================== --> */}
      <footer>

        <div className="row">

          <div className="twelve columns">

            <ul className="social-links">
              <li><a href="https://facebook.com/gautamits"><i className="fa fa-facebook"></i></a></li>
              <li><a href="https://twitter.com/gautamits"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://plus.google.com/+amitgautams"><i className="fa fa-google-plus"></i></a></li>
              <li><a href="https://linkedin.com/in/gautamits"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a href="#"><i className="fa fa-skype"></i></a></li>
            </ul>



          </div>

          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>

        </div>

      </footer>

    </body>
  );
}

export default App;
