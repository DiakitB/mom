import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

function HomePage() {
  return (
    <div className="  sm:h-[800px] grid grid-rows-[auto_1fr_auto ">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default HomePage;
