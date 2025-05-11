import NavBar from "./components/NavBar"
export default function Home() {
  return (
    <>
<article className="bg-[#637A9F] h-[90vh] relative overflow-hidden">
  <NavBar Type="Home" />

  {/* Text absolutely positioned */}
  <div className="absolute top-[17vh] left-[3vw] text-[5vw] leading-[1.5] z-10 text-white">
    <h3>Your Vision.</h3>
    <h3>Your Site.</h3>
  </div>

  {/* Image placed in top-right corner behind the text */}
  <img 
    className="absolute top-[17vh] left-[13vw] w-[75vw] h-[50vh] 
               md:max-w-[55vw] md:h-[50vh] lg:max-w-[75vw] lg:h-[50vh] 
               z-0 object-cover grayscale" 
    src="https://res.cloudinary.com/dxsd4uv7m/image/upload/v1745354775/ti56ayetat56owibtxbx.png" 
  />
</article>


    <article className="bg-[#637A9F] h-[100vh]">
       <div>
      <h2 className="text-center text-[7vw] py-[2vh] bg-[#004080] cartoony">Work With Noael.</h2>
      <div className="flex justify-evenly items-center mt-[5vh] px-4">
              <div className=" rounded-lg p-6 w-[30%] text-center">
                <h4 className="text-xl font-bold mb-2">XXXXXXXX</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className=" rounded-lg p-6 w-[30%] text-center">
                <h4 className="text-xl font-bold mb-2">XXXXXXXX</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className=" rounded-lg p-6 w-[30%] text-center">
                <h4 className="text-xl font-bold mb-2">XXXXXXXX</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
        </div>
        <div className="flex justify-center gap-[3vw]">
          <div>
            <img 
            className="w-[45vw] h-[45vh] mr-[5vw]" 
             src="https://res.cloudinary.com/dxsd4uv7m/image/upload/v1745354775/ti56ayetat56owibtxbx.png" 
            />          
  </div>
  <div className="">
  <h3 className="text-white text-[3.5vw]">Creating The <br />Perfect Site.</h3>
  <p className="text-white text-center max-w-[30vw]">
    Laboris incididunt sint deserunt id sint elit ex. Sint occaecat occaecat ea amet. Lorem ut nulla nostrud mollit sit do veniam.
  </p>
</div>

          
        </div>
      

    </article>

    </>
   
  );
}
