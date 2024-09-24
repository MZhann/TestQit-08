const Options = () => {
    return (
        <div className="w-full flex justify-center h-[300px]">
            <div className="w-[70%] flex flex-col items-center mt-3  rounded-2xl border-2 border-gray-300 p-4">
                <h1 className="text-3xl font-bold">Options</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet.</p>
                <div className="flex justify-evenly w-full mt-5">

                    <div>
                        <div>1</div>
                        <input placeholder="text" className="border-2 border-black"/>
                        <div>2</div>
                        <input className="border-2 border-black"/>
                    </div>
                    <div>
                        <div>3</div>
                        <input className="border-2 border-black"/>
                        <div>4</div>
                        <input className="border-2 border-black"/>
                    </div>
                    <div>
                        <div>6</div>
                        <input className="border-2 border-black"/>
                        <div>5</div>
                        <input className="border-2 border-black"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Options;
