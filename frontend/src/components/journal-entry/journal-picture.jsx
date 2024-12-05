import SpotifyOverlay from "./spotify-overlay";

export default function JournalPicture() {
	return (
		<div className="m-6">
			<div className="relative inline-block w-[335px] h-[310px] rounded-2xl overflow-hidden">
				<img
					src="miffy2.jpg"
					alt="picture"
					className="w-full h-full object-cover"
				></img>
				<SpotifyOverlay />
			</div>
		</div>
	);
}
