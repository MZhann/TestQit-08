import sandwich from "../../public/images/sandwich.png";
import { Link } from "react-router-dom";

const InfoBlock = () => {
    return (
        <div className="flex w-full justify-evenly text-white pt-20 items-center">
            <div className="w-[400px] space-y-4">
                {/* <div className="text-xl font-bold w-[400px] md:w-[600px] lg:w-[1500px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, magnam?</div> */}

                <h1 className="text-3xl">
                    Lorem ipsum dolor sit ametlor sit amet consectetur{" "}
                </h1>
                <p className="">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Minima, suscipit. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Autem!
                </p>
                <Link to='/generation' className="">
                    <button className="bg-purple-500 mt-6 px-4 py-2 rounded-xl">
                        Generate!
                    </button>
                </Link>
            </div>
            <div>
                <img
                    src={sandwich}
                    alt="dish photo"
                    width={400}
                    className="w-[200px]"
                />
            </div>
        </div>
    );
};

export default InfoBlock;
