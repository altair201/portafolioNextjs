'use client'
import React from "react";
import { Navbar, NavbarMenuItem, NavbarMenuToggle, NavbarMenu, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import logo from "../../public/logomod.png"
import Link from "next/link";
import Image from "next/image";
import style from "./NavBar.module.css"
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./IconNav/MoonIcon";
import { SunIcon } from "./IconNav/SunIcon";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {toggleDarkMode} from "@/redux/features/DarkModeSlice";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const dispatch = useAppDispatch()
  const mode = useAppSelector((state) => state.DarkModeSlice.darkMode);
  

  const menuItems = [
    "inicio",
    "Proyectos",
    "contacto",
  ];

  return (
    <Navbar className={mode ? 'dark bg-black': '' } onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className={style.prueba}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={logo} className="w-36
          " alt="logo" />
        </NavbarBrand>
      </NavbarContent>
      <Switch
        defaultSelected
        size="sm"
        color="secondary"
        onChange={(isSelected) => isSelected ? dispatch(toggleDarkMode()) : dispatch(toggleDarkMode())}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
      >
      </Switch>
      <NavbarContent className={`hidden sm:flex gap-4  ${style.prueba2}`} justify="center">
        <NavbarItem>
          <Link className={mode? 'text-white': ''} href="/">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/proyect" aria-current="page" className="text-teal-400
          ">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={mode? 'text-white': ''} href="/contac">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "text-teal-400" : ''
              }
              className="w-full"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
