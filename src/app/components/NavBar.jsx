export default function NavBar(Type){
    return(
        <>
    <nav className="flex items-center justify-between py-1 px-3 bg-[#004080]">
      <div>
      <a href="/" className="">Noael Sameer</a><br></br>
      <a href="/" className="px-[3vw]">Website Designer</a>

      </div>
      <ul className="flex items-center">
        <li><a href="/About" className="px-[2vw]">About</a></li>
        <li><a href="/Gallery" className="px-[2vw]">Gallery</a></li>
        <li><a href="/Experiences" className="px-[2vw]">Experiences</a></li>
        <li><a href="###" className="px-[2vw]">Schedule Now</a></li>

      </ul>
    </nav>        
    </>
    )
}