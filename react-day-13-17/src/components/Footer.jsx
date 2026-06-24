import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`footer ${theme}`}>
      © 2026 Noor Ullah
    </div>
  );
};

export default Footer;