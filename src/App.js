import './App.scss';
import { useState } from 'react';
import {Switch, Route} from "react-router-dom"
import About from './JScomponents/About';
import Header from './JScomponents/Header';
import ProjectBig from './JScomponents/ProjectBig';
import Contact from './JScomponents/Contact';
import Portfolio from './JScomponents/Portfolio';

function App() {

  const [state] = useState(()=>({
    projectDetails:[
      {
          title: "SNIKERS",
          description: "(NOT FINISHED YET)This project is a full stack ecommerce store, inspired heavily by Nike. It will be built to be responsive for all screen sizes and will inlcude features such as user sign up and log in and also a payment method.",
          img: "/images/portfolio/desktop/snikers.png",
          type: "Interaction Design / Full Stack Development",
          techUsed: ["React", "SCSS MODULE", "React-router-dom", "Redux", "Node(Express)", "MongoDB(mongoose)"],
          liveLink: "https://snikers-by-henock-adane.vercel.app/"
      },
      {
          title: "Photosnap",
          description: "This project required me to build a fully responsive multi page website to the designs provided. I used React and css along with gsap.js for a menu animation",
          img: "/images/portfolio/desktop/photosnap.png",
          type: "Interaction Design / Front-End Developent",
          techUsed: ["React", "SCSS", "React-router-dom"],
          liveLink: "https://photosnap-r9wxa2kh3.vercel.app/"
      },
      {
          title: "Manage",
          description: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
          img: "/images/portfolio/desktop/image-portfolio-manage.jpg",
          type: "Interaction Design / Front-End Development",
          techUsed: ["HTML", "CSS", "ES6 JAVASCRIPT"],
          liveLink: "https://manage-landing-page-by-henock-adane.vercel.app/"
      },
      {
          title: "Bookmark",
          description: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
          img: "/images/portfolio/desktop/image-portfolio-bookmark.jpg",
          type: "Interaction Design / Front-End Development",
          techUsed: ["HTML", "CSS", "ES6 JAVASCRIPT"],
          liveLink: "https://book-mark-by-henock-adane.vercel.app/"
      },
      {
          title: "Insure",
          description: "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
          img: "/images/portfolio/desktop/image-portfolio-insure.jpg",
          type: "Interaction Design / Front-End Development",
          techUsed: ["HTML", "CSS", "ES6 JAVASCRIPT"],
          liveLink: "https://insure-landing-page-by-henock.vercel.app/"
      },
      {
          title: "Fylo",
          description: "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
          img: "/images/portfolio/desktop/image-portfolio-fylo.jpg",
          type: "Interaction Design / Front-End Development",
          techUsed: ["HTML", "CSS", "ES6 JAVASCRIPT"],
          liveLink:"https://flyo-landing-page-by-henock-adane.vercel.app/"
      }], app: "0px"
  }))

  // const socket = io.connect("http://localhost:3001/")
  

  return (
    <div className="App">


    <Header />
    









    <Switch>




    <Route exact={true} path="/portfolio" render={()=> <Portfolio projectDetails={state.projectDetails} />} />

    <Route exact={true} path="/" render={()=> <About/> } />




      {state.projectDetails.map(project => <Route exact={true} path={`/projects/${project.title}`} render={() => <ProjectBig 
      title={project.title} 
      img={project.img}
      liveLink={project.liveLink}
      description={project.description}
      techUsed={project.techUsed.map(tech => <li>{tech}</li>)}
      />

        } />
      )}


      <Route exact={true} path="/contact" render={()=> <Contact /> } />


    </Switch>

    {/* <Footer /> */}




      {/* <div className="menu" style={state.menu ? {width: "500px"} : {width: "0px"}}></div>

      <button onClick={toggleMenu}>{state.menu ? "CLOSE" : "OPEN"}</button> */}
      
    </div>
  );
}

export default App;
// width: "500px", maxWidth: "100%", display: "grid", gridTemplateColumns: "repeat(2, 1fr)"