import { CardComponent, SearchInput } from "../../components";

export const HomePage = () => {
    return (
        <section id="home" className="flex flex-col gap-10">
            <div className="relative flex justify-center rounded-3xl bg-light-green px-10 lg:justify-between  xl:px-14">
                <div className="flex flex-col justify-center gap-10 py-14 lg:py-28">
                    <h1 className="text-center text-5xl font-extrabold sm:text-start sm:text-6xl">
                        Find out <br /> more plants
                    </h1>
                    <div className="flex max-w-[320px] items-center justify-center gap-5 text-center md:justify-between md:gap-0 md:text-start">
                        <div className="flex flex-col gap-2 font-medium text-[#1e1e1e]">
                            <span className="text-xl sm:text-3xl">10 K +</span>
                            <span className="text-lg">Unique Plants</span>
                        </div>
                        <div className="hidden h-0 w-14 rotate-90 transform border-1 border-solid border-[#1e1e1e] sm:block" />
                        <div className="flex flex-col gap-2 font-medium text-[#1e1e1e]">
                            <span className="text-xl sm:text-3xl">400 +</span>
                            <span className="text-lg">Plant Pages</span>
                        </div>
                    </div>
                    <SearchInput />
                </div>
                <div className="hidden items-end lg:flex">
                    <div className="relative mr-1 h-[350px] w-[420px] rounded-t-full rounded-bl-full xl:mr-28 xl:bg-[#1e1e1e]">
                        <img
                            className="absolute bottom-0 left-8 hidden h-[510px] w-[410px] lg:block"
                            src="../src/assets/home/pot-plant.png"
                            alt="Pot Plant"
                        />
                        <img
                            className="absolute bottom-[135px] left-[-205px] hidden default:block"
                            src="../src/assets/home/arrow-left.svg"
                            alt="Arrow"
                        />
                        <img
                            className="absolute right-[-55px] top-[-135px] hidden xl:block"
                            src="../src/assets/home/arrow-right.svg"
                            alt="Arrow"
                        />
                    </div>
                </div>
            </div>
            <div id="gallery" className="flex flex-col justify-center gap-10">
                <h2 className="text-center text-2xl font-bold">Gallery</h2>
                <div className="flex flex-wrap justify-center gap-4 xl:justify-between">
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </div>
            </div>
        </section>
    );
};