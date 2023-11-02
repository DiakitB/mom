import Footer from "./Footer";
import Header from "./Header";

function FirstApp() {
  return (
    <>
      <Header />
      <div className="md:grid grid-cols-2 gap-3 sm:flex bg-blue-500">
        <div className=" ">
          <img src="vanR.PNG" alt="IMAGE" className="" />
        </div>
        <div className="">
          <img src="vanR.PNG" alt="IMAGE" className="" />
        </div>
        <div className="">
          <img src="vanR.PNG" alt="IMAGE" className="" />
        </div>
        <div className="">
          <img src="vanR.PNG" alt="IMAGE" className="" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FirstApp;
