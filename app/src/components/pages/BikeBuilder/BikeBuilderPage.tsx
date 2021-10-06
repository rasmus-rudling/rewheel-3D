import SidePanel from './SidePanel';
import BikeView from "./BikeView";


const BikeBuilderPage = () => {
	return (
		<div className="App">
			<div className="flex items-stretch h-full">
				<div className="flex-grow">
					<BikeView />
				</div>
				<SidePanel />
			</div>
		</div>
	);
};

export default BikeBuilderPage;
