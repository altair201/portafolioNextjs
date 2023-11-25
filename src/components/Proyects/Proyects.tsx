'use client'
import { useGetProyectsQuery } from "@/redux/services/proyectsAPI";
import Cards from "../Cards/Cards";
import { SpinnerLoading } from "../Spinner/Spinner";

const Proyect = (): React.ReactElement => {
    const { data, isLoading, error } = useGetProyectsQuery();
    console.log(data);

    return (
        <div className="flex flex-wrap justify-center gap-8 pt-20 sm:h-auto">
            {isLoading ? (
                <div><SpinnerLoading/></div>
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
