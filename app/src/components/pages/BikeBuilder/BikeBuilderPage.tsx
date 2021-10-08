import SidePanel from './sidePanel/SidePanel';
import BikeView from './BikeView';

const BikeBuilderPage = () => {
	return (
		<div className="flex h-full">
			<div className="h-full flex-grow">
				<BikeView />
			</div>
			<div className="h-full w-2/6 max-w-sm">
				<SidePanel />
			</div>
		</div>
	);
};

export default BikeBuilderPage;
