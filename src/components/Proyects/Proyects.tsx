'use client'
import { useGetProyectsQuery } from "@/redux/services/proyectsAPI";
import Cards from "../Cards/Cards";
import React from "react";

const Proyect = (): React.ReactElement => {
    const { data, isLoading, error } = useGetProyectsQuery();
    console.log(data);

    return (
        <div className="flex flex-wrap justify-center gap-8 pt-20">
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                data?.map((proyect: any) => (
                    <Cards
                        key={proyect.id}
                        Proyect={proyect}
                    />
                ))
            )}
        </div>
    );
};

export default Proyect;
