import { Bars3Icon } from "@heroicons/react/24/outline";
import { FaYoutube } from "react-icons/fa";

function Nav(){

    return(
        <>  
          <div className="flex  flex-row justify-start ">
            <button className="p-2 text-gray-700 hover:bg-gray-200 rounded-lg">
           <Bars3Icon className="w-6 h-6" />
            </button>

            <FaYoutube className="w-8 h-8 text-red-600 pt-3" />

            <h2 className="text-2xl pt-1">YouTube<sup>In</sup></h2>

            <input   type="text"  placeholder="Search...." className="border  border-x-black 
            w-[60%] h-9  relative left-10  rounded-2xl top-2  "   />

            <button className="relative right-3 top-2.5 h-8 border border-x-black-500 
             rounded-md">Search</button>

            </div>

        </>
    )
}


export default Nav;