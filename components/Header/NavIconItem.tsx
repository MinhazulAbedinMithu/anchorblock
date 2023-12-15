import Image, { StaticImageData } from "next/image";
import React from "react";

const NavIconItem: React.FC<{ icon: StaticImageData }> = ({
  icon,
}): JSX.Element => {
  return (
    <div className="tex-4xl cursor-pointer">
      <Image src={icon} alt="icon item" />
    </div>
  );
};

export default NavIconItem;
