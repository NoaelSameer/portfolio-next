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
    alt="Descriptive alt text"
  />
</article>


    <article>
       <div className="bg-[#004080] h-[10vh]">
      <h2 className="text-center text-[7vw]">Work With Noael.</h2>
    </div>
    </article>

    </>
   
  );
}
