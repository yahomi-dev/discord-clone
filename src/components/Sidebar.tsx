import reactLogo from '../assets/react.svg';

const SideBar = () => {
	return (
		<div className="sidebar flex flex-[0.35] h-[100vh] bg-gray-500">
			<div className="sidebar-left flex flex-col mt-4 px-4 py-2 space-y-3 items-center bg-black">
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
			<div className="sidebar-right">SideBarRight</div>
		</div>
	);
};

export { SideBar };
