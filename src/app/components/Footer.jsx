import { FaGithub, FaInstagram, FaFacebook, FaReddit } from "react-icons/fa";

const Footer = ({ logo, about, socialLinks = {}, services = [] }) => {
  return (
    <div className="flex flex-col w-full bg-gray-500 text-gray-200 py-[2vh] absolute bottom-0">
      <div className="px-[2vw] relative">
        <img src={logo} alt="Logo" className="max-h-[8vh] max-w-[12vw] mr-auto" />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="space-x-[5vw] text-[2vw]">
            {services.map((service) => (
              <a key={service.name} href={service.href} className="hover:underline">
                {service.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-white my-[2vh]"></div>
      <div className="flex flex-col items-center">
        <div className="flex justify-center space-x-[2.5vw] text-[2vw] mb-[2vh]">
          {socialLinks.github && (
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaGithub size="2vw" />
            </a>
          )}
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram size="2vw" />
            </a>
          )}
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebook size="2vw" />
            </a>
          )}
          {socialLinks.reddit && (
            <a href={socialLinks.reddit} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaReddit size="2vw" />
            </a>
          )}
        </div>
        <p className="text-center text-[1.5vw]">{about}</p>
      </div>
    </div>
  );
};

export default Footer;