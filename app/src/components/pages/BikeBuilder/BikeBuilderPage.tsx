import SidePanel from './SidePanel';
import BikeView from './BikeView';

const BikeBuilderPage = () => {
	return (
		<div className="flex h-full">
			<div className="w-4/6 h-full">
				<BikeView />
			</div>
			<div className="w-2/6 h-full">
				<SidePanel />
			</div>
		</div>
	);
};

export default BikeBuilderPage;
