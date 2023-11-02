import Footer from "./Footer";
import Header from "./Header";

function SecondApp() {
  return (
    <>
      <Header />
      <p className="pt-24 pb-40 text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ea vel
        aliquam voluptates nihil error libero pariatur maiores? Consectetur
        incidunt accusamus reprehenderit animi iste alias magnam doloribus aut
        suscipit neque!
      </p>
      <div className="grid h-90 grid-rows-2 grid-cols-2 gap-x-0 gap-y-1  pt-[80px]">
        <div className="flex items-center justify-between gap-2 ">
          <img src="vanR.PNG" alt="IMAGE" className="h-40" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            consectetur nobis, eaque blanditiis esse modi ducimus maxime ipsa
            numquam dolore eum qui dolorem saepe doloribus animi beatae
            voluptatum. Rem, eos.
          </p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <img src="vanR.PNG" alt="IMAGE" className="h-40" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            consectetur nobis, eaque blanditiis esse modi ducimus maxime ipsa
            numquam dolore eum qui dolorem saepe doloribus animi beatae
            voluptatum. Rem, eos.
          </p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <img src="vanR.PNG" alt="IMAGE" className="h-40" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            consectetur nobis, eaque blanditiis esse modi ducimus maxime ipsa
            numquam dolore eum qui dolorem saepe doloribus animi beatae
            voluptatum. Rem, eos.
          </p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <img src="vanR.PNG" alt="IMAGE" className="h-40" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            consectetur nobis, eaque blanditiis esse modi ducimus maxime ipsa
            numquam dolore eum qui dolorem saepe doloribus animi beatae
            voluptatum. Rem, eos.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SecondApp;
