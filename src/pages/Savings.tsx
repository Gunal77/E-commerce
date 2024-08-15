import Navbar from "./Navbar";

export default function Savings() {
    return (
        <>
            <Navbar />
            <p id="savings" className="border-b border-gray-400 p-3">Savings</p>
            <div className="w-[100%] h-[100%] pt-20 pb-10">
                <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-7483/k2-_c296feea-536e-4cc3-b055-ab7ee0d821e6.v1.jpg" alt="" />
            </div>
            <div className="flex justify-start gap-5 p-4">
                <button className="border-2 rounded-full p-1 bg-slate-200">All filters </button>
                <button className="border-2 rounded-full p-1 bg-slate-200">In-store</button>
                <button className="border-2 rounded-full p-1 bg-slate-200">Price</button>
                <button className="border-2 rounded-full p-1 bg-slate-200">Brand</button>
                <button className="border-2 rounded-full p-1 bg-slate-200">Fullfillment Speed</button>
                <button className="pl-[32rem]"><span className="font-bold">Sort by</span><span>|</span>Best match</button>
            </div>
            <div className="border-t border-gray-400 p-3 font-bold">Savings</div>
            <div className="p-4">
                {/* <input type="search" className="border-black px-44 py-2 border-[1px]">Search in savings</input>  */}
                <input className="border-black px-44 py-2 border-[2px]" type="search" value="search in savings" />
            </div>
            <div className="flex justify-between p-10">
                <div>
                    <img className="border-[2px] rounded-full w-[5.5rem] h-[5.5rem]" src="https://i5.walmartimages.com/dfw/4ff9c6c9-e4c1/k2-_bde476a9-59ee-4722-a2f2-00ecfbed1202.v1.png" alt="" />
                    <p>Flash Deals</p>
                </div>
                <div>
                    <img className="border-[2px] rounded-full w-[5.5rem] h-[5.5rem]" src="https://i5.walmartimages.com/dfw/4ff9c6c9-454b/k2-_0968bebd-32e7-474a-b764-79cc021b9af0.v1.jpg" alt="" />
                    <p>$20 & under</p>
                </div>
                <div>
                    <img className="border-[2px] rounded-full w-[5.5rem] h-[5.5rem]" src="https://i5.walmartimages.com/dfw/4ff9c6c9-56b9/k2-_c65fc424-53f3-429a-b997-cae7c3225db0.v1.png" alt="" />
                    <p>Patio&Garden</p>
                </div>
                <div>
                    <img className="border-[2px] rounded-full w-[5.5rem] h-[5.5rem]" src="https://i5.walmartimages.com/dfw/4ff9c6c9-672e/k2-_17a43324-6aae-4167-a828-b1acd77eda54.v1.jpg" alt="" />
                    <p>Get it today</p>
                </div>
                <div>
                    <img className="border-[2px] rounded-full w-[5.5rem] h-[5.5rem]" src="https://i5.walmartimages.com/dfw/4ff9c6c9-16a1/k2-_e70834dd-cd32-41b5-acac-e38b7e04b308.v1.jpg" alt="" />
                    <p>School Savings</p>
                </div>
                <div>
                    <img className="border-[2px] rounded-full w-[5.5rem] h-[5.5rem]" src="https://i5.walmartimages.com/dfw/4ff9c6c9-8bdc/k2-_f02d2032-78f9-4aa0-8502-a3836546a04e.v1.jpg" alt="" />
                    <p>College Savings</p>
                </div>
                <div>
                    <img className="border-[2px] rounded-full w-[5.5rem] h-[5.5rem]" src="https://i5.walmartimages.com/dfw/4ff9c6c9-777d/k2-_e3234197-2fe4-48db-8868-64f2c3583ddb.v1.png" alt="" />
                    <p>Fashion&Design</p>
                </div>
                <div>
                    <img className="border-[2px] rounded-full w-[5.5rem] h-[5.5rem]" src="https://i5.walmartimages.com/dfw/4ff9c6c9-2776/k2-_690acfbc-d4b0-431e-8c01-567586f2e4fa.v1.jpg" alt="" />
                    <p>Technology</p>
                </div>
                <div>
                    <img className="border-[2px] rounded-full w-[5.5rem] h-[5.5rem]" src="https://i5.walmartimages.com/dfw/4ff9c6c9-b46b/k2-_222e78fb-faee-4479-949f-b63151f5326d.v1.jpg" alt="" />
                    <p>Foods&Kitchen</p>
                </div>
            </div>
            <div className="border-t border-gray-400 p-3 font-bold">Savings<span className="text-gray-400">(1000+)</span></div>
            <div className="p-3">Uses external data. Price when purchased online</div>
        </>
    );
}