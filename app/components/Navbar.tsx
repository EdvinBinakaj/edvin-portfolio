import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="mb-20  flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src="/edvin-logo.png" alt="Logo" className="w-10 mx-2" />
      </div>
      <div className="m-8 flex justify-center items-center gap-4">
        <FaGithub />
        <FaLinkedin />
        <FaTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
}
