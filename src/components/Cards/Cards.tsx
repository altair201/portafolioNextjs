import React from "react";
import { IconWeb } from "./Icon/IconWeb";
import { IconGit } from "./Icon/IconGit";
import {Card, CardBody, Image, Button} from "@nextui-org/react";

interface Proyect{
    name:string
    description:string
    image:string
    ldeploy:string
    lgithub:string

}
 const Cards =({Proyect}:{Proyect:Proyect}): React.JSX.Element=> {
  const {name, description, image, ldeploy, lgithub} = Proyect;
  console.log(ldeploy)

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="flex items-center justify-center relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              style={{height:200, width:200}}
              shadow="md"
              src={image}
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h1 className="text-large font-medium mt-2 text-cyan-400">{name}</h1>
              </div>

            </div>

            <div className="flex flex-col mt-3 gap-1">
              {description}
            </div>

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
               <a href={ldeploy}><IconWeb/></a> 
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <a href={lgithub}><IconGit/></a>
              </Button>
             
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
export default Cards;
