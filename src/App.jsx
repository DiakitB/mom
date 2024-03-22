import About from "./component/About";
import Contact from "./component/Contact";
import NavLayout from "./component/NavLayout";
import Projects from "./component/Projects";
import Skills from "./component/Skill";
export default function App() {
  return (
    <main className="tex-gray400 bg-gray-900 body-font">
      <NavLayout />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
