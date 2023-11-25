'use client'
import style from './Landing.module.css'
import Image from "next/image";
import perfil from '../../public/perfilAltair.jpg'
import { Button } from '@nextui-org/react';
import LogoSkill from './LogoSkill/LogoSkill'
import { useGetpdfcvQuery } from '@/redux/services/pdfcvAPI';
import Link from 'next/link';
const Landing = (): React.ReactElement => {
    const { data, isLoading, error } = useGetpdfcvQuery();
    
    

    return (
        <div className={`pt-10 ${style.containerHome}`}>
            <div className={style.subcontainer}>
                <div className={style.about}>
                    <div>
                        <p className='text-cyan-500 font-bold text-4xl w-full '>¡Hola! mi nombre es Davian Pabon (Altair200)</p>
                        <div className='flex'>
                            <p className={style.profecion2}>Full Stack Developer</p>
                        </div>
                    </div>
                    <p>
                        ¡Hola! Soy un apasionado desarrollador Full Stack con un amor por la programación. He adquirido habilidades desde el front-end hasta el back-end, incluyendo JavaScript, HTML, CSS, React, Redux, Git, Node.js, Express, SQL y Sequelize. Siempre estoy ávido de conocimiento y continuamente busco nuevas tecnologías para dominar. Cada día veo la oportunidad de superarme y crecer.
                    </p>
                    <Button color="primary" variant='shadow' className=''>
                        {
                            isLoading?(<div>Cargando...</div>):(<Link href={data as string} download >Ver CV</Link>)
                        }
                    </Button>

                </div>
                <div className={style.photo}>
                    <Image
                        width={240}
                        src={perfil}
                        alt="imagen de perfil"
                    />
                </div>
            </div>
            <div className={style.skills}>
                <p className='text-cyan-500 font-bold text-2xl pb-5'>Skills</p>
                <div>
                    <LogoSkill />
                </div>
            </div>
        </div>
    )
};
export default Landing;