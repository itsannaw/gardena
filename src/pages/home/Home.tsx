import { SearchInput } from "../../components";
import CardComponent from "../../components/card/Card";

function Home() {
    return (
        <section className="flex flex-col gap-10">
            <div className="flex justify-between bg-light-green px-14 pt-12 rounded-3xl">
                <div className="flex flex-col justify-start gap-10">
                    <h1 className="text-6xl font-extrabold">
                        Find out <br /> more plants
                    </h1>
                    <div className="flex justify-between items-center max-w-[320px]">
                        <div className="flex flex-col font-medium text-[#1e1e1e] gap-2">
                            <span className="text-3xl">10 K +</span>
                            <span className="text-lg">Unique Plants</span>
                        </div>
                        <div className="border-1 border-solid border-[#1e1e1e] w-14 h-0 transform rotate-90" />
                        <div className="flex flex-col font-medium text-[#1e1e1e] gap-2">
                            <span className="text-3xl">400 +</span>
                            <span className="text-lg">Plant Pages</span>
                        </div>
                    </div>
                    <SearchInput />
                </div>
                <div className="relative mt-[123px] mr-28 w-[420px] h-[350px] rounded-t-full rounded-bl-full bg-[#1e1e1e]">
                    <img
                        className="absolute bottom-0 left-8 w-[410px] h-[510px]"
                        src="../src/assets/home/pot-plant.png"
                        alt="Pot Plant"
                    />
                    <img
                        className="absolute left-[-205px] bottom-[135px]"
                        src="../src/assets/home/arrow-left.svg"
                        alt="Arrow"
                    />
                    <img
                        className="absolute right-[-55px] top-[-135px]"
                        src="../src/assets/home/arrow-right.svg"
                        alt="Arrow"
                    />
                </div>
            </div>
            <div className="flex justify-between">
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </div>
        </section>
    );
}

export default Home;
