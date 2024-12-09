import {Play} from "lucide-react";

export default function SongOfTheWeek() {
	return (
		<div className="flex flex-col bg-white bg-opacity-30 rounded-[30px] my-8 justify-center items-center shadow-md">
			<p className="text-[#453B47] font-bold text-sm m-2"> Most Played Song of the Week</p>
			<div className="flex flex-row items-center w-full px-4 pb-4">
				<img src="/nemonemo.png" alt="album cover" className="w-[40px] h-[40px] rounded-md"/>
				<div className="flex flex-col mx-4">
					<p className="text-sm text-[#453B47] tracking-wide font-medium">NemoNemo</p>
					<p className="text-xs text-[#453B47] tracking-wide">Nemo Nemo . Yena</p>
				</div>
				<Play className="w-[24px] h-[24px] justify-self-end ml-auto"/>
			</div>
		</div>
	)
}