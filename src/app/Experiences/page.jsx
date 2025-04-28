import NavBar from "../components/NavBar"

export default function experiences(){
    
    return(
        <>
        <article>
        <NavBar Type="About" />
        </article>
        <article className="h-[100vh] bg-[#004080] text-white">
        <div className="flex justify-center gap-[3vw] pt-[5vh]">
          <div className="w-[45vw] h-[45vh] mr-[5vw] bg-gray-600" />
          <div>
            <h3 className="text-white text-[3.5vw] mb-[2vh]">Skills & Certs.</h3>
            <div className="flex gap-[3vw]">
              <div className="flex flex-col justify-between h-[35vh]">
                <h4 className="text-[2vw]">Xxxx</h4>
                <h4 className="text-[2vw]">Xxxx</h4>
                <h4 className="text-[2vw]">Xxxx</h4>
              </div>
              <div className="flex flex-col justify-between h-[35vh]">
                <h4 className="text-[2vw]">Xxxx</h4>
                <h4 className="text-[2vw]">Xxxx</h4>
                <h4 className="text-[2vw]">Xxxx</h4>
              </div>
            </div>
          </div>
        </div>
      </article>
        </>
    )
}