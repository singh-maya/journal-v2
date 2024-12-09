import JournalPicture from "./journal-picture";
import JournalText from "./journal-text";
import JournalInfo from "./journal-additional-info";

export default function JournalOverview() {
	return (
		<div className="bg-white bg-opacity-30 w-[434px] h-[600px] rounded-[40px] shadow-lg">
			<div className="grid grid-cols-1 justify-items-stretch">
				<JournalPicture/>
				<JournalText/>
				<JournalInfo/>
			</div>
		</div>
	);
}
