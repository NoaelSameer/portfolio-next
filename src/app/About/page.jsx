import NavBar from '../components/NavBar';

export default function About() {
  return (
    <>
      <article className="h-[95vh] bg-[#637A9F] text-white">
        <NavBar Type="About" />
        <div className="flex justify-center gap-[3vw] mt-[5vh]">
          <div>
            <img
              className="w-[45vw] h-[45vh] mr-[5vw]"
              src="https://res.cloudinary.com/dxsd4uv7m/image/upload/v1745354775/ti56ayetat56owibtxbx.png"
            />
          </div>
          <div>
            <h3 className="text-white text-[3.5vw] ml-[7vw]">Hi, I'm Noael.</h3>
            <p className="text-white text-center max-w-[30vw] mt-[5vh] text-[1.5vw]">
              Laboris incididunt sint deserunt id sint elit ex. Sint occaecat occaecat ea amet. Lorem ut nulla nostrud mollit sit do veniam.
            </p>
            <div className="flex justify-between items-center mt-[5vh]">
              <h3 className="text-white text-[2vw]">Interested?</h3>
              <button className="py-[1vh] bg-[#E8C872] px-[2vw] rounded">
                <a href="###" className="text-black text-[1.5vw]">Schedule Now</a>
              </button>
            </div>
          </div>
        </div>
      </article>

      <article className="bg-[#004080] min-h-[100vh] text-white flex justify-center items-center">
        <div className="p-[5vw] w-full h-full">
          <div className="flex justify-between mb-[4vh]">
            <div>
              <h1 className="text-[5vw]">My Approach.</h1>
            </div>
            <div className="max-w-[30vw]">
              <h2 className="text-[3vw]">Xxxx</h2>
              <p className="text-[1.5vw]">Xxxx Xxxx Xxxx Xxxx Xxxx Xxxx Xxxx</p>
            </div>
          </div>

          <div className="flex justify-between h-[60vh]">
            <div className="flex-1 mr-[2vw]">
              <h2 className="text-[2vw]">Xxxx</h2>
              <p className="text-[1.5vw]">Xxxx Xxxx Xxxx Xxxx Xxxx Xxxx Xxxx</p>
            </div>
            <div className="flex-1 mr-[2vw]">
              <h2 className="text-[2vw]">Xxxx</h2>
              <p className="text-[1.5vw]">Xxxx Xxxx Xxxx Xxxx Xxxx Xxxx Xxxx</p>
            </div>
            <div className="flex-1">
              <h2 className="text-[2vw]">Xxxx</h2>
              <p className="text-[1.5vw]">Xxxx Xxxx Xxxx Xxxx Xxxx Xxxx Xxxx</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}