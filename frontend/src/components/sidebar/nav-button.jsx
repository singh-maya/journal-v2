export default function NavButton({ name, isActive }) {
	const navUrl = "/" + name;
	return (
		<>
			{isActive === true ? (
				<button className="my-2 hover:text-[#453B47]/60 bg-white p-2 rounded-lg w-full h-[34px] flex items-center justify-center">
					<a href={navUrl} className="text-[#453B47] font-bold text-lg">
						{name}
					</a>
				</button>
			) : (
				<button className="my-2 hover:text-[#453B47]/60  p-2 rounded-lg w-full h-[34px] flex items-center justify-center">
					<a href={navUrl} className="text-[#453B47] font-bold text-lg">
						{name}
					</a>
				</button>
			)}
		</>
	);
}
