import { useEffect } from "react";
import React from "react";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { IconCheck } from "../Contac/IconLinkend/IconCheck";
import { IconError } from "../Contac/IconLinkend/IconError";
import style from "./Modal.module.css"
import { useAppSelector } from "@/redux/hooks";

type open={
    open:boolean,
    openII:boolean
}
export const ModalComponent = ({ open }: { open: open }) => {
    const mode = useAppSelector((state)=>state.DarkModeSlice.darkMode)
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (open.open || open.openII) {
            onOpen();
            setTimeout(() => {
                onClose();
            }, 2000);
        }
    }, [open.open, open.openII, onClose, onOpen]);

    return (
        <>
            <Modal backdrop="blur" isOpen={isOpen} className={mode?"dark":""}>
                <ModalContent className={style.modal}>
                    {open.open ? 
                    (<div><div className={style.animation}>
                        <IconCheck />
                    </div>
                    <p className="text-cyan-500 font-bold text-2xl">Correo enviado </p></div>) : (<div><div className={style.animation}>
                        <IconError />
                    </div>
                    <p className="text-cyan-500 font-bold text-2xl">Error al enviar </p></div>)
                    }
                </ModalContent>
            </Modal>
        </>
    );
}
