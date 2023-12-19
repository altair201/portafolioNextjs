'use client'
import { IconGit } from "../Cards/Icon/IconGit";
import { IconLinkend } from "./IconLinkend/IconLinkend";
import { IconInstagram } from "./IconLinkend/IconInstagram";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import style from "./Contac.module.css"
import { useAppSelector } from "@/redux/hooks";
import React, { useState } from 'react';
import { EmailSend } from "@/redux/services/EmailSend";
import { ModalComponent } from "../Modal/Modal";

const Contac = () => {
    const darkMode = useAppSelector((state) => state.DarkModeSlice.darkMode)
    const [form, setForm] = useState<{ email: string; textarea: string; error: boolean }>({
        email: '',
        textarea: '',
        error: false
    });
    const [open, setOpen] = useState<{ open: boolean, openII: boolean }>({
        open: false,
        openII: false
    })
    React.useEffect(() => {

       

    }, [open.open]);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value,
            error: name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        }));
    };
    const handleChange = async () => {
        const formData = {
            form: {
                email: form.email,
                textarea: form.textarea,
                error: form.error,
            }
        };

        try {
            if (form.email !== "") {
                const response = await EmailSend(formData);
                if (response === "OK") {
                    setOpen({
                        ...open,
                        open: true
                    });
                    setForm({ email: '', textarea: '', error: false });
                }

            } else {
                setOpen({
                    ...open,
                    openII: true
                });
                setTimeout(() => {
                    setOpen({
                        ...open,
                        openII: false
                    });
                }, 2000);
            }
        } catch (error) {
            console.error("Error al enviar el correo:", error);
        }
    }
    return (
        <div className=" h-3/4 flex flex-col items-center justify-center  gap-4 pt-24">
            <p className="text-cyan-500 font-bold text-3xl">Contactame</p>
            <div className="flex gap-5">
                <Button isIconOnly radius="full" variant="shadow" id={style.github} className={style.btnRedes} aria-label="Like">
                    <a href="https://github.com/altair201"><IconGit /></a>
                </Button>
                <Button isIconOnly radius="full" variant="shadow" id={style.linkedin} className={style.btnRedes} aria-label="Like">
                    <a href="https://www.linkedin.com/in/davian-pabon-amado-54105627a/"><IconLinkend /></a>
                </Button>
                <Button isIconOnly radius="full" variant="shadow" id={style.instagram} className={style.btnRedes} aria-label="Like">
                    <a href="https://www.instagram.com/altair200/"><IconInstagram /></a>
                </Button>

            </div>
            <div>
                <p className="text-cyan-500 font-bold text-2xl text-center">Correo</p>
                <div className={`${darkMode ? style.dark : ""} ${style.contacEmail}`}>
                    <Input type="email" color="primary" variant="underlined" name="email" label="Email" onChange={handleInputChange}
                        isInvalid={form.error}
                        value={form.email}
                        errorMessage={form.error ? "Porfavor ingrese un email valido" : ""} />
                    <Textarea
                        variant="underlined"
                        label="Description"
                        labelPlacement="outside"
                        placeholder="Enter your description"
                        color="primary"
                        name="textarea"
                        value={form.textarea}
                        onChange={handleInputChange}
                    />
                    <Button color="secondary" variant="shadow" onClick={handleChange}>
                        Enviar
                    </Button>
                    <ModalComponent open={open} />
                </div>
            </div>
        </div>
    )
};
export default Contac;