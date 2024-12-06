import NavButton from "./nav-button";

export default function NavItems_Sidebar({activePage}) {
	function handleActivePage(name) {
		return activePage === name;
	}
	return (
		<div className="flex flex-col place-items-center w-[186px] text-[#453B47] my-12">
			<NavButton name="overview" isActive={handleActivePage("overview")} />
			<NavButton name="entries" isActive={handleActivePage("entries")} />
			<NavButton name="settings" isActive={handleActivePage("settings")} />
		</div>
	);
}
