import { HeaderContainer } from "./style";
import Image from "next/image";

const Header = () => {
  return (
    <HeaderContainer>
      <Image
        src="/assets/images/logo.png"
        alt="Logo"
        width={110}
        height={60}
        priority
      />
    </HeaderContainer>
  );
};

export default Header;
