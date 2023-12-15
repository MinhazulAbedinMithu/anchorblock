import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";

type TAuthHeadingProps = {
  helpText: string;
};

const AuthHeading: React.FC<TAuthHeadingProps> = ({
  helpText,
}): JSX.Element => {
  return (
    <div>
      <div className="flex items-end justify-start gap-x-1">
        <Image src={logo} alt="stack" className="p-1" />
        <h4 className="text-[28px] text-[#4E5D78] font-bold leading-normal">
          Stack
        </h4>
      </div>
      <p className="text-[#404040] text-xl font-semibold py-5">{helpText}</p>
    </div>
  );
};

export default AuthHeading;
