import { NavLink } from "react-router-dom";
import AboutMe from "./AboutMe";

function Main() {
  return (
    <>
      <div>
        <AboutMe />
      </div>
      <div className="px-3">
        <div className="flex gap-3 py-3 ">
          <NavLink
            className="sm:rounded-sm bg-blue-500 px-3 py-8 text-sm font-semibold uppercase tracking-wide text-green-50"
            to="/reactApp"
          >
            React Projects
          </NavLink>
          <p className="sm: text-sm drop-shadow-2xl border  p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            perspiciatis reprehenderit officia maiores nam provident, quod
            vitae. Saepe ab corporis, expedita quasi suscipit inventore
            accusamus debitis, quia nulla modi perspiciatis.
          </p>
        </div>
        <div className="flex gap-3 py-3 ">
          <NavLink
            className="sm:rounded-sm bg-blue-500 px-3 py-8 text-sm font-semibold uppercase tracking-wide text-green-50"
            to="/cSharpApp"
          >
            C # Projects
          </NavLink>
          <p className="sm: text-sm drop-shadow-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            perspiciatis reprehenderit officia maiores nam provident, quod
            vitae. Saepe ab corporis, expedita quasi suscipit inventore
            accusamus debitis, quia nulla modi perspiciatis.
          </p>
        </div>

        <div className="flex gap-3 py-3 ">
          <NavLink
            className="sm:rounded-sm bg-blue-500 px-3 py-8 text-sm font-semibold uppercase tracking-wide text-green-50"
            to="/reactApp"
          >
            NODE JS Projects
          </NavLink>
          <p className="sm: text-sm drop-shadow-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            perspiciatis reprehenderit officia maiores nam provident, quod
            vitae. Saepe ab corporis, expedita quasi suscipit inventore
            accusamus debitis, quia nulla modi perspiciatis.
          </p>
        </div>
        <div className="flex gap-3 py-3 ">
          <NavLink
            className="sm:rounded-sm bg-blue-500 px-3 py-8 text-sm font-semibold uppercase tracking-wide text-green-50"
            to="/reactApp"
          >
            CSS && HTML Projects
          </NavLink>
          <p className="sm: text-sm drop-shadow-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            perspiciatis reprehenderit officia maiores nam provident, quod
            vitae. Saepe ab corporis, expedita quasi suscipit inventore
            accusamus debitis, quia nulla modi perspiciatis.
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;
