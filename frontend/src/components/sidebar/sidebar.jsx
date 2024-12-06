import Profile_SideBar from "./profile";
import Nav_Sidebar from "./nav-items";
import AddEntryButton from "./add-entry-button";

export default function SideBar({activePage}) {
	return (
		<div className="flex flex-col place-items-center w-[300px] h-screen bg-white bg-opacity-50 shadow-md rounded-r-[40px]">
			<Profile_SideBar />
			<Nav_Sidebar activePage={activePage} />
			<AddEntryButton />
		</div>
	);
}
