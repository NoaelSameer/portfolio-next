<<<<<<< Updated upstream
export default function NavBar({ Type }) {
  console.log(Type);

  return (
    <>
      <nav className="flex items-center justify-between py-1 px-3 bg-[#004080] text-white">
        <div>
          <a
            href="/"
            className={Type === "Home" ? "text-[#E8C872]" : ""}
          >
            Noael Sameer
          </a>
          <br />
          <a href="/" className="px-[3vw]">
            Website Designer
          </a>
        </div>
        <ul className="flex items-center">
          <li>
            <a
              href="/About"
              className={`px-[2vw] ${Type === "About" ? "text-[#E8C872]" : ""}`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/Gallery"
              className={`px-[2vw] ${Type === "Gallery" ? "text-[#E8C872]" : ""}`}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="/Experiences"
              className={`px-[2vw] ${Type === "Experiences" ? "text-[#E8C872]" : ""}`}
            >
              Experiences
            </a>
          </li>
          <li>
            <a
              href="/Contact"
              className={`px-[2vw] ${Type === "Contact" ? "text-[#E8C872]" : ""}`}
            >
              Schedule Now
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
=======
export default function NavBar({Type}){
  console.log(Type)





    return(
        <>
    <nav className="flex items-center justify-between py-1 px-3 bg-[#004080] text-white">
      <div>
      {Type == "Home" ?  <a href="/" className="text-[#E8C872]">Noael Sameer</a> 
      : <a href="/" className="">Noael Sameer</a>}
      <br /><a href="/" className="px-[3vw]">Website Designer</a>

      </div>
      <ul className="flex items-center">
        {Type == "About" ? <li><a href="/About" className="px-[2vw] text-[#E8C872]">About</a></li> : <li><a href="/About" className="px-[2vw]">About</a></li>}
        {Type == "Gallery" ? <li><a href="/Gallery" className="px-[2vw] text-[#E8C872]">Gallery</a></li> : <li><a href="/Gallery" className="px-[2vw]">Gallery</a></li>}
        {Type == "Experiences" ? <li><a href="/Experiences" className="px-[2vw] text-[#E8C872]">Experiences</a></li> : <li><a href="/Experiences" className="px-[2vw]">Experiences</a></li>}
        {Type == "Contact" ? <li><a href="/Contact" className="px-[2vw] text-[#E8C872]">Schedule Now</a></li> : <li><a href="/Contact" className="px-[2vw]">Schedule Now</a></li>}
        <bob/>

      </ul>
    </nav>        
    </>
    )
}
>>>>>>> Stashed changes
