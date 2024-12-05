export default function SpotifyOverlay({
	artist_name,
	song_name,
	album_name,
	album_art,
}) {
	return (
		<div className="absolute bottom-0 left-0 flex w-full items-center bg-[#AEACAC] bg-opacity-85 h-[54px] rounded-[13px]">
			<div className="flex flex-row mx-4 items-center">
				<img
					src="nemonemo.png"
					alt="album art"
					className="w-[40px] h-[40px] rounded-md"
				></img>
				<div className="flex flex-col my-4 mx-4">
					<p className="text-xs text-white tracking-wide">NemoNemo</p>
					<p className="text-xs text-white tracking-wide">NemoNemo . Yena</p>
				</div>
			</div>
		</div>
	);
}
