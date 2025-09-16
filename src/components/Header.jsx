import { Link } from "react-router-dom";
import { HomeIcon,  PlayIcon , BellIcon, ClockIcon , UserCircleIcon} from "@heroicons/react/24/solid";
import Nav from "./Nav";

function Header(){

    return(
        <>
           <Nav />
        
         <ul className="bg-white w-[180px] h-[800px] fixed left-0 top-10 " >
           <div className="flex items-center gap-2 text-gray-700 text-lg p-4">
            <HomeIcon className="w-4 h-4" /> 
            <span>Home</span>
           </div>
            <div className="flex items-center gap-2 text-gray-700 text-lg p-4">
            <PlayIcon className="w-5 h-5" /> 
             <span className="text-sm font-semibold">Shorts</span>
           </div>
           <div className="flex items-center gap-2 text-gray-700 text-lg p-4">
            <BellIcon className="w-4 h-4" /> 
            <span>Subscriptions</span>
             </div>
            <div className="flex items-center gap-2 text-gray-700 text-lg p-4">
            <UserCircleIcon className="w-4 h-4" /> 
            <span>You</span>
            </div>
           <div className="flex items-center gap-2 text-gray-700 text-lg p-4">
            <ClockIcon className="w-4 h-4" /> 
            <span>History</span>
             </div>
         </ul>
        
        </>
    )
}

export default Header;