import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ThreeCart from "./components/ThreeCart";
import This from "./components/This";
import Compony from "./components/Compony";
import Contact from "./components/Contact";
import MyProfile from "./components/MyProfile";
import Filtr from "./components/Filtr";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ThreeCart />
      <Filtr />
      <MyProfile />
      <This />
      <Compony />
      <Contact />
      <div className="h-[70px]"></div>
    </div>
  );
};

export default App;

// import React from "react";
// import { Route, Routes } from "react-router";
// import Home from "./pages/Home";
// import About from "./pages/About";

// function App() {
//   return (
//     <div>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { Link } from "react-scroll";
// import "./App.css";
// export default function App() {
//   return (
//     <div className="App">
//       <header className="nav">
//         <nav className="nav__container__actions">
//           <ul>
//             <li>
//               <Link activeClass="active" smooth spy to="about">
//                 ABOUT
//               </Link>
//             </li>
//             <li>
//               <Link activeClass="active" smooth spy to="projects">
//                 PROJECTS
//               </Link>
//             </li>
//             <li>
//               <Link activeClass="active" smooth spy to="blog">
//                 BLOG
//               </Link>
//             </li>
//             <li>
//               <Link activeClass="active" smooth spy to="contact">
//                 CONTACT ME
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <section id="about">ABOUT</section>
//       <section id="projects">PROJECTS</section>
//       <section id="blog">BLOG</section>
//       <section id="contact">CONTACT ME</section>
//     </div>
//   );
// }
