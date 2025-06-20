import Container from "../common/container";
import CustomButton from "../custom-button";
import Logo from "../logo";

const Header = () => {
  return (
    <div className="border-b border-px border-muted/20 fixed top-0 w-full">
      <Container className=" py-4 flex justify-between">
        <Logo variant="wordmark" color="white" />
      </Container>
    </div>
  );
};

export default Header;
