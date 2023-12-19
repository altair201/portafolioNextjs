'use client'
import { useGetProyectsQuery } from "@/redux/services/proyectsAPI";
import Cards from "../Cards/Cards";
import { SpinnerLoading } from "../Spinner/Spinner";
import { useAppSelector } from "@/redux/hooks";

const Proyect = (): React.ReactElement => {
    const { data, isLoading, error } = useGetProyectsQuery();
    const mode = useAppSelector((state) => state.DarkModeSlice.darkMode);

    return (
        <div className={`flex flex-wrap justify-center gap-8 pt-20 ${mode ? 'bg-zinc-900 text-white lg:h-screen' : 'bg-gradient-to-b from-white to-950 to-gray-500 lg:h-screen'}`}>
            {isLoading ? (
                <div className="h-screen"><SpinnerLoading/></div>
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
