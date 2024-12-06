export default function NavButton({name, isActive}) {
	const navUrl = "/" + name;
	return (
		<>
			{isActive === true ? (
				<button
					className="my-2 hover:text-[#453B47]/60 text-[#453B47]  bg-white p-2 rounded-lg w-full h-[34px] flex items-center justify-center">
					<a href={navUrl} className="font-bold text-lg">
						{name}
					</a>
				</button>
			) : (
				<button
					className="my-2 hover:text-[#453B47]/60 text-[#453B47] p-2 rounded-lg w-full h-[34px] flex items-center justify-center">
					<a href={navUrl} className=" font-bold text-lg">
						{name}
					</a>
				</button>
			)}
		</>
	);
}
