import Container from "../common/container";
import Logo from "../logo";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="border-b border-px border-muted/20 fixed top-0 w-full bg-black/40 backdrop-blur-md">
      <Container className=" py-4 flex justify-between">
        <Logo variant="wordmark" color="white" />
        <SocialNav />
      </Container>
    </div>
  );
};

const SocialNav = () => (
  <nav className="flex gap-1.5">
    <Button size={"icon"} variant={"outline"} className="text-white">
      <FaGithub />
    </Button>
    <Button size={"icon"} variant={"outline"} className="text-white">
      <FaLinkedinIn />
    </Button>
    <Button size={"icon"} variant={"outline"} className="text-white">
      <IoMail />
    </Button>
  </nav>
);

export default Header;
