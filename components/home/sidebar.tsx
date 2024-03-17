import Gspot from "@/components/ui/gspot";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faMagnifyingGlass,faUser,faBell,faUserGroup,faPenNib} from '@fortawesome/free-solid-svg-icons'

interface SideBarProps{
    onHome:()=>void,
    onSearch:()=>void,
    onNotification:()=>void,
    onFriends:()=>void,
    onProfile:()=>void,
    onPost:()=>void,


}


export default function SideBar(
    {
        onHome,
        onSearch,
        onFriends,
        onNotification,
        onProfile,
        onPost
    }:SideBarProps
){
    return (
        <div className="flex-col justify-start mt-2 ml-4 bg-gray-950 h-full">
            <div className="flex lg:justify-start justify-center mt-2 my-3">
                <Gspot/>
            </div>
            <div className="flex flex-col items-start">
            <div className="flex w-full lg:justify-start justify-center items-end my-3" onClick={onHome}>
                <FontAwesomeIcon icon={faHouse} className="h-[28px] mr-5"/>
                <span className="hidden lg:block h-[30px] text-3xl">Home</span>
            </div>
            <div className="flex w-full lg:justify-start justify-center items-end  my-3 " onClick={onSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="h-[28px]  mr-5"/>
                <span className="hidden lg:block h-[30px] text-3xl">Search</span>
            </div>
            <div className="flex w-full  lg:justify-start justify-center items-end  my-3" onClick={onNotification}>
                <FontAwesomeIcon icon={faBell} className="h-[28px] mr-5"/>
                <span className="hidden lg:block h-[30px] text-3xl">notification</span>
            </div>
        <div className="flex w-full  lg:justify-start justify-center items-end  my-3" onClick={onFriends}>
                <FontAwesomeIcon icon={faUserGroup} className="h-[28px] mr-5"/>
                <span className="hidden lg:block h-[30px] text-3xl">Friends</span>
            </div>
            <div className="flex w-full  lg:justify-start justify-center items-end  my-3" onClick={onPost}>
                <FontAwesomeIcon icon={faPenNib} className="h-[28px] mr-5"/>
                <span className="hidden lg:block h-[30px] text-3xl">Post</span>
            </div>
            <div className="flex w-full  lg:justify-start justify-center items-end  my-3" onClick={onProfile}>
                <FontAwesomeIcon icon={faUser} className="h-[28px] mr-5"/>
                <span className="hidden lg:block h-[30px] text-3xl">Profile</span>
            </div>
            </div>
        </div>
    )
}