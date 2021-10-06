import SidePanel from './SidePanel';

const BikeBuilderPage = () => {
	return (
		<div className="App">
			<div className="flex items-stretch h-full">
				<div className="flex-grow"></div>
				<SidePanel />
			</div>
		</div>
	);
};

export default BikeBuilderPage;
