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