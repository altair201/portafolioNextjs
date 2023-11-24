import {Spinner} from "@nextui-org/react";
import Image from "next/image";
import Logo from "../../public/logoAltair.png"

export const SpinnerLoading =()=> {
  return (
    <div className="text-center">

        <Image src={Logo} alt="logo" />
        <Spinner label="Loading..." color="primary" />
    </div>
  );
}