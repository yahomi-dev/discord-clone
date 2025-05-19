import { MdAdd, MdExpandMore } from 'react-icons/md';
import reactLogo from '../assets/react.svg';

const SideBar = () => {
	return (
		<div className="sidebar flex flex-[0.35] h-[100vh] bg-gray-600">
			<div className="sidebar-left flex flex-col px-4 py-2 space-y-3 items-center bg-gray-800">
				{Array.from({ length: 2 }, (_, i) => {
					return (
						<div
							key={`icon-${i}`}
							className="server-icon flex items-center justify-center w-13 h-13  rounded-full bg-gray-700"
						>
							<img src={reactLogo} className="logo react" alt="React logo" />
						</div>
					);
				})}
			</div>

			<div className="sidebar-right w-75 p-5 bg-gray-700">
				{/* top */}
				<div className="sidebar-top flex justify-between items-center text-white">
					<span className="font-bold">Discord</span>
					<MdExpandMore size={25} />
				</div>

				{/* channels */}

				<div className="sidebar-channels">
					<div className="sidebar-channels-header flex justify-between items-center text-white">
						<div className="sidebar-header flex">
							<MdExpandMore className="cursor-pointer" size={25} />
							<p>テキストチャンネル</p>
						</div>

						<MdAdd className="cursor-pointer" size={25} />
					</div>
				</div>
			</div>
		</div>
	);
};

export { SideBar };
