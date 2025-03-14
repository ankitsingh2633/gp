import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord size={52} /> },
  { href: "https://twitter.com", icon: <FaTwitter size={52} /> },
  { href: "https://youtube.com", icon: <FaYoutube size={52} /> },
  { href: "https://medium.com", icon: <FaMedium size={52} /> },
];


const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-10 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-10 md:flex-row">
        <p className="text-center text-sm font-light md:text-left text-2xl">
          ©Nova 2024. All rights reserve
        </p>

        <div className="flex justify-center gap-10  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right text-2xl"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
