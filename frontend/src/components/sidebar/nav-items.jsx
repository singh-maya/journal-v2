import NavButton from "./nav-button";

export default function NavItems_Sidebar() {
	return (
		<div className="flex flex-col place-items-center w-[186px] text-[#453B47] my-12">
			<NavButton name="overview" isActive={true} />
			<NavButton name="entries" isActive={false} />
			<NavButton name="settings" isActive={false} />
		</div>
	);
}
