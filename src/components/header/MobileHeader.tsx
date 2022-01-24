import { FC, useState } from "react";
import { pages } from "../nav/Nav";
import Tabs from "../tabs/Tabs";
import Title from "../title/Title";
import { AiOutlineMenu } from "react-icons/ai";

const items = [{ label: "Lionel Pirault", link: "/" }];

const MobileHeader: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 z-10 w-full bg-white bg-opacity-30">
      <div className="flex justify-between w-full px-2 py-4">
        <Title link={items[0].link} variant="mobile">
          {items[0].label}
        </Title>
        <button
          type="button"
          className="flex items-start"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <AiOutlineMenu className="text-4xl text-newYellow" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="w-full sm:pt-16">
          <Tabs nav={pages} />
        </div>
      )}
    </header>
  );
};

export default MobileHeader;
