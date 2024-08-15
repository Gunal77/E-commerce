import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
    return(
        <>
        <div id="primary-nav" className="flex justify-between py-4 bg-blue-500 text-white font-sans px-5">
            <div><svg xmlns="http://www.w3.org/2000/svg" height={40} width={40} viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg></div>
            <div className="flex">
                <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png" alt="" />
                <span className="text-lg font-bold ">How do you want your items</span>
            </div>
            <div className="flex items-center">
                <input type="search" className="px-[7rem] py-2 border-r-2 text-center" placeholder="Search everything at online and in store"/>
                <CiSearch />
            </div>
            <div className="flex items-baseline">
            <CiHeart />
            <div className="flex-col">
            <div>Reorder</div>
            <div className="font-bold">My Items</div>
            </div>
            </div>
            <div className="flex items-baseline">
            <RiAccountCircleFill />
            <div className="flex-col">
            <div>Sign in</div>
            <div className="font-bold">Account</div>
            </div>
            </div>
            <div className="flex items-baseline">
            <FaCartShopping />
            <span>$0.00</span>
            </div>
        </div>
        <div id="secondary-nav" className="flex font-sans justify-between p-3 bg-slate-100">
            <p className="font-bold">Departments</p>
            <div className="font-bold">Services</div>
            <p>|</p>
            <p className="">Summer Savings</p>
            <p>Grocery&Essentials</p>
            <p>Back To School</p>
            <p>Summer Shop</p>
            <p>Home</p>
            <p>Electronics</p>
            <p>Fashion</p>
            <p>Baby</p>
            <p>Toys</p>
        </div>
        </>
    );
}
