import Image from "next/image";
import logo from "../../../public/assets/images/logo.svg";
import { NavBar } from "../components/NavBar";

export const Header = () => {
  return (
    <header className=" flex place-content-between items-center mb-[40px] ">
      <Image src={logo} alt="logo" />
      <NavBar />
    </header>
  );
};
