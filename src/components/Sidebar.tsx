import reactLogo from '../assets/react.svg';

const SideBar = () => {
	return (
		<div className="sidebar flex flex-1 bg-gray-500">
			<div className="sidebar-left">
				<div>
					<img src={reactLogo} className="logo react" alt="React logo" />
					<img src={reactLogo} className="logo react" alt="React logo" />
				</div>
			</div>
			<div className="sidebar-right">SideBarRight</div>
		</div>
	);
};

export { SideBar };
